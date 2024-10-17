import { Image as RNImage } from 'react-native';

const Image = ({ source, width, height, style, ...props }) => {
  const isSvg = typeof source === 'function';

  const resolvedWidth = width || style?.width;
  const resolvedHeight = height || style?.height;

  const imageStyle = [{ width: resolvedWidth, height: resolvedHeight }, style];

  if (isSvg) {
    const SvgImage = source;
    const svgProps = {
      ...(resolvedWidth && { width: resolvedWidth }),
      ...(resolvedHeight && { height: resolvedHeight }),
      ...props
    };
    return <SvgImage {...svgProps} />;
  }

  return (
    <RNImage
      source={source}
      style={imageStyle}
      {...props}
    />
  );
};

export default Image;
