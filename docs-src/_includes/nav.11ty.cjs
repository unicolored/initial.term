const relative = require('./relative-path.cjs');

module.exports = function ({page}) {
  return `
<nav>
  <a href="/">Home</a>
  <a href="/console/">Console</a>
  <a href="/integrated/">Integrated</a>
</nav>
`;
};
