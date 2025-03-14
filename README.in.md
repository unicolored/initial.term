# Initial Term

Arr, matey! Welcome to **Initial Term**—the Quake-style console fer webmasters ‘round the globe! Drop it into yer site with a single `<script>` tag, and wield commands to audit performance, check SEO, gather feedback, and more—all with a retro terminal vibe. It be standalone fer custom plunder, or ye can hook it to `initial.sh` fer a full ecosystem o’ plugins and glory.

This be the heart o’ the `@initial.sh/initial` npm package—yer MVP fer makin’ websites sing!

## Features

- **Quake-Style UI**: Slides down from the top, full width, half height—green text, dark seas, and a typin’ effect fer responses.
- **Core Commands**: `init`, `help`, `clear`, `exit`—yer basics to steer the ship.
- **Webmaster Tools**:
    - `lighthouse`: Mock audit fer performance and SEO (real one’s fer Chrome DevTools fer now).
    - `seo`: Mock check fer title and meta—points ye to Ahrefs fer the full loot.
    - `feedback`: Gather user tales, log ‘em local or send to `initial.sh` if ye be connected.
- **Typing Effect**: Responses type out at 30ms per character—fast but with flair!
- **Sounds**: Beeps fer open (400 Hz), close (300 Hz), and errors (200 Hz buzz).
- **Standalone or Connected**: Runs local with mocks, or ties to `initial.sh/api` fer plugins and convo.
- **Plugins**: Built-in `ping`, `time`, `feedback`—add yer own with `window.Initial.registerPlugin()`.

## Installation

Hoist it aboard with npm or a CDN:

### Via npm
```bash
npm install @initial.sh/initial
```

Then import and use:

```html
<script type="module">
  import '@initial.sh/initial';
</script>
<initial></initial>
<button onclick="document.querySelector('initial').open()">Launch Initial</button>
```

### Via CDN

```html
<script src="https://unpkg.com/@initial.sh/initial@1.0.0/dist/initial.js"></script>
<initial></initial>
<button onclick="document.querySelector('initial').open()">Launch Initial</button>
```

## Usage

Drop the `<initial>` tag into yer webpage.

Click a button to open it—watch it slide down from the top!

Type commands:
- `init`: Greetin’ from the crew.
- `help`: List o’ commands.
- `lighthouse`: Mock audit—types out scores.
- `seo`: Mock SEO check—types out tips.
- `feedback`: Type yer thoughts, end with “done”.
- `exit` or press Esc: Close the console.

### Optional: Connect to initial.sh

Add an api-url to tie it to the initial.sh ecosystem.

```html
<initial api-url="https://initial.sh/api"></initial>
```

- Fetches plugins from /plugins.
- Sends convo to /convo.
- Submits feedback to /feedback.

## Development

### Setup

Clone the repo from github.com/<your-username>/initial.term, head into the folder, and install the dependencies.

### Build

Build the project to get dist/initial.js—yer bundled console.

### Dev

Run the dev mode to watch and rebuild as ye tinker.

### Test Locally

Load the built file in a webpage, add the <initial> tag, and trigger it with a button to launch.

## Roadmap

- **v1 (MVP)**: Quake-style, webmaster commands, typing effect—ye be here!
- **v2**: Themes (chatbot, anyone?), real Lighthouse/SEO via API, more plugins.

## Contribute

Spotted a bug or got a plugin idea? Open an issue or hoist a pull request! Check [initial.sh](https://initial.sh) fer the full tale.

## License

MIT—sail free, matey!

## More Info

Visit [initial.sh](https://initial.sh) fer docs, plugins, and the grand vision. This be the term repo—see initial.sh.git fer the site!

### What’s Inside
- **Intro**: Quick pitch—Quake-style console fer webmasters, standalone or connected.
- **Features**: Lists all 12 MVP bits—UI, commands, typing, sounds, etc.
- **Install/Usage**: Two ways to grab it (npm, CDN), plus how to fire it up.
- **Dev Section**: How to clone, build, and test locally.
- **Roadmap**: Nods to v2 customization (chatbot theme fer them what want it).
- **Links**: Points to `initial.sh` and the sister repo.

