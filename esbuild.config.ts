const { esbuildDecorators } = require('esbuild-decorators');
module.exports = {
  sourcemap: true,
  outExtension: {
    '.js': '.js',
  },
  plugins: [esbuildDecorators()],
  keepNames: true,
};