import {css} from 'lit';

export const stylesConsole = css`
  :host {
    --initial-text-color: yellow; /* Changes text color to blue */
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
  }
  :host([open]) {
    top: 0;
  }
  :host([static]) {
    position: relative;
    top: 0;
    z-index: 1;
    height: 100%;
    display: block;
    overflow-y: auto;
  }
`;
