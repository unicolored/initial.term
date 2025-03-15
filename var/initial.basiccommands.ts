import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

interface Message {
  role: 'user' | 'developer';
  content: string;
}

interface Plugin {
  name: string;
  execute: (console: Initial) => void;
}

@customElement('initial')
export class Initial extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: -50%;
      left: 0;
      width: 100%;
      height: 50%;
      background: rgba(0, 0, 0, 0.9);
      transition: top 0.3s ease-in-out;
      z-index: 1000;
      display: block;
    }
    :host([open]) {
      top: 0;
    }
    .console-content {
      height: 100%;
      padding: 15px;
      font-family: 'Courier New', monospace;
      color: #00ff00;
      background: #1a1a1a;
      overflow-y: auto;
    }
    .banner {
      color: #ffff00;
      margin-bottom: 10px;
    }
    .output {
      flex-grow: 1;
      margin-bottom: 10px;
      overflow-y: auto;
    }
    .input-line {
      display: flex;
      align-items: center;
    }
    .prompt {
      margin-right: 5px;
    }
    input {
      background: none;
      border: none;
      color: #00ff00;
      font-family: inherit;
      width: 100%;
      outline: none;
    }
    input::placeholder {
      color: #008000;
    }
    .error {
      color: #ff4040;
    }
  `;

  @property({ type: String }) banner = 'initial v1.0 - Type "init" or "help"';
  @property({ type: String }) apiUrl = '';
  @state() private open = false;
  @state() private messages: string[] = [];
  @state() private conversation: Message[] = [];
  private audioContext: AudioContext | null = null;
  private coreCommands: Record<string, () => void> = {
    init: () => this.addOutput(`Welcome to initial! Type "help" fer commands.`),
    help: () => this.addOutput(`Commands: init, help, clear, exit, lighthouse, seo, feedback${Object.keys(this.pluginCommands).length ? ', ' + Object.keys(this.pluginCommands).join(', ') : ''}`),
    clear: () => {
      this.messages = [];
      this.conversation = [];
    },
    exit: () => this.close(),
    lighthouse: () => this.runLighthouse(),
    seo: () => this.checkSEO(),
  };
  private pluginCommands: Record<string, (console: Initial) => void> = {};

  constructor() {
    super();
    this.initSounds();
    this.loadPlugins();
  }

  render() {
    return html`
      <div class="console-content">
        <div class="banner">${this.banner}</div>
        <div class="output">
          ${this.messages.map(msg => html`<p class=${msg.startsWith('Error') ? 'error' : ''}>${msg}</p>`)}
        </div>
        <div class="input-line">
          <span class="prompt">></span>
          <input @keypress=${this.handleInput} placeholder="Type yer command..." autofocus />
        </div>
      </div>
    `;
  }

  private initSounds() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  private playSound(frequency: number, type: OscillatorType, duration: number) {
    if (!this.audioContext) return;
    const osc = this.audioContext.createOscillator();
    osc.type = type;
    osc.frequency.value = frequency;
    osc.connect(this.audioContext.destination);
    osc.start();
    osc.stop(this.audioContext.currentTime + duration);
  }

  private async loadPlugins() {
    const defaultPlugins: Plugin[] = [
      { name: 'ping', execute: (c) => c.addOutput('Pong!') },
      { name: 'time', execute: (c) => c.addOutput(`Time be ${new Date().toLocaleTimeString()}!`) },
      { name: 'feedback', execute: (c) => c.startFeedback() },
    ];
    this.registerPlugins(defaultPlugins);

    if (this.apiUrl) {
      try {
        const response = await fetch(`${this.apiUrl}/plugins`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const plugins: Plugin[] = await response.json();
        this.registerPlugins(plugins);
      } catch (e) {
        this.addOutput('Error: Couldn’t fetch plugins', true);
      }
    }
  }

  private registerPlugins(plugins: Plugin[]) {
    plugins.forEach(plugin => {
      this.pluginCommands[plugin.name] = plugin.execute;
    });
  }

  private handleInput(e: KeyboardEvent) {
    const input = (e.target as HTMLInputElement).value.trim();
    if (e.key === 'Enter' && input) {
      this.addOutput(`> ${input}`);
      this.processCommand(input);
      (e.target as HTMLInputElement).value = '';
    } else if (e.key === 'Escape') {
      this.close();
    }
  }

  private addOutput(text: string, isError = false) {
    if (isError) this.playSound(200, 'sawtooth', 0.05);
    this.messages = [...this.messages, text];
  }

  private processCommand(command: string) {
    const cmd = command.toLowerCase();
    if (this.coreCommands[cmd]) {
      this.coreCommands[cmd]();
    } else if (this.pluginCommands[cmd]) {
      this.pluginCommands[cmd](this);
    } else {
      this.conversation.push({ role: 'user', content: command });
      this.emitConversation();
    }
  }

  private async emitConversation() {
    const convo = { model: 'gpt-4o', messages: [...this.conversation] };
    let response: string;

    if (this.apiUrl) {
      try {
        const res = await fetch(`${this.apiUrl}/convo`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(convo),
        });
        response = (await res.json()).response || 'Arr, server be silent!';
      } catch (e) {
        response = 'Error: Couldn’t reach server!';
      }
    } else {
      response = this.fakeResponse(convo.messages[convo.messages.length - 1].content);
    }

    this.conversation.push({ role: 'developer', content: response });
    this.addOutput(response);
    console.log(JSON.stringify(convo, null, 2));
  }

  private fakeResponse(input: string): string {
    return input === 'Are semicolons optional in JavaScript?'
      ? 'Aye, mostly optional thanks to ASI, but watch fer bugs!'
      : 'Arr, no answer fer that yet! Try a command.';
  }

  private runLighthouse() {
    // Standalone mock fer MVP—real Lighthouse needs browser API
    this.addOutput('Runnin’ Lighthouse audit... (mock fer now)');
    this.addOutput('Performance: 85/100 - Speed be decent, matey!');
    this.addOutput('SEO: 90/100 - Search engines’ll find ye fine.');
    this.addOutput('Run in Chrome DevTools fer the real deal!');
    // Future: Hook into Lighthouse API if runnin’ in browser context
  }

  private checkSEO() {
    // Standalone mock—real check’d need Ahrefs API
    this.addOutput('Checkin’ SEO... (mock fer now)');
    this.addOutput('Title: Good - Ye got one!');
    this.addOutput('Meta Desc: Fair - Could be snappier.');
    this.addOutput('Visit ahrefs.com/webmaster-tools fer a proper look!');
    if (this.apiUrl) {
      this.addOutput('API check pending - set up initial.sh fer real SEO data!');
    }
  }

  private startFeedback() {
    this.addOutput('Enter yer feedback (type "done" to submit):');
    this.conversation = [];
    this.pluginCommands['temp-feedback'] = () => {
      const lastInput = this.conversation[this.conversation.length - 1]?.content;
      if (lastInput === 'done') {
        this.submitFeedback();
        delete this.pluginCommands['temp-feedback'];
      }
    };
  }

  private async submitFeedback() {
    const feedback = this.conversation.map(m => m.content).join('\n');
    if (this.apiUrl) {
      try {
        await fetch(`${this.apiUrl}/feedback`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ feedback }),
        });
        this.addOutput('Feedback sent! Thanks, matey!');
      } catch (e) {
        this.addOutput('Error: Feedback lost!', true);
      }
    } else {
      this.addOutput('Feedback logged locally: ' + feedback);
    }
  }

  open() {
    this.open = true;
    this.playSound(400, 'square', 0.1);
  }

  close() {
    this.open = false;
    this.playSound(300, 'square', 0.1);
  }
}

declare global {
  interface Window {
    Initial: {
      registerPlugin: (name: string, execute: (console: Initial) => void) => void;
    };
  }
}

window.Initial = {
  registerPlugin: (name, execute) => {
    const console = document.querySelector('initial') as Initial;
    if (console) console.pluginCommands[name] = execute;
  },
};
