import {css} from 'lit';

export const stylesShell = css`
  :host {
    --initial-text-color: white; /* Changes text color to blue */
    --initial-background-color: rgba(
      0,
      0,
      0,
      0.9
    ); /* Changes background to gray */
    --initial-font-family: 'Courier New', monospace; /* Changes font to Arial */
  }

  :host {
    color: var(--initial-text-color, black);
    background: var(--initial-background-color, white);
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 50vh;
    transition: top 0.3s ease-in-out;
    z-index: 1000;
    display: block;
    font-size: 20px;
    position: relative;
    top: 0;
    z-index: 1;
    height: 100%;
    display: block;
    overflow-y: auto;
  }
  p {
    margin: 0 0 4px 0;
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
    color: var(--initial-text-color, black);
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
    font-size: 20px;
  }
  .initial-console-input-line {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .initial-console-input-prompt {
    margin-right: 5px;
  }
  .initial-console-input-row input.initial-console-input-input {
    background: transparent;
    border: none;
    color: #00ff00;
    color: white;
    font-family: inherit;
    font-size: 20px;
    flex-grow: 1;
    padding: 4px;
    outline: none;
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
