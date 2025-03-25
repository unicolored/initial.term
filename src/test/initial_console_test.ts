import {InitialConsole} from '../initial-console';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('initial-sh', () => {
  test('is defined', () => {
    const el = document.createElement('initial-sh');
    assert.instanceOf(el, InitialConsole);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<initial-sh></initial-sh>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<initial-sh></initial-sh>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<initial-sh></initial-sh>`)) as InitialConsole;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<initial-sh></initial-sh>`)) as InitialConsole;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
