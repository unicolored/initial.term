export class Shell {
  // private coreCommands: Record<string, () => void> = {
  //   init: () =>
  //     this._addOutput(`Welcome to initial! Type "help" fer commands.`),
  //   help: () =>
  //     this._addOutput(
  //       `Commands: init, help, clear, exit, cookie, lighthouse, seo, feedback${
  //         Object.keys(this.pluginCommands).length
  //           ? ', ' + Object.keys(this.pluginCommands).join(', ')
  //           : ''
  //       }`
  //     ),
  //   clear: () => {
  //     this.messages = [];
  //     // this.conversation = [];
  //   },
  //   // exit: () => this.close(),
  //   cookie: () => _listCookies(),
  //   lighthouse: () => _runLighthouse(),
  //   seo: () => _checkSEO(),
  // };
  // pluginCommands: Record<string, (terminal: InitialTerminal) => void> = {};

  messages: string[] = [];
  // private conversation: Message[] = [];

  constructor(options: unknown) {
    console.log(options);
  }

  init(element: HTMLElement) {
    console.log(element);
  }

  writeln(input: string) {
    console.log(input);
  }

  async _addOutput(input: string, isError = false) {
    input = input.trim();

    this.messages = [...this.messages, isError ? `Error: ${input}` : input];

    // await this._processCommand(text);
    // return this.messages;
    return `ish :: Command not found: ${input}`;
  }

  // private async _processCommand(command: string) {
  //   const cmd = command.toLowerCase();
  //   if (this.coreCommands[cmd]) {
  //     this.coreCommands[cmd]();
  //   } else if (this.pluginCommands[cmd]) {
  //     // this.pluginCommands[cmd]();
  //     // TODO
  //     console.log('TODO')
  //   } else {
  //     this.conversation.push({role: 'user', content: command});
  //     await this._emitConversation();
  //   }
  // }

  // private async _emitConversation() {
  //   // const convo = {model: 'initial-shell', messages: [...this.conversation]};
  //   // let response: string;
  //
  //   // if (this.apiUrl) {
  //   //   try {
  //   //     const res = await fetch(`${this.apiUrl}/convo`, {
  //   //       method: 'POST',
  //   //       headers: {'Content-Type': 'application/json'},
  //   //       body: JSON.stringify(convo),
  //   //     });
  //   //     response = (await res.json()).response || 'Arr, server be silent!';
  //   //   } catch (e) {
  //   //     response = 'Error: Couldn’t reach server!';
  //   //   }
  //   // } else {
  //   //   response = this._fakeResponse(
  //   //     convo.messages[convo.messages.length - 1].content
  //   //   );
  //   // }
  //
  //   this.conversation.push({role: 'developer', content: 'fake response'});
  //   this._addOutput('fake response');
  // }
}
