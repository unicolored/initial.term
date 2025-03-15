---
layout: page.11ty.cjs
title: <initial-sh> ⌲ Home
---

## Usage

Drop the `<initial-sh>` tag into your webpage with the script add the script to your page. Invoke the method show() of the initial-sh element.
To close the console: press Escape, or type `exit`.

```html
<body>
...
<button onclick="document.querySelector('initial-sh').show()">Open the console</button>

<initial-sh sounds="true" mode="quake"></initial-sh>

<script type="module" src="https://cdn.jsdelivr.net/npm/initial-sh/initial-sh.bundled.js"></script>
</body>
```

<initial-sh></initial-sh>
