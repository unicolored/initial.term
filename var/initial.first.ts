import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

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
    /* Same styles */
  `;

  @property({type: String}) banner = 'initial v1.0 - Type "init" or "help"';
  @state() private open = false;
  @state() private messages: string[] = [];
  @state() private conversation: Message[] = [];
  private audioContext: AudioContext | null = null;
  private coreCommands: Record<string, () => void> = {
    init: () => this.addOutput(`Welcome to initial! Type "help" fer commands.`),
    help: () =>
      this.addOutput(
        `Commands: init, help, clear, exit${
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
    /* Same as before */
  }
  private playSound(frequency: number, type: OscillatorType, duration: number) {
    /* Same */
  }

  private async loadPlugins() {
    try {
      const response = await fetch('https://marketplace.initial.sh/plugins', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });
      const plugins: Plugin[] = await response.json();
      this.registerPlugins(plugins);
    } catch (e) {
      const demoPlugins: Plugin[] = [
        {name: 'ping', execute: (c) => c.addOutput('Pong!')},
        {
          name: 'time',
          execute: (c) =>
            c.addOutput(`Time be ${new Date().toLocaleTimeString()}!`),
        },
        {name: 'feedback', execute: (c) => c.startFeedback()},
      ];
      this.registerPlugins(demoPlugins);
    }
  }

  private registerPlugins(plugins: Plugin[]) {
    /* Same */
  }
  private handleInput(e: KeyboardEvent) {
    /* Same */
  }
  private addOutput(text: string, isError = false) {
    /* Same */
  }
  private processCommand(command: string) {
    /* Same */
  }
  private emitConversation() {
    /* Same */
  }
  private fakeResponse(input: string): string {
    /* Same */
  }
  private startFeedback() {
    /* Same */
  }
  private submitFeedback() {
    /* Same */
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
      registerPlugin: (
        name: string,
        execute: (console: Initial) => void
      ) => void;
    };
  }
}

window.Initial = {
  registerPlugin: (name, execute) => {
    const console = document.querySelector('initial') as Initial;
    if (console) console.pluginCommands[name] = execute;
  },
};
