---
layout: page.11ty.cjs
title: <initial-sh> ⌲ Console
tags: console
name: Console
description: The Console mode
---

## Console mode

Drop the **`<initial-sh>`** tag into your webpage with the script add the script to your page.
Invoke the method show() of the initial-sh element when trigger an event, like a click on a button.
By default, you can also press the **`Help`** key on your keyboard (= **Insert** on macos).
To close the console: press Escape, or type **`exit`**.

<initial-sh id="console1" sounds></initial-sh>
<button onclick="document.getElementById('console1').show()">Open the console</button>

```html
<initial-sh id="console1" sounds></initial-sh>

<body>
  ...
  <button onclick="document.getElementById('console1').show()">
    Open the console
  </button>

  <initial-sh sounds></initial-sh>

  <script
    type="module"
    src="https://cdn.jsdelivr.net/npm/initial-sh/initial-sh.bundled.js"
  ></script>
</body>
```
