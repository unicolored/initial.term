import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {createRef, Ref, ref} from 'lit/directives/ref.js';
import {stylesShell} from './lib/styles/styles-shell';
import {Shell} from 'initial-shell';
import {Audio} from './lib/audio';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

@customElement('initial-terminal')
export class Terminal extends LitElement {
  static override styles = stylesShell;

  @property({type: String}) private banner = 'initial.sh - Type "info"';
  @property({type: Boolean}) private sounds = false;

  protected shell: Shell;
  private readonly theInput: Ref<HTMLInputElement> = createRef();
  private audio: Audio | null = null;

  private history: string[] = [];
  // private messages: string[] = [];

  focusInput = () => {
    this.theInput?.value?.focus();
  };

  @property({type: Array}) messages: string[] = []; // Tracks the currently typed text
  @property({type: Array}) typedMessages: string[] = []; // Tracks the currently typed text
  @property({type: Number}) typingSpeed = 100; // Speed in milliseconds per character

  constructor() {
    super();

    this.shell = new Shell();

    this.shell.events.subscribe((event: Event) => {
      this.dispatchEvent(event);
    });
  }

  loadShell(shell: Shell) {
    this.shell = shell;
    this.requestUpdate()
  }

  override firstUpdated() {
    console.log('firstUpdated', this.banner);
    this.shell.init({
      banner: this.banner,
    });

    this.history = [...this.shell.history];
    this.messages = [...this.shell.messages];

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
      <div class="initial-console-window" @click=${this.handleConsoleClick}>
        <div class="initial-console-wrapper">
          <div class="initial-console-shell">
            ${this.history.map((msg) => {
              return html`<p class=${msg.startsWith('Error') ? 'error' : ''}>
                ${unsafeHTML(msg)}
              </p>`;
            })}
            ${this.messages.map((msg) => {
              return html`<p class="typed">${unsafeHTML(msg)}</p>`;
            })}
          </div>
          <div class="initial-console-input-row">
            <span class="initial-console-input-prompt">
              ${html`${unsafeHTML(this.shell.promptSign)}`}
            </span>
            <input
              class="initial-console-input-input"
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

      this.shell.putMessage([`${this.shell.promptSign} ${input}`]);

      await this.shell.processInput(input);

      this.requestUpdate();
    }
  }

  private handleConsoleClick() {
    const input = this.theInput.value as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }
}
