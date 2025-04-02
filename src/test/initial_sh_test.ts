import {Terminal} from '../terminal';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('initial-sh', () => {
  test('is defined', () => {
    const el = document.createElement('initial-sh');
    assert.instanceOf(el, Terminal);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<initial-sh></initial-sh>`);
    assert.shadowDom.equal(
      el,
      `<initial-terminal id="terminal" static></initial-terminal>`
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(
      html`<initial-sh></initial-sh>`
    )) as Terminal;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '0px');
  });
});
