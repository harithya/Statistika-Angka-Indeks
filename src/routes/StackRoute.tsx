import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashPage from '../pages/introduction/SplashPage';
import HomePage from '../pages/home/HomePage';
import {RootStackParamList} from '../types/router-type';
import CalculatePage from '../pages/calculate/CalculatePage';
import InfoPage from '../pages/info/InfoPage';

const Stack = createNativeStackNavigator<RootStackParamList>();
const StackRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashPage} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Calculate" component={CalculatePage} />
      <Stack.Screen name="Info" component={InfoPage} />
    </Stack.Navigator>
  );
};

export default StackRoute;
