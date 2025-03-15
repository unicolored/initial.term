import {css} from 'lit';

export const styles = css`
  :host {
    color: var(--initial-sh-text-color, black);
    background: var(--initial-sh-background-color, white);
    font-family: var(--initial-sh-font-family, Roboto);
    position: fixed;
    top: -50%;
    left: 0;
    width: 100%;
    height: 50vh;
    background: rgba(0, 0, 0, 0.9);
    transition: top 0.3s ease-in-out;
    z-index: 1000;
    display: block;
  }
  :host([open]) {
    top: 0;
  }
  .console-content {
    height: 100%;
    padding: 15px;
    font-family: 'Courier New', monospace;
    color: #00ff00;
    background: #1a1a1a;
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    overflow-y: auto;
  }
  .banner {
    color: #ffff00;
    margin-bottom: 10px;
  }
  .output {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-bottom: 10px;
    overflow-y: auto;
    align-items: baseline;
    justify-content: end;
  }
  .input-line {
    display: flex;
    align-items: center;
  }
  .prompt {
    margin-right: 5px;
  }
  input {
    background: none;
    border: none;
    color: #00ff00;
    font-family: inherit;
    width: 100%;
    outline: none;
  }
  input::placeholder {
    color: #008000;
  }
  .error {
    color: #ff4040;
  }
`;
