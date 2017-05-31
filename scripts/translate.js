// scripts/translate.js

process.env.NODE_ENV = 'development';

const fs = require('fs');
const path = require('path');
const globSync = require('glob').sync;
const mkdirpSync = require('mkdirp').sync;
const transformFileSync = require('babel-core').transformFileSync;

const paths = {
  appSrc: 'src',
  appBuildMessages: 'build/messages'
}

globSync(path.join(paths.appSrc, '/**/*.jsx'))
    .map((filename) => {
        const result = transformFileSync(filename, {
            plugins: ['react-intl']
        });
    });
