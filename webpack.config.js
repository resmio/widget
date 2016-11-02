// this lets us require files with JSX/ES6 in them
require('babel-core/register')

// require React and our Home Template
var fs = require('fs')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var HomePage = require('./src/home-page').default

// our hjs-webpack
var getConfig = require('hjs-webpack')

var config = getConfig({
  in: 'src/index.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (data) {
    // use React's `renderToString` method to return an HTML string from our
    // home page (dynamic values can be passed into `createElement` too)
    var homePageHtmlString = ReactDOMServer
                               .renderToString(React.createElement(HomePage))

    return {
      'index.html': data
                     .defaultTemplate({
                       html: `<div id='root'>${homePageHtmlString}</div>`
                     })
    }
  }
})

// Having hmre present in the .babelrc will break with the `babel-core/register` above
// so wait until that is done and then add it here via the loader query
const babelrc = JSON.parse(fs.readFileSync('./.babelrc'))
babelrc.env = {development: {presets: ['react-hmre']}}
config.module.loaders[0].query = babelrc

module.exports = config
