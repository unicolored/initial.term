export interface Message {
  role: 'user' | 'developer';
  content: string;
}

// interface Plugin {
//   name: string;
//   execute: (terminal: InitialTerminal) => void;
// }
