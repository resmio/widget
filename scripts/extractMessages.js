var babel = require('babel-core');

const result = babel.transform('src', {
  plugins: ['react-intl']
}) // => { code, map, ast, metadata['react-intl'].messages };

console.log(result)
