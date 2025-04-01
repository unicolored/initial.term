export interface ConsoleConfig {
  showDrop: boolean;
  // You can add more configuration options here
}

export interface Message {
  role: 'user' | 'developer';
  content: string;
}

// interface Plugin {
//   name: string;
//   execute: (terminal: InitialTerminal) => void;
// }

export type ShellOptions = Partial<ShellOptionsList>;

export interface ShellOptionsList {
  banner: string;
  // cols: number;
  // rows: number;
  // cursorBlink: boolean;
  // cursorInactiveStyle: 'outline';
  // disableStdin: boolean;
  // fontFamily: string;
  // fontSize: number;
  // fontWeight: string;
}
