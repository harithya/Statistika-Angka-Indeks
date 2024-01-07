import {StyleSheet, View} from 'react-native';
import React from 'react';
import DetailLayout from '../../components/Layouts/DetailLayout';
import {Props} from '../../types/router-type';
import ResultTable from '../../components/Table/ResultTable';
import {Appbar} from 'react-native-paper';

const CalculatePage: React.FC<Props<'Calculate'>> = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <DetailLayout
      headerChildren={
        <Appbar.Action
          icon="information-outline"
          onPress={() => navigation.navigate('Info')}
        />
      }>
      <View>
        <ResultTable data={data} />
      </View>
    </DetailLayout>
  );
};

export default CalculatePage;
