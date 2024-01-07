import {View, StyleSheet, StatusBar} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Appbar, useTheme} from 'react-native-paper';
import {useColorScheme} from 'react-native';

interface Props {
  title: string;
}
const MainLayout: React.FC<PropsWithChildren<Props>> = ({children, title}) => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <StatusBar
        barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <Appbar.Header>
        <Appbar.Content title={title} style={{alignItems: 'center'}} />
      </Appbar.Header>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default MainLayout;
