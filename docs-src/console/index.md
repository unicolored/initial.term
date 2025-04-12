---
layout: page.11ty.cjs
title: initial-sh ⌲ Console
tags: console
name: Console
description: The Console mode
---

## Console mode

Drop the **`<initial-console>`** tag into your webpage with the script add the script to your page.
Invoke the method show() of the initial-console element when trigger an event, like a click on a button.
By default, you can also press the **`Help`** key on your keyboard (= **Insert** on macos).
To close the console: press Escape, or type **`exit`**.

<initial-console id="console1" sounds></initial-console>
<button onclick="document.getElementById('console1').show()">Open the console</button>

<script>
      const initialConsole = document.getElementById('console1');
      initialConsole.config = {
        showDrop: true,
      };
</script>

```html
<body>
  <initial-console id="console1" sounds="true"></initial-console>
  ...
  <button onclick="document.getElementById('console1').show()">
    Open the console
  </button>

  <script
    type="module"
    src="https://cdn.jsdelivr.net/npm/initial-term/initial.js"
  ></script>

  <script>
    const initialConsole = document.getElementById('console1');
    initialConsole.config = {
      showDrop: true,
    };
  </script>
</body>
```
