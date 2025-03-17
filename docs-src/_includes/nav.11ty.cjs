const relative = require('./relative-path.cjs');

module.exports = function ({page}) {
  return `
<nav>
  <a href="${relative(page.url, '/')}">Home</a>
  <a href="${relative(page.url, '/console/')}">Console</a>
  <a href="${relative(page.url, '/integrated/')}">Integrated</a>
</nav>
`;
};
