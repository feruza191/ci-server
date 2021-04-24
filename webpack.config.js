const path = require('path');

const target = process.env.TARGET || 'client';
const root = process.cwd();
// eslint-disable-next-line import/no-dynamic-require
module.exports = require(path.resolve(root, `webpack.config.${target}.js`));
