export interface ConsoleConfig {
  apiUrl: string;
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
