module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@agendei/components': './src/components',
            '@agendei/constants': './src/constants',
            '@agendei/screens': './src/screens',
          },
        },
      ],
    ],
  };
};
