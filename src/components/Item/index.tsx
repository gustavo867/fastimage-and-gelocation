import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ImageCached from '../Image';

const { width, height } = Dimensions.get('window');

interface Item {
  id: number;
  title: string;
  description: string;
  avatar_url: string;
}

interface Props {
  item: Item;
}

const Item: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <ImageCached uri={item.avatar_url} />
      <View style={styles.column}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 244, 244, 0.9)',
    padding: 10,
    marginBottom: 15,
    flexDirection: 'row',
    width: width * 0.85,
    height: height * 0.2,
    borderRadius: 8,
  },
  column: {
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    width: width * 0.5,
  },
  description: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
    width: width * 0.55,
  },
});

export default Item;
