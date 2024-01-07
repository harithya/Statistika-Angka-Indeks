import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DataTable, IconButton} from 'react-native-paper';
import {PrepareData} from '../../types/app-types';

interface Props {
  data: PrepareData[];
}
const PreviewTable: React.FC<Props> = ({data}) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.cell}>Harga (P0)</DataTable.Title>
            <DataTable.Title style={styles.cell}>Quantity (Q0)</DataTable.Title>
            <DataTable.Title style={styles.cell}>Harga (PT)</DataTable.Title>
            <DataTable.Title style={styles.cell}>Quantity (QT)</DataTable.Title>
          </DataTable.Header>
          {data.map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.price_p0}</DataTable.Cell>
              <DataTable.Cell>{item.quantity_q0}</DataTable.Cell>
              <DataTable.Cell>{item.price_pt}</DataTable.Cell>
              <DataTable.Cell>{item.quantity_qt}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    paddingRight: 30,
  },
});

export default PreviewTable;
