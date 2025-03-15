import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

interface Message {
  role: 'user' | 'developer';
  content: string;
}

interface Plugin {
  name: string;
  execute: () => void;
}

@customElement('initial-sh')
export class InitialSh extends LitElement {
  static styles = css`
    /* Same styles as before */
  `;

  @property({type: String}) banner = 'initial.sh v1.0 - Type "help"';
  @state() private open = false;
  @state() private messages: string[] = [];
  @state() private conversation: Message[] = [];
  private coreCommands: Record<string, () => void> = {
    help: () =>
      this.addOutput(
        `Commands: help, clear, exit${
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
  private pluginCommands: Record<string, () => void> = {};

  constructor() {
    super();
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

  // Same methods as before, just renamed class to InitialSh
  private handleInput(e: KeyboardEvent) {
    /* ... */
  }
  private addOutput(text: string) {
    /* ... */
  }
  private async loadPlugins() {
    /* ... */
  }
  private processCommand(command: string) {
    /* ... */
  }
  private emitConversation() {
    /* ... */
  }
  private fakeResponse(input: string): string {
    /* ... */
  }
  open() {
    this.open = true;
  }
  close() {
    this.open = false;
  }
}

// Expose plugin registration globally
declare global {
  interface Window {
    InitialSh: {
      registerPlugin: (name: string, execute: () => void) => void;
    };
  }
}

window.InitialSh = {
  registerPlugin: (name, execute) => {
    const console = document.querySelector('initial-sh') as InitialSh;
    if (console) console.pluginCommands[name] = execute;
  },
};
