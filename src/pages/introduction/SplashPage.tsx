import {View, Image, StyleSheet, useColorScheme, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Props} from '../../types/router-type';
import {useTheme} from 'react-native-paper';

const SplashPage: React.FC<Props<'Splash'>> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  const theme = useTheme();
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar
        barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <Image
          source={require('../../assets/logopng.png')}
          style={styles.image}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    objectFit: 'contain',
  },
});

export default SplashPage;
