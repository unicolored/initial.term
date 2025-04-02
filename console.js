var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stylesConsole } from './lib/styles/styles-console.js';
import { Audio } from './lib/audio';
import './terminal';
import { createRef, ref } from 'lit/directives/ref.js';
let Console = class Console extends LitElement {
    constructor() {
        super();
        this.config = {
            showDrop: false,
        };
        this.open = false;
        this.banner = `initial.sh - Type "exit" to close`;
        this.static = false;
        this.sounds = false;
        this.audio = null;
        this.shellElement = createRef();
        if (!this.static) {
            // Add keyboard listener in constructor
            document.addEventListener('keyup', this.handleKeydown.bind(this));
        }
    }
    disconnectedCallback() {
        // Clean up listener when element’s removed
        document.removeEventListener('keyup', this.handleKeydown.bind(this));
        super.disconnectedCallback();
    }
    firstUpdated() {
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
    render() {
        return html `<initial-terminal
        ${ref(this.shellElement)}
        banner=${this.banner}
        sounds=${this.sounds}
      ></initial-terminal>
      ${this.config.showDrop && !this.static
            ? html `
            <button @click=${() => (this.open ? this.close() : this.show())}>
              initial
              ${this.open
                ? html `<svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                    ></path>
                  </svg>`
                : html `<svg
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
    handleKeydown(e) {
        if (e.key === 'Help' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
            if (!this.open) {
                this.show();
            }
            else {
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
};
Console.styles = stylesConsole;
__decorate([
    property({ type: Object })
], Console.prototype, "config", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Console.prototype, "open", void 0);
__decorate([
    property({ type: String })
], Console.prototype, "banner", void 0);
__decorate([
    property({ type: Boolean })
], Console.prototype, "static", void 0);
__decorate([
    property({ type: Boolean })
], Console.prototype, "sounds", void 0);
Console = __decorate([
    customElement('initial-console')
], Console);
export { Console };
//# sourceMappingURL=console.js.map