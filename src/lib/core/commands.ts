export function _fakeResponse(input: string): string {
  return input === 'Are semicolons optional in JavaScript?'
    ? 'Aye, mostly optional thanks to ASI, but watch fer bugs!'
    : `ish: command not found: ${input}`;
}

export function _runLighthouse(): string | string[] {
  // this._addOutput('Runnin’ Lighthouse audit... (mock fer now)');
  // await new Promise((resolve) => setTimeout(resolve, 500));
  // this._addOutput('Performance: 85/100 - Speed be decent, matey!');
  // this._addOutput('SEO: 90/100 - Search engines’ll find ye fine.');
  // this._addOutput('Run in Chrome DevTools fer the real deal!');
  return [];
}

export function _checkSEO(): void {
  // this._addOutput('Checkin’ SEO... (mock fer now)');
  // await new Promise((resolve) => setTimeout(resolve, 500));
  // this._addOutput('Title: Good - Ye got one!');
  // this._addOutput('Meta Desc: Fair - Could be snappier.');
  // this._addOutput('Visit ahrefs.com/webmaster-tools fer a proper look!');
}

export function _listCookies() {
  // const cookies = document.cookie
  //   .split(';')
  //   .map((cookie) => cookie.trim().split('=')[0]);
  // if (cookies.length === 0 || (cookies.length === 1 && cookies[0] === '')) {
  //   this._addOutput('No cookies found on this site.');
  // } else {
  //   this._addOutput('Cookies found:');
  //   cookies.forEach((name) => {
  //     if (name) this._addOutput(`- ${name}`);
  //   });
  // }
}

// private _startFeedback() {
//   this._addOutput('Enter yer feedback (type "done" to submit):');
//   this.conversation = [];
//   this.pluginCommands['temp-feedback'] = () => {
//     const lastInput =
//       this.conversation[this.conversation.length - 1]?.content;
//     if (lastInput === 'done') {
//       this._submitFeedback();
//       delete this.pluginCommands['temp-feedback'];
//     }
//   };
// }

// private async _submitFeedback() {
//   const feedback = this.conversation.map((m) => m.content).join('\n');
//   if (this.apiUrl) {
//     try {
//       await fetch(`${this.apiUrl}/feedback`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({feedback}),
//       });
//       this._addOutput('Feedback sent! Thanks, matey!');
//     } catch (e) {
//       this._addOutput('Error: Feedback lost!', true);
//     }
//   } else {
//     this._addOutput('Feedback logged locally: ' + feedback);
//   }
// }
