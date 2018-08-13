const path = require('path');
const fs = require('fs');

const rootDirectory = fs.realpathSync(process.cwd());
const resolve = p => path.resolve(rootDirectory, p);

module.exports = {
  root: rootDirectory,
  src: resolve(rootDirectory, 'src'),
  dist: resolve(rootDirectory, 'dist')
};
