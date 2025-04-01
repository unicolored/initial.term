import {ShellOptions} from './interface';
import {Subject} from 'rxjs';

export class Shell {
  events = new Subject<Event>();

  private coreCommands: Record<string, () => string | void> = {
    info: () => {
      return this.putMessage([`Hey hi!`, `Have a great day!`]);
    },
    // help: () =>
    //   this._addOutput(
    //     `Commands: init, help, clear, exit, cookie, lighthouse, seo, feedback${
    //       Object.keys(this.pluginCommands).length
    //         ? ', ' + Object.keys(this.pluginCommands).join(', ')
    //         : ''
    //     }`
    //   ),
    clear: () => {
      this.history = [];
      // this.conversation = [];
    },
    exit: () => {
      this.putMessage([`Bye!`]);

      return `>>event:callback:close`;
    },
    // cookie: () => _listCookies(),
    // lighthouse: () => _runLighthouse(),
    // seo: () => _checkSEO(),
  };
  // pluginCommands: Record<string, (terminal: InitialTerminal) => void> = {};

  history: string[] = [];
  messages: string[] = [];
  // private conversation: Message[] = [];

  constructor(private options: ShellOptions) {}

  init() {
    if (this.options.banner) {
      this.putMessage([this.options.banner]);
    }
  }

  async processInput(input: string): Promise<string | string[]> {
    input = input.trim();

    // this.history = [...this.history, isError ? `Error: ${input}` : input];

    const res = await this._processCommand(input);

    if (res) {
      if (res.startsWith('>>event:')) {
        const eventName = res.replace('>>event:', '');
        const event = new Event(eventName);
        this.events.next(event);
      } else {
        this.putMessage([res]);
      }
    }

    return res ?? [];
  }

  putMessage(input: string[]) {
    this.history = [...this.history, ...this.messages];
    this.messages = [...input];
  }

  /**
   * @deprecated
   * @param input
   * @param isError
   */
  putHistory(input: string, isError = false) {
    this.history = [...this.history, isError ? `Error: ${input}` : input];
  }

  private async _processCommand(command: string) {
    const cmd = command.trim().toLowerCase();
    if (this.coreCommands[cmd]) {
      return this.coreCommands[cmd]();
    } /*else if (this.pluginCommands[cmd]) {
      // this.pluginCommands[cmd]();
      // TODO
      console.log('TODO')
    }*/ /*else {
      this.conversation.push({role: 'user', content: command});
      await this._emitConversation();
    }*/
    return `ish :: Command not found: ${command}`;
  }

  clear() {
    this.history = [];
    this.events.unsubscribe();
  }

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
