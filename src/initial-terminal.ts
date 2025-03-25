import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {createRef, ref} from 'lit/directives/ref.js';
import {stylesTerminal} from './lib/styles/styles-terminal.js';
import {Shell} from './lib/shell';
import {getBrowserName} from './lib/core/helper';
import {Audio} from './lib/audio';

@customElement('initial-terminal')
export class InitialTerminal extends LitElement {
  static override styles = stylesTerminal;

  @property({type: String, reflect: false}) private banner =
    'initial.sh - Type "info"';
  @property({type: Boolean, reflect: false}) private sounds = true;

  private readonly shell: Shell;
  private readonly theInput = createRef();
  private readonly audio: Audio | null = null;

  private readonly site = window.location.hostname || 'unknown site';
  private readonly browser = getBrowserName();
  private readonly promptSign = `${this.site}@${this.browser} >> `;

  pluginCommands: Record<string, (terminal: InitialTerminal) => void> = {};
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

    if (this.sounds) {
      this.audio = new Audio();
    }

    this.shell.init();
  }

  override firstUpdated() {
    const paragraphs =
      this.shadowRoot?.querySelectorAll<HTMLParagraphElement>('p.typed');
    if (paragraphs) {
      paragraphs.forEach((p) => {
        p;
      });
    }
  }

  // inputElement(): HTMLInputElement | null {
  //   return (this.renderRoot as DocumentFragment)
  //     .getElementById('bottomInput')
  //     ?.querySelector('input') as HTMLInputElement | null;
  // }

  override disconnectedCallback() {
    this.shell.clear();
    super.disconnectedCallback();
  }

  // override async before() {
  //   if (this.shell) {
  //   this.messages = [...this.shell.history];
  //
  //   let typedText = '';
  //   const index = this.messages.length - 1;
  //
  //   if (index > 1) {
  //     for (const char of this.messages[index]) {
  //       typedText += char;
  //       this.messages = [
  //         ...this.messages.slice(0, index),
  //         typedText,
  //         ...this.messages.slice(index + 1),
  //       ];
  //       await new Promise((resolve) => setTimeout(resolve, 10));
  //     }
  //   }
  //   }
  //
  //   super.requestUpdate(name, oldValue, options);
  // }

  override render() {
    this.history = [...this.shell.history];
    console.log('history', this.history);
    this.messages = [...this.shell.messages];
    console.log('messages', this.messages);

    return html`
      <div class="console" @click=${this.handleClick}>
        <div class="terminal">
          <div class="shell">
            ${this.history.map((msg) => {
              return html`<p class=${msg.startsWith('Error') ? 'error' : ''}>
                ${msg}
              </p>`;
            })}
            ${this.messages.map((msg) => {
              return html`<p class="typed">${msg}</p>`;
            })}
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
