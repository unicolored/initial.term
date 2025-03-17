---
layout: page.11ty.cjs
title: <initial-sh> ⌲ Terminal
tags: terminal
name: Terminal
description: The Terminal mode
---

## Terminal mode

Another possibility is to display **`<initial-sh>`** into a custom container with a minimum of styling.
You will pass `static` as an attribute.
In this case, the console will be automatically opened.

<div class="my-custom-container" style="height: 337px; background: darkblue">
  <initial-sh id="console2" static></initial-sh>
</div>

```html
<div class="my-custom-container" style="height: 337px; background: darkblue">
  <initial-sh id="console2" static></initial-sh>
</div>
```
