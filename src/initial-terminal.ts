import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {createRef, ref} from 'lit/directives/ref.js';
import {stylesTerminal} from './lib/styles/styles-terminal.js';
import {Shell} from './lib/shell';
import {getBrowserName} from './lib/core/helper';

@customElement('initial-terminal')
export class InitialTerminal extends LitElement {
  static override styles = stylesTerminal;

  shell: Shell;

  theInput = createRef();

  @property({type: String}) banner = 'initial v1.0 - Type "init" or "help"';
  @property({type: Boolean, reflect: false}) private sounds = true;
  private readonly promptSign: string; // >>
  private audioContext: AudioContext | null = null;
  pluginCommands: Record<string, (terminal: InitialTerminal) => void> = {};
  private readonly browser: string;
  private readonly site: string;

  constructor() {
    super();

    this.shell = new Shell({
      cols: 60,
      rows: 33,
      cursorInactiveStyle: 'outline',
      minimumContrastRatio: 7,
      disableStdin: false,
      fontSize: 16,
      theme: {},
      fontFamily: 'Courier New, monospace',
      fontWeight: 'normal',
      cursorBlink: true,
    });

    this.browser = getBrowserName();
    this.site = window.location.hostname || 'unknown site';
    this.banner = `initial v1.0 - Type "init" or "help"`;

    this.promptSign = `${this.site}@${this.browser} >> `;
  }

  override firstUpdated() {
    if (this.sounds) {
      this.initSounds();
    }

    this.shell.init(this.containerElement()!);

    this.shell.writeln(this.banner);
  }

  containerElement() {
    return (this.renderRoot as DocumentFragment).getElementById(
      'console-content'
    );
  }

  inputElement(): HTMLInputElement | null {
    return (this.renderRoot as DocumentFragment)
      .getElementById('bottomInput')
      ?.querySelector('input') as HTMLInputElement | null;
  }

  override disconnectedCallback() {
    // Clean up listener when element’s removed
    // document.removeEventListener('keyup', this.handleKeydown.bind(this));

    // this.shell.clear();
    super.disconnectedCallback();
  }

  override render() {
    console.log('⭐️ RENDER');
    return html`
      <div class="console">
        <div class="terminal" @click=${this.handleClick}>
          <div class="shell">
            <div class="banner">${this.banner}</div>
            ${this.shell.messages.map(
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

  private async handleInput(e: KeyboardEvent) {
    const input = (e.target as HTMLInputElement).value.trim();

    if (e.key === 'Enter') {
      (e.target as HTMLInputElement).value = '';
      if (!input) {
        this.playSound(100, 'sine', 0.01);
      } else {
        // this.playSound(200, 'sawtooth', 0.05);

        this.shell.messages.push(`${this.promptSign} ${input}`);

        const response = await this.shell._addOutput(input, false);

        // if (this.shell.messages.length > 1) {
        let typedText = '';
        // this.shell.messages = [...this.shell.messages, typedText];
        const index = this.shell.messages.length - 1;

        for (const char of response) {
          typedText += char;
          this.shell.messages = [
            ...this.shell.messages.slice(0, index),
            typedText,
            ...this.shell.messages.slice(index + 1),
          ];
          await new Promise((resolve) => setTimeout(resolve, 10));
          this.requestUpdate();
        }
      }
    }
  }

  private handleClick() {
    this._focusInput();
  }

  private _focusInput() {
    const input = this.theInput.value as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }
}
