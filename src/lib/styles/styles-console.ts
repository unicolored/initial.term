import {css} from 'lit';

export const stylesConsole = css`
  :host {
    --initial-text-color: yellow;
    --initial-background-color: rgba(0, 0, 0, 0.9);
    --initial-font-family: 'Courier New', monospace;
    --initial-font-size: 20px;
  }

  :host {
    color: var(--initial-text-color, black);
    background: var(--initial-background-color, white);
    font-family: var(--initial-font-family);
    font-size: var(--initial-font-size, 20px);
    border-bottom: 1px solid transparent;
    box-shadow: 0 4px 48px transparent;
    position: fixed;
    top: -50%;
    left: 0;
    width: 100%;
    height: 50vh;
    transition: top 0.01s ease-in-out;
    z-index: 10000;
    display: none;
    box-sizing: border-box;
  }
  :host button {
    color: var(--initial-text-color, black);
    background: var(--initial-background-color, white);
    font-family: var(--initial-font-family);
    border: 1px solid #888;
    border-top: none;
    position: absolute;
    right: 10px;
    bottom: calc(-24px);
    height: 24px;
    border-radius: 0 0 4px 4px;
    padding: 0 8px;
    z-index: 1;
    cursor: pointer;
  }
  :host([open]) {
    top: 0;
    border-bottom: 1px solid #888;
    box-shadow: 0 4px 48px #555;
    display:block;
  }
  :host([static]) {
    border-bottom: 1px inner solid transparent;
    box-shadow: none;
    position: relative;
    top: 0;
    z-index: 1;
    height: 100%;
    display: block;
    overflow-y: auto;
    display:block;
  }
  button {
    font-style: normal;
  }
  button.opened {
    font-style: italic;
  }
`;
