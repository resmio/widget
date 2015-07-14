# widget
resmio booking widget for the 22nd century.

## The component philosophy ##
Traditionally we have separated our assets by technology instead of by function, but recently this trend is shifting to a more modular approach. With React we already have the HTML of a component defined inside its Javascript code using JSX templates. Webpack also can require CSS files from a Javascript file and scoped to just that file (so no need for long class names to avoid collisions). This allows us to separate our code into small self contained modules, that can be easily maintained.

[Here](http://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/) is a good explanation about how modules work.

## React ##
React strength lies in encapsulating UI elements into independent modules, that can be rendered both in the browser or in the server, this allows us to keep all the pieces of code related to a component together. [Here](http://www.jackcallister.com/2015/01/05/the-react-quick-start-guide.html) is an amazing 5 minutes guide to React, that gets you up to speed.

## Flux ##
Flux is an architectural pattern for user interfaces, that works really well with React. [Here](http://www.jackcallister.com/2015/02/26/the-flux-quick-start-guide.html) is another amazing guide also written by Jack Callister, that explains it clearly.

## How to run ##
First of all you need to run `npm install` from the root direcory so npm will install all of the dependencies under the `node_modules` folder. You need to do that everytime resmio widget includes a new package, as a rule:
```
"Have you run `npm install`?" is the new "have you tried to turn it off and on again?"
```

### Available tasks ###
Webpack makes a distinction between development and production environments, both of the tasks bundle the javascript and puts the assets into the `build` folder.

- `npm start` targets development and gives you a server running on localhost:8090 that listens for changes to the code and updates automatically. You can check for compiling error messages in the browser console or in the terminal from where you ran the npm command.
- `npm run build` targets production it's the same as npm start but uses an optimized react build, and also uglifies the javascript after bundling it.
- `npm run lint` just runs the javascript linter to detect errors in the code.

## cssnext ##
Our pipeline also detects changes in our css and runs them through the [cssnext](http://cssnext.io/) plugin, this allows us to use future css syntax today, that gets transpiled to something that works in actual browsers, as the browsers evolve we can remove postprocessing rules from the plugin and use the native css in production.

Also rules are relative to a module, and should be written inside the component folder and imported from the react component, we have the option to bundle all the css in one big file instead of having it inlined, if we see performance improvements in doing it.

## Eslint ##
To run the linting for the JS run `npm run lint --silent` the silent modifier hides the ELIFECYCLE error thrown out when the linter fails, but still shows the linting errors, you can also create an alias like `alias run ='npm run --silent'` and then simply do `run <script>`
