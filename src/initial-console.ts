import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {stylesConsole} from './lib/styles/styles-console.js';
import {Audio} from './lib/audio';
import './initial-sh';

@customElement('initial-console')
export class InitialConsole extends LitElement {
  static override styles = stylesConsole;

  @property({type: String}) banner = 'initial v1.0 - Type "init" or "help"';
  @property({type: String}) apiUrl = '';
  @property({type: Boolean, reflect: true}) private open = false;
  @property({type: Boolean, reflect: true}) private static = false;
  @property({type: Boolean, reflect: false}) private sounds = false;
  pluginCommands: Record<string, (console: InitialConsole) => void> = {};

  private audio: Audio | null = null;

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
  }

  override render() {
    return html`<initial-sh static ?sounds=${this.sounds}></initial-sh>`;
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
