const { getDefaultConfig } = require('expo/metro-config');

module.exports = () => {
  const config = getDefaultConfig(__dirname);
  const { resolver: { sourceExts, assetExts }, transformer } = config;

  return {
    ...config,
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer')
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg']
    }
  };
};
