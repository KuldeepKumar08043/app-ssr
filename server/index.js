// create an entry point  in server/index.js file

require('ignore-styles');
require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
});

require('./server');