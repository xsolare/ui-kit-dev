const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        sassLoaderOptions: {
          implementation: require('sass'),
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    {
      name: 'storybook-addon-swc',
      options: {},
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '#': path.resolve(__dirname, '../src/'),
    };
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    return config;
  },
};
