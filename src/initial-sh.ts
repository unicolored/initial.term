import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

interface Message {
  role: 'user' | 'developer';
  content: string;
}

interface Plugin {
  name: string;
  execute: (console: InitialSh) => void;
}

@customElement('initial-sh') // Changed from 'initial-sh' to 'initial'
export class InitialSh extends LitElement {
  static override styles = css`
    :host {
      position: fixed;
      top: -50%;
      left: 0;
      width: 100vw;
      height: 50vh;
      background: rgba(0, 0, 0, 0.9);
      transition: top 0.3s ease-in-out;
      z-index: 1000;
      display: flex;
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
      background: red;
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

  @property({type: String}) banner = 'initial v1.0 - Type "init" or "help"';
  @property({type: String}) apiUrl = '';
  @property({type: Boolean, reflect: true}) private open = false;
  @state() private messages: string[] = [];
  @state() private conversation: Message[] = [];
  private audioContext: AudioContext | null = null;
  private coreCommands: Record<string, () => void> = {
    init: () =>
      this._addOutput(`Welcome to initial! Type "help" fer commands.`),
    help: () =>
      this._addOutput(
        `Commands: init, help, clear, exit, lighthouse, seo, feedback${
          Object.keys(this.pluginCommands).length
            ? ', ' + Object.keys(this.pluginCommands).join(', ')
            : ''
        }`
      ),
    clear: () => {
      this.messages = [];
      this.conversation = [];
    },
    exit: () => this.close(),
    lighthouse: () => this._runLighthouse(),
    seo: () => this._checkSEO(),
  };
  pluginCommands: Record<string, (console: InitialSh) => void> = {};

  constructor() {
    super();
    this.initSounds();
    this.loadPlugins();
  }

  override render() {
    return html`
      <div class="console-content">
        <div class="banner">${this.banner}</div>
        <div class="output">
          ${this.messages.map(
            (msg) =>
              html`<p class=${msg.startsWith('Error') ? 'error' : ''}>
                ${msg}
              </p>`
          )}
        </div>
        <div class="input-line">
          <span class="prompt">></span>
          <input
            @keypress=${this.handleInput}
            placeholder="Type yer command..."
            autofocus
          />
        </div>
      </div>
    `;
  }

  private initSounds() {
    this.audioContext = new (window.AudioContext || window.AudioContext)();
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
      {name: 'ping', execute: (c) => c._addOutput('Pong!')},
      {
        name: 'time',
        execute: (c) =>
          c._addOutput(`Time be ${new Date().toLocaleTimeString()}!`),
      },
      {name: 'feedback', execute: (c) => c._startFeedback()},
    ];
    this.registerPlugins(defaultPlugins);

    if (this.apiUrl) {
      try {
        const response = await fetch(`${this.apiUrl}/plugins`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        });
        const plugins: Plugin[] = await response.json();
        this.registerPlugins(plugins);
      } catch (e) {
        this._addOutput('Error: Couldn’t fetch plugins', true);
      }
    }
  }

  private registerPlugins(plugins: Plugin[]) {
    plugins.forEach((plugin) => {
      this.pluginCommands[plugin.name] = plugin.execute;
    });
  }

  private handleInput(e: KeyboardEvent) {
    const input = (e.target as HTMLInputElement).value.trim();
    if (e.key === 'Enter' && input) {
      this._addOutput(`> ${input}`, false, false);
      this._processCommand(input);
      (e.target as HTMLInputElement).value = '';
    } else if (e.key === 'Escape') {
      this.close();
    }
  }

  private async _addOutput(text: string, isError = false, typeEffect = true) {
    if (isError) this.playSound(200, 'sawtooth', 0.05);

    if (typeEffect && text.length > 1) {
      let typedText = '';
      this.messages = [...this.messages, typedText];
      const index = this.messages.length - 1;

      for (const char of text) {
        typedText += char;
        this.messages = [
          ...this.messages.slice(0, index),
          typedText,
          ...this.messages.slice(index + 1),
        ];
        await new Promise((resolve) => setTimeout(resolve, 30));
        this.requestUpdate();
      }

      if (isError) this.messages[index] = `Error: ${typedText}`;
    } else {
      this.messages = [...this.messages, isError ? `Error: ${text}` : text];
    }
  }

  private _processCommand(command: string) {
    const cmd = command.toLowerCase();
    if (this.coreCommands[cmd]) {
      this.coreCommands[cmd]();
    } else if (this.pluginCommands[cmd]) {
      this.pluginCommands[cmd](this);
    } else {
      this.conversation.push({role: 'user', content: command});
      this._emitConversation();
    }
  }

  private async _emitConversation() {
    const convo = {model: 'gpt-4o', messages: [...this.conversation]};
    let response: string;

    if (this.apiUrl) {
      try {
        const res = await fetch(`${this.apiUrl}/convo`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(convo),
        });
        response = (await res.json()).response || 'Arr, server be silent!';
      } catch (e) {
        response = 'Error: Couldn’t reach server!';
      }
    } else {
      response = this._fakeResponse(
        convo.messages[convo.messages.length - 1].content
      );
    }

    this.conversation.push({role: 'developer', content: response});
    this._addOutput(response);
  }

  private _fakeResponse(input: string): string {
    return input === 'Are semicolons optional in JavaScript?'
      ? 'Aye, mostly optional thanks to ASI, but watch fer bugs!'
      : 'Arr, no answer fer that yet! Try a command.';
  }

  private async _runLighthouse() {
    this._addOutput('Runnin’ Lighthouse audit... (mock fer now)');
    await new Promise((resolve) => setTimeout(resolve, 500));
    this._addOutput('Performance: 85/100 - Speed be decent, matey!');
    this._addOutput('SEO: 90/100 - Search engines’ll find ye fine.');
    this._addOutput('Run in Chrome DevTools fer the real deal!');
  }

  private async _checkSEO() {
    this._addOutput('Checkin’ SEO... (mock fer now)');
    await new Promise((resolve) => setTimeout(resolve, 500));
    this._addOutput('Title: Good - Ye got one!');
    this._addOutput('Meta Desc: Fair - Could be snappier.');
    this._addOutput('Visit ahrefs.com/webmaster-tools fer a proper look!');
  }

  private _startFeedback() {
    this._addOutput('Enter yer feedback (type "done" to submit):');
    this.conversation = [];
    this.pluginCommands['temp-feedback'] = () => {
      const lastInput =
        this.conversation[this.conversation.length - 1]?.content;
      if (lastInput === 'done') {
        this._submitFeedback();
        delete this.pluginCommands['temp-feedback'];
      }
    };
  }

  private async _submitFeedback() {
    const feedback = this.conversation.map((m) => m.content).join('\n');
    if (this.apiUrl) {
      try {
        await fetch(`${this.apiUrl}/feedback`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({feedback}),
        });
        this._addOutput('Feedback sent! Thanks, matey!');
      } catch (e) {
        this._addOutput('Error: Feedback lost!', true);
      }
    } else {
      this._addOutput('Feedback logged locally: ' + feedback);
    }
  }

  show() {
    console.log('open', this.open);
    if (!this.open) {
      this.open = true;
      this.playSound(400, 'square', 0.1);
    }
    console.log('open', this.open);
  }

  close() {
    if (this.open) {
      this.open = false;
      this.playSound(300, 'square', 0.1);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    initial: InitialSh;
  }
}

declare global {
  interface Window {
    Initial: {
      registerPlugin: (
        name: string,
        execute: (console: InitialSh) => void
      ) => void;
    };
  }
}

window.Initial = {
  registerPlugin: (name, execute) => {
    const console = document.querySelector('initial-sh') as InitialSh; // Updated to 'initial-sh'
    if (console) console.pluginCommands[name] = execute;
  },
};
