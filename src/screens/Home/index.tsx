import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Item from '../../components/Item';
import data from '../../utils/data';

const Home: React.FC = () => {
  const [error, setError] = useState('');
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  async function getPosition() {
    Geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos.coords);
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        setError('');
      },
      (e) => setError(e.message),
      {
        enableHighAccuracy: false,
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fast Image Test</Text>
      {error !== '' && <Text style={styles.positionTitle}>{error}</Text>}
      <Text style={styles.positionTitle}>Your coords</Text>
      <Text style={styles.position}>
        Latitude: {position.latitude} {'  '} Longitude: {position.longitude}
      </Text>
      <TouchableOpacity onPress={() => getPosition()}>
        <Text style={styles.positionTitle}>Get Position</Text>
      </TouchableOpacity>
      <FlatList
        keyboardShouldPersistTaps="handled"
        data={data}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => <Item item={item} />}
        style={{
          marginTop: 20,
          flexGrow: 0,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13131A',
    paddingTop: 50,
  },
  positionTitle: {
    fontSize: 20,
    color: '#FFF',
  },
  position: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFF',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 2.4,
    color: '#fff',
  },
});

export default Home;
