import {LitElement, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {customElement, property} from 'lit/decorators.js';
import {stylesConsole} from './lib/styles/styles-console.js';
import {Audio} from './lib/audio';
import './terminal';
import {ConsoleConfig} from './lib/interface';
import {createRef, Ref, ref} from 'lit/directives/ref.js';
import {Terminal} from './terminal';

@customElement('initial-console')
export class Console extends LitElement {
  static override styles = stylesConsole;

  @property({type: Object}) config: Partial<ConsoleConfig> = {
    showDrop: false,
  };
  @property({type: Boolean, reflect: true}) private open = false;
  @property({type: String})
  private banner!: string;
  @property({type: Boolean}) private static = false;
  @property({type: Boolean}) private sounds = false;

  private audio: Audio | null = null;

  private shellElement: Ref<Terminal> = createRef();

  constructor() {
    super();

    if (!this.static) {
      // Add keyboard listener in constructor
      document.addEventListener('keyup', this.handleKeydown.bind(this));
    }
  }

  override disconnectedCallback() {
    // Clean up listener when element’s removed
    document.removeEventListener('keyup', this.handleKeydown.bind(this));

    super.disconnectedCallback();
  }

  override firstUpdated() {
    if (this.static) {
      this.show();
    }

    if (this.sounds) {
      this.audio = new Audio();
    }

    if (this.shellElement?.value) {
      this.shellElement.value.addEventListener('console:close', () => {
        this.close();
      });
    }
  }

  override render() {
    const classes = {opened: this.open};

    return html`<initial-terminal
        ${ref(this.shellElement)}
        banner=${this.banner}
        sounds=${this.sounds}
      ></initial-terminal>
      ${this.config.showDrop && !this.static
        ? html`
            <button
              @click=${() => (this.open ? this.close() : this.show())}
              class=${classMap(classes)}
            >
              initial
            </button>
          `
        : ''} `;
  }

  private handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Help' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
      if (!this.open) {
        this.show();
      } else {
        this.close();
      }
    }
  }

  show() {
    if (!this.open) {
      this.open = true;
      this.audio?.playSound(900, 'triangle', 0.08);
      this.shellElement.value?.focusInput();
    }
  }

  close() {
    if (this.open) {
      this.open = false;
      this.audio?.playSound(500, 'sine', 0.05);
    }
  }
}
