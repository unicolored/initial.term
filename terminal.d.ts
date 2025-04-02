import { LitElement } from 'lit';
import { Shell } from 'initial-shell';
export declare class Terminal extends LitElement {
    static styles: import("lit").CSSResult;
    private banner;
    private sounds;
    protected readonly shell: Shell;
    private readonly theInput;
    private audio;
    private history;
    focusInput: () => void;
    messages: string[];
    typedMessages: string[];
    typingSpeed: number;
    constructor();
    firstUpdated(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private handleInput;
    private handleConsoleClick;
}
//# sourceMappingURL=terminal.d.ts.map