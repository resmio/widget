// scripts/translate.js

process.env.NODE_ENV = 'development';

const fs = require('fs');
const path = require('path');
const globSync = require('glob').sync;
const mkdirpSync = require('mkdirp').sync;
const transformFileSync = require('babel-core').transformFileSync;

// const paths = require('../config/paths');
const paths = {
  appSrc: '../widget/src',
  appBuildMessages: 'build/messages'
}

//////////////////////////////
// Add to `/config/paths.js`:
//  appBuildMessages: .. where to output the messages
//////////////////////////////

globSync(path.join(paths.appSrc, '/**/*.jsx'))
    .map((filename) => {
        const result = transformFileSync(filename, {
            plugins: ['react-intl']
        });
        // const messages = result.metadata["react-intl"]["messages"];
        // if (messages.length > 0) {
        //     const relFn = path.relative(paths.appSrc, filename);
        //     const outFilename = path.join(
        //         paths.appBuildMessages,
        //         path.dirname(relFn), `${path.basename(relFn, ".js")}.json`);
        //     mkdirpSync(path.dirname(outFilename));
        //     const outFd = fs.openSync(outFilename, 'w');
        //     fs.write(outFd, JSON.stringify(messages));
        // }
    });
