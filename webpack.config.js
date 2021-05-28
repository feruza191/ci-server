const path = require('path');

const target = process.env.TARGET || 'client';
const root = process.cwd();

const webpackPath = path.resolve(root, `webpack.config.${target}.js`);
// eslint-disable-next-line import/no-dynamic-require
module.exports = require(webpackPath);
