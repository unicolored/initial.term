import { LitElement } from 'lit';
import './terminal';
import { ConsoleConfig } from './lib/interface';
export declare class Console extends LitElement {
    static styles: import("lit").CSSResult;
    config: Partial<ConsoleConfig>;
    private open;
    private banner;
    private static;
    private sounds;
    private audio;
    private shellElement;
    constructor();
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private handleKeydown;
    show(): void;
    close(): void;
}
//# sourceMappingURL=console.d.ts.map