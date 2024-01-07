import {View, StyleSheet, ScrollView} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Appbar, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../constant';

interface Props {
  headerChildren?: React.ReactNode;
}
const DetailLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  headerChildren,
}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="" />
        {headerChildren}
      </Appbar.Header>
      <ScrollView>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    flex: 1,
  },
});

export default DetailLayout;
