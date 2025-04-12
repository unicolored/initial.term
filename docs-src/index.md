---
layout: page.11ty.cjs
title: Initial::shell
---

# Initial Shell

  <a href="https://www.npmjs.com/initial-sh">
    <img src="https://img.shields.io/npm/v/initial-sh
" />
  </a>

Welcome to Initial Shell—the Quake-styl`ish` console for webmasters worldwide! Embed it in your site with a single `<script>` tag and use commands to audit performance, check SEO, gather feedback, and more. It works standalone for custom setups or connects to `initial.sh` for a broader ecosystem of plugins.

## Features

- Console and static mode UI
- Core Commands: `init`, `help`, `clear`, `exit`—essential controls.
- Webmaster Tools:
  - `lighthouse`: Mock performance and SEO audit with typed-out scores.
  - `seo`: Mock SEO check with typed-out results.
  - `feedback`: Collect user input, ending with “done.”
- Typing Effect: Responses appear character-by-character at 30ms intervals.
- Sounds: Audio cues for opening (400 Hz), closing (300 Hz), and errors (200 Hz).
- Standalone or Connected: Runs locally with mocks or links to `initial.sh/marketplace` for plugins and data.
- Plugins: Includes `ping`, `time`, `feedback`—extendable via a global register function.

## Basic commands

Type commands at the `>>` prompt:

- `init`: Welcome message.
- `help`: List of available commands.
- `clear`: Clear the console output.
- `exit` or press Esc: Close the console.
- `cookie`: List names of cookies set by the current website.
- `lighthouse`: Mock audit with typed-out scores.
- `seo`: Mock SEO check with typed-out tips.
- `feedback`: Type your thoughts, end with “done.”
- Unknown commands show: `ish: command not found: [input]`.

## More Info

Check out [initial.sh](https://initial.sh) and [Github repo](https://github.com/unicolored/initial.term).
