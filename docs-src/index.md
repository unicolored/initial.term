---
layout: page.11ty.cjs
title: <initial-sh> ⌲ Home
---

# &lt;initial-sh>

`<initial-sh>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<initial-sh>` is just an HTML element. You can it anywhere you can use HTML!

```html
<initial-sh></initial-sh>
```

  </div>
  <div>

<initial-sh></initial-sh>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<initial-sh>` can be configured with attributed in plain HTML.

```html
<initial-sh name="HTML"></initial-sh>
```

  </div>
  <div>

<initial-sh name="HTML"></initial-sh>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<initial-sh>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;initial-sh&gt;</h2>
    <initial-sh .name=${name}></initial-sh>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;initial-sh&gt;</h2>
<initial-sh name="lit-html"></initial-sh>

  </div>
</section>
