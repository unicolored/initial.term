# Initial Shell

[![NPM](https://img.shields.io/npm/v/initial-sh)](https://www.npmjs.com/initial-sh)
[![Publish](https://github.com/unicolored/initial.term/actions/workflows/publish.yml/badge.svg)](https://github.com/unicolored/initial.term/actions/workflows/publish.yml)
[![Docs](https://github.com/unicolored/initial.term/actions/workflows/docs.yml/badge.svg)](https://github.com/unicolored/initial.term/actions/workflows/docs.yml)

Welcome to Initial Shell—the Quake-styl`ish` console for webmasters worldwide! Embed it in your site with a single `<script>` tag and use commands to audit performance, check SEO, gather feedback, and more. It works standalone for custom setups or connects to `initial.sh` for a broader ecosystem of plugins.

This repository contains the source for the `@initial.sh/initial` npm package—your MVP console component.

## Features

- Quake-style UI: Drops from the top, full width, half height, with green text and a typing effect for responses.
- Core Commands: `init`, `help`, `clear`, `exit`—essential controls.
- Webmaster Tools:
  - `lighthouse`: Mock performance and SEO audit with typed-out scores.
  - `seo`: Mock SEO check with typed-out results.
  - `feedback`: Collect user input, ending with “done.”
- Typing Effect: Responses appear character-by-character at 30ms intervals.
- Sounds: Audio cues for opening (400 Hz), closing (300 Hz), and errors (200 Hz).
- Standalone or Connected: Runs locally with mocks or links to `initial.sh/api` for plugins and data.
- Plugins: Includes `ping`, `time`, `feedback`—extendable via a global register function.

## Usage

Drop the `<initial-sh>` tag into your webpage.

Click a button to show it—watch it slide down from the top!

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

### Optional: Connect to initial.sh

Add an `api-url` attribute to connect to the `initial.sh` ecosystem.

## Development

### Setup

Clone the repository from github.com/<your-username>/initial.term, navigate into the folder, and install dependencies.

### Build

Build the project to generate `dist/initial.js`—your bundled console.

### Dev

Run the development mode to watch and rebuild as you modify the code.

### Test Locally

Load the built file in a webpage, add the `<initial-sh>` tag, and trigger it with a button to launch.

## Roadmap

- **v1 (MVP)**: Quake-style console, webmaster commands, typing effect—current state.
- **v2**: Themes (e.g., chatbot), real Lighthouse/SEO integration via API, additional plugins.

## Contribute

Found a bug or have a plugin idea? Open an issue or submit a pull request! Visit [initial.sh](https://initial.sh) for more details.

## License

MIT—free to use and modify.

## More Info

Check out [initial.sh](https://initial.sh) for documentation, plugins, and the project vision. This is the term repository—see `initial.sh.git` for the website source.
