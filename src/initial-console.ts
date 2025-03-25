import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {stylesConsole} from './lib/styles/styles-console.js';

@customElement('initial-console')
export class InitialConsole extends LitElement {
  static override styles = stylesConsole;

  @property({type: String}) banner = 'initial v1.0 - Type "init" or "help"';
  @property({type: String}) apiUrl = '';
  @property({type: Boolean, reflect: true}) private open = false;
  @property({type: Boolean, reflect: true}) private static = false;
  @property({type: Boolean, reflect: false}) private sounds = false;
  private audioContext: AudioContext | null = null;
  pluginCommands: Record<string, (console: InitialConsole) => void> = {};

  constructor() {
    super();
    console.log('init!');
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
    if (this.sounds) {
      this.initSounds();
    }
    if (this.static) {
      this.show();
    }
  }

  override render() {
    return html` <initial-terminal id="terminal" static></initial-terminal> `;
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
      this.playSound(900, 'triangle', 0.08);
    }
  }

  close() {
    if (this.open) {
      this.open = false;
      this.playSound(500, 'sine', 0.05);
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
