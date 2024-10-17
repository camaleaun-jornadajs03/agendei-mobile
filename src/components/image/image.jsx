import React from 'react';
import { Image as RNImage } from 'react-native';

const Image = ({ source, width, height, style, ...props }) => {
  const isSvg = typeof source === 'function';

  width = width || style?.width;
  height = height || style?.height
  
  if (isSvg) {
    const SvgImage = source;
    if (width && height) {
      return (
        <SvgImage 
          width={width}
          height={height}
          {...props} 
        />
      );
    } else if(width && !height) {
      return (
        <SvgImage 
          width={width}
          {...props} 
        />
      );
    } else if(!width && height) {
      return (
        <SvgImage
          height={height}
          {...props} 
        />
      );
    } else {
      return (
        <SvgImage
          {...props} 
        />
      );
    }
  }

  if (width && height) {
    return (
      <RNImage 
        source={source}
        style={[{ width, height }, style]}
        {...props} 
      />
    );
  } else if(width && !height) {
    return (
      <RNImage 
        source={source}
        style={[{ width }, style]} 
        {...props} 
      />
    );
  } else if(!width && height) {
    return (
      <RNImage
        source={source}
        style={[{ height }, style]} 
        {...props} 
      />
    );
  } else {
    return (
      <RNImage
        source={source}
        style={style}
        {...props} 
      />
    );
  }
};

export default Image;
