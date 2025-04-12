import {css} from 'lit';

export const stylesTerminal = css`
  :host {
    --initial-text-color: white; /* Changes text color to white */
    --initial-background-color: rgba(
      0,
      0,
      0,
      0.9
    ); /* Changes background to gray */
    --initial-font-family: 'Courier New', monospace; /* Changes font to Arial */
    --initial-font-size: 18px;
  }

  :host {
    color: var(--initial-text-color, white);
    background: var(--initial-background-color, black);
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 50vh;
    transition: top 0.3s ease-in-out;
    z-index: 1000;
    display: block;
    font-size: var(--initial-font-size);
    position: relative;
    top: 0;
    z-index: 1;
    height: 100%;
    display: block;
    overflow-y: auto;
  }
  .initial-console-window {
    display: flex;
    overflow-y: auto;
    align-items: stretch;
    height: 100%;
  }
  .initial-console-wrapper {
    margin: 15px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    font-family: var(--initial-font-family, 'Courier New, monospace');
    color: var(--initial-text-color, white);
  }
  .banner {
    color: #ffffff;
    margin-bottom: 10px;
  }
  .initial-console-shell {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-bottom: 10px;
    overflow-y: auto;
    align-items: baseline;
    justify-content: end;
    font-size: var(--initial-font-size);
  }
  .initial-console-shell p {
    font-size: var(--initial-font-size);
    text-wrap: no-wrap;
    white-space: no-wrap;
    margin: 0 0 4px 0;
    display: inline-block;
    word-break: break-all;
  }
  .initial-console-shell p,
  .initial-console-shell p a {
    color: var(--initial-text-color, white);
  }
  .initial-console-shell p span {
    margin: 0;
    padding: 0;
  }
  .initial-console-input-line {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .initial-console-input-row {
    display: flex;
    gap: 5px;
    text-wrap: no-wrap;
  }
  .initial-console-input-row .initial-console-input-prompt {
    text-wrap: no-wrap;
    white-space: no-wrap;
    display: flex;
    align-items: center;
  }
  .initial-console-input-row input.initial-console-input-input {
    background: transparent;
    border: none;
    color: #fff;
    font-family: inherit;
    font-size: var(--initial-font-size);
    flex-grow: 1;
    padding: 4px;
    outline: none;
    text-wrap: no-wrap;
    white-space: no-wrap;
  }
  .initial-console-input-row input.initial-console-input-input::placeholder {
    color: #008000;
    color: blue;
  }
  .error {
    color: #ff4040;
    color: red;
  }
`;
