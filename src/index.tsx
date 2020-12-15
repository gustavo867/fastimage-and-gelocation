import React from 'react';
import { StatusBar } from 'react-native';
import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Home />
    </>
  );
};

export default App;
