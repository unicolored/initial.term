import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {createRef, ref} from 'lit/directives/ref.js';
import {stylesSh} from './lib/styles/styles-sh';
import {Shell} from './lib/shell';
import {colorize} from './lib/core/helper';
import {Audio} from './lib/audio';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

@customElement('initial-sh')
export class InitialSh extends LitElement {
  static override styles = stylesSh;

  @property({type: String, reflect: false}) private banner =
    'initial.sh - Type "info"';
  @property({type: Boolean, reflect: false}) private sounds = false;

  protected readonly shell: Shell;
  private readonly theInput = createRef();
  private audio: Audio | null = null;

  private readonly site = window.location.hostname || 'unknown site';
  // private readonly browser = getBrowserName();
  private readonly promptSign!: string;

  pluginCommands: Record<string, (terminal: InitialSh) => void> = {};
  private history: string[] = [];
  // private messages: string[] = [];

  @property({type: Array}) messages: string[] = []; // Tracks the currently typed text
  @property({type: Array}) typedMessages: string[] = []; // Tracks the currently typed text
  @property({type: Number}) typingSpeed = 100; // Speed in milliseconds per character

  constructor() {
    super();

    this.shell = new Shell({
      banner: this.banner,
      // cursorBlink: true,
      // cursorInactiveStyle: 'outline',
    });

    this.promptSign = colorize`${[this.site, ['red', 'bold']]} >> `;

    this.shell.init();

    this.shell.events.subscribe((event: Event) => {
      console.log(event);
      this.dispatchEvent(event);
    });
  }

  override firstUpdated() {
    if (this.sounds) {
      this.audio = new Audio();
    }

    const paragraphs =
      this.shadowRoot?.querySelectorAll<HTMLParagraphElement>('p.typed');
    if (paragraphs) {
      paragraphs.forEach((p) => {
        p;
      });
    }
  }

  override disconnectedCallback() {
    this.shell.events.unsubscribe();
    this.shell.clear();

    super.disconnectedCallback();
  }

  override render() {
    this.history = [...this.shell.history];
    this.messages = [...this.shell.messages];

    return html`
      <div class="console" @click=${this.handleClick}>
        <div class="terminal">
          <div class="shell">
            ${this.history.map((msg) => {
              return html`<p class=${msg.startsWith('Error') ? 'error' : ''}>
                ${unsafeHTML(msg)}
              </p>`;
            })}
            ${this.messages.map((msg) => {
              return html`<p class="typed">${unsafeHTML(msg)}</p>`;
            })}
          </div>
          <div class="input-line">
            <span class="prompt">
              ${html`${unsafeHTML(this.promptSign)}`}
            </span>
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

  private async handleInput(e: KeyboardEvent) {
    const input = (e.target as HTMLInputElement).value.trim();

    if (e.key === 'Enter') {
      (e.target as HTMLInputElement).value = '';

      if (!input) {
        this.audio?.playSound(100, 'sine', 0.01);

        return;
      }

      this.shell.putMessage([`${this.promptSign} ${input}`]);

      await this.shell.processInput(input);

      this.requestUpdate();
    }
  }

  private handleClick() {
    const input = this.theInput.value as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'initial-sh': InitialSh;
  }
}

declare global {
  interface Window {
    InitialIntTerminal: {
      registerPlugin: (
        name: string,
        execute: (console: InitialSh) => void
      ) => void;
    };
  }
}

window.InitialIntTerminal = {
  registerPlugin: (name, execute) => {
    const console = document.querySelector('initial-terminal') as InitialSh;
    if (console) console.pluginCommands[name] = execute;
  },
};
