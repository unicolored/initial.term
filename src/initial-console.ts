import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {ref, createRef} from 'lit/directives/ref.js';
import {styles} from './lib/styles/styles.js';

interface Message {
  role: 'user' | 'developer';
  content: string;
}

interface Plugin {
  name: string;
  execute: (console: InitialConsole) => void;
}

@customElement('initial-console')
export class InitialConsole extends LitElement {
  static override styles = styles;

  theInput = createRef();

  @property({type: String}) banner = 'initial v1.0 - Type "init" or "help"';
  @property({type: String}) apiUrl = '';
  @property({type: Boolean, reflect: true}) private open = false;
  @property({type: Boolean, reflect: true}) private static = false;
  @property({type: Boolean, reflect: false}) private sounds = false;
  @state() private messages: string[] = [];
  @state() private conversation: Message[] = [];
  private promptSign = '::'; // >>
  private audioContext: AudioContext | null = null;
  private coreCommands: Record<string, () => void> = {
    init: () =>
      this._addOutput(`Welcome to initial! Type "help" fer commands.`),
    help: () =>
      this._addOutput(
        `Commands: init, help, clear, exit, cookie, lighthouse, seo, feedback${
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
    cookie: () => this._listCookies(),
    lighthouse: () => this._runLighthouse(),
    seo: () => this._checkSEO(),
  };
  pluginCommands: Record<string, (console: InitialConsole) => void> = {};

  constructor() {
    super();
    console.log('init!');
    this.loadPlugins();
    // Add keyboard listener in constructor
    if (!this.static) {
      document.addEventListener('keyup', this.handleKeydown.bind(this));
    }

    // Set banner with browser and site info
    const browser = this.getBrowserName();
    const site = window.location.hostname || 'unknown site';
    this.banner = `initial v1.0 @ ${site} on ${browser} - Type "init" or "help"`;
  }

  override disconnectedCallback() {
    // Clean up listener when element’s removed
    document.removeEventListener('keyup', this.handleKeydown.bind(this));
    super.disconnectedCallback();
  }

  override render() {
    if (this.sounds) {
      this.initSounds();
    }
    if (this.static) {
      this.show();
    }
    return html`
      <div class="wrapper">
        <div class="console-content" @click=${this.handleClick}>
          <div class="output">
            <div class="banner">${this.banner}</div>
            ${this.messages.map(
              (msg) =>
                html`<p class=${msg.startsWith('Error') ? 'error' : ''}>
                  ${msg}
                </p>`
            )}
          </div>
          <div class="input-line">
            <span class="prompt">${this.promptSign}</span>
            <input
              ${ref(this.theInput)}
              @keydown=${this.handleInput}
              placeholder=""
              autofocus
            />
          </div>
        </div>
      </div>
    `;
  }

  private initSounds() {
    this.audioContext = new (window.AudioContext || window.AudioContext)();
  }

  private playSound(frequency: number, type: OscillatorType, duration: number) {
    if (!this.audioContext) return;

    const gainNode = this.audioContext.createGain();

    const osc = this.audioContext.createOscillator();
    osc.type = type;
    osc.frequency.value = frequency;

    // Connect the oscillator to the gain node, then to the output
    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Set initial volume (0.5 = 50% volume)
    gainNode.gain.setValueAtTime(0.033, this.audioContext.currentTime);

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

    if (e.key === 'Enter') {
      if (!input) {
        this.playSound(100, 'sine', 0.01);
      } else {
        this._addOutput(`${this.promptSign} ${input}`, false, false);
        this._processCommand(input);
        (e.target as HTMLInputElement).value = '';
      }
    } else if (e.key === 'Escape') {
      this.close();
    }
  }

  private handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Help' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
      // Plain '2' key
      if (!this.open) {
        this.show();
      } else {
        this.close();
      }
    }
  }

  private handleClick() {
    this._focusInput();
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
        await new Promise((resolve) => setTimeout(resolve, 10));
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
    const convo = {model: 'initial-shell', messages: [...this.conversation]};
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
      : `ish: command not found: ${input}`;
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

  private _listCookies() {
    const cookies = document.cookie
      .split(';')
      .map((cookie) => cookie.trim().split('=')[0]);
    if (cookies.length === 0 || (cookies.length === 1 && cookies[0] === '')) {
      this._addOutput('No cookies found on this site.');
    } else {
      this._addOutput('Cookies found:');
      cookies.forEach((name) => {
        if (name) this._addOutput(`- ${name}`);
      });
    }
  }

  private getBrowserName(): string {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('firefox')) return 'Firefox';
    if (ua.includes('chrome')) return 'Chrome';
    if (ua.includes('safari')) return 'Safari';
    if (ua.includes('edge')) return 'Edge';
    if (ua.includes('opera') || ua.includes('opr')) return 'Opera';
    return 'Unknown Browser';
  }

  show() {
    if (!this.open) {
      this.open = true;
      this._focusInput();
      this.playSound(900, 'triangle', 0.08);
    }
  }

  close() {
    if (this.open) {
      this.open = false;
      this.playSound(500, 'sine', 0.05);
    }
  }

  private _focusInput() {
    const input = this.theInput.value as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'initial-console': InitialConsole;
  }
}

declare global {
  interface Window {
    InitialIntConsole: {
      registerPlugin: (
        name: string,
        execute: (console: InitialConsole) => void
      ) => void;
    };
  }
}

window.InitialIntConsole = {
  registerPlugin: (name, execute) => {
    const console = document.querySelector('initial-console') as InitialConsole;
    if (console) console.pluginCommands[name] = execute;
  },
};
