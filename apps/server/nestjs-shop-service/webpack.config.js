const { join } = require('path');
const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');

console.log('Using custom webpack config for nestjs-shop-service');
console.log(
  '__dirname:',
  join(__dirname, '../../../dist/apps/server/nestjs-shop-service')
);

module.exports = {
  output: {
    path: join(__dirname, '../../../dist/apps/server/nestjs-shop-service'),
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: 'defaults',
            presets: [['@babel/preset-env']],
            plugins: [
              '@babel/plugin-proposal-decorators',
              { version: '2023-11' },
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: [],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
    }),
  ],
};
