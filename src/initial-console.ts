import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {stylesConsole} from './lib/styles/styles-console.js';
import {Audio} from './lib/audio';
import './initial-shell';
import {ConsoleConfig} from './lib/interface';
import {createRef, Ref, ref} from 'lit/directives/ref.js';
import {InitialShell} from './initial-shell';

@customElement('initial-console')
export class InitialConsole extends LitElement {
  static override styles = stylesConsole;

  @property({type: Object}) config: ConsoleConfig = {
    showDrop: false,
    // Default values for other configuration options
  };
  @property({type: String}) apiUrl = '';
  @property({type: Boolean, reflect: true}) private open = false;
  @property({type: Boolean, reflect: true}) private static = false;
  @property({type: Boolean, reflect: false}) private sounds = false;
  pluginCommands: Record<string, (console: InitialConsole) => void> = {};

  private audio: Audio | null = null;

  private shellElement: Ref<InitialShell> = createRef(); // This will hold the reference to the initial-sh element

  constructor() {
    super();
    // Add keyboard listener in constructor
    if (!this.static) {
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
      this.shellElement.value.addEventListener('callback:close', () => {
        this.close();
      });
    }
  }

  override render() {
    return html`<initial-shell
        ${ref(this.shellElement)}
        static
        ?sounds=${this.sounds}
      ></initial-shell>
      ${this.config.showDrop && !this.static
        ? html`
            <button @click=${() => (this.open ? this.close() : this.show())}>
              initial
              ${this.open
                ? html`<svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                    ></path>
                  </svg>`
                : html`<svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    ></path>
                  </svg>`}
            </button>
          `
        : ''} `;
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
