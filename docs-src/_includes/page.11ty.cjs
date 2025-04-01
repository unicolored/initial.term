const header = require('./header.11ty.cjs');
const footer = require('./footer.11ty.cjs');
const nav = require('./nav.11ty.cjs');
const relative = require('./relative-path.cjs');

module.exports = function (data) {
  const {title, page, content} = data;
  return `
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <base href="/">
    <link rel="stylesheet" href="/docs.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Roboto+Mono">
    <link href="/prism-okaidia.css" rel="stylesheet" />
    <script src="/modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    <script src="/modules/lit/polyfill-support.js"></script>
    <script type="module" src="/initial-sh.docs.js"></script>
  </head>
  <body>
    ${header()}
    ${nav(data)}
    <div id="main-wrapper">
      <main>
        ${content}
      </main>
    </div>
    ${footer()}
  </body>
</html>`;
};
