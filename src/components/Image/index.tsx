import React from 'react';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';

const imageUri =
  'https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4';

interface ImageProps {
  uri?: string;
}

const ImageCached: React.FC<ImageProps> = ({ uri = imageUri }) => {
  return (
    <FastImage
      style={styles.image}
      source={{
        uri: uri,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default ImageCached;
