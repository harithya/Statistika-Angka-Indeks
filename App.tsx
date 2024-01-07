import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoute from './src/routes/StackRoute';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <StackRoute />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
