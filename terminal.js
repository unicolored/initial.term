var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { stylesShell } from './lib/styles/styles-shell';
import { Shell } from 'initial-shell';
import { Audio } from './lib/audio';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
let Terminal = class Terminal extends LitElement {
    constructor() {
        super();
        this.banner = 'initial.sh - Type "info"';
        this.sounds = false;
        this.theInput = createRef();
        this.audio = null;
        this.history = [];
        // private messages: string[] = [];
        this.focusInput = () => {
            this.theInput?.value?.focus();
        };
        this.messages = []; // Tracks the currently typed text
        this.typedMessages = []; // Tracks the currently typed text
        this.typingSpeed = 100; // Speed in milliseconds per character
        this.shell = new Shell({});
        this.shell.events.subscribe((event) => {
            this.dispatchEvent(event);
        });
    }
    firstUpdated() {
        console.log('firstUpdated', this.banner);
        this.shell.init({
            banner: this.banner,
        });
        this.history = [...this.shell.history];
        this.messages = [...this.shell.messages];
        if (this.sounds) {
            this.audio = new Audio();
        }
        const paragraphs = this.shadowRoot?.querySelectorAll('p.typed');
        if (paragraphs) {
            paragraphs.forEach((p) => {
                p;
            });
        }
    }
    disconnectedCallback() {
        this.shell.events.unsubscribe();
        this.shell.clear();
        super.disconnectedCallback();
    }
    render() {
        this.history = [...this.shell.history];
        this.messages = [...this.shell.messages];
        return html `
      <div class="initial-console-window" @click=${this.handleConsoleClick}>
        <div class="initial-console-wrapper">
          <div class="initial-console-shell">
            ${this.history.map((msg) => {
            return html `<p class=${msg.startsWith('Error') ? 'error' : ''}>
                ${unsafeHTML(msg)}
              </p>`;
        })}
            ${this.messages.map((msg) => {
            return html `<p class="typed">${unsafeHTML(msg)}</p>`;
        })}
          </div>
          <div class="initial-console-input-row">
            <span class="initial-console-input-prompt">
              ${html `${unsafeHTML(this.shell.promptSign)}`}
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
    async handleInput(e) {
        const input = e.target.value.trim();
        if (e.key === 'Enter') {
            e.target.value = '';
            if (!input) {
                this.audio?.playSound(100, 'sine', 0.01);
                return;
            }
            this.shell.putMessage([`${this.shell.promptSign} ${input}`]);
            await this.shell.processInput(input);
            this.requestUpdate();
        }
    }
    handleConsoleClick() {
        const input = this.theInput.value;
        if (input) {
            input.focus();
        }
    }
};
Terminal.styles = stylesShell;
__decorate([
    property({ type: String })
], Terminal.prototype, "banner", void 0);
__decorate([
    property({ type: Boolean })
], Terminal.prototype, "sounds", void 0);
__decorate([
    property({ type: Array })
], Terminal.prototype, "messages", void 0);
__decorate([
    property({ type: Array })
], Terminal.prototype, "typedMessages", void 0);
__decorate([
    property({ type: Number })
], Terminal.prototype, "typingSpeed", void 0);
Terminal = __decorate([
    customElement('initial-terminal')
], Terminal);
export { Terminal };
//# sourceMappingURL=terminal.js.map