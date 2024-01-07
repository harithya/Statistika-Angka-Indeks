import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DataTable, Text} from 'react-native-paper';
import {PrepareData} from '../../types/app-types';

interface Props {
  data: PrepareData[];
}
const ResultTable: React.FC<Props> = ({data}) => {
  const formatNumber = (num: number) => {
    if (num % 1 !== 0) {
      return num.toFixed(2);
    }
    return num;
  };

  const total = () => {
    const p0 =
      data.map(item => item.price_p0).reduce((prev, next) => prev + next) || 0;
    const q0 =
      data.map(item => item.quantity_q0).reduce((prev, next) => prev + next) ||
      0;
    const pt =
      data.map(item => item.price_pt).reduce((prev, next) => prev + next) || 0;
    const qt =
      data.map(item => item.quantity_qt).reduce((prev, next) => prev + next) ||
      0;

    const row4 = data.map(item => item.price_p0 * item.quantity_q0);
    const row5 = data.map(item => item.price_pt * item.quantity_qt);
    const row6 = data.map(item => item.price_pt / item.price_p0);
    const row7 = data.map(
      item =>
        (item.price_pt / item.price_p0) * (item.price_p0 * item.quantity_q0),
    );
    const row8 = data.map(
      item =>
        (item.price_pt / item.price_p0) * (item.price_pt * item.quantity_qt),
    );
    const row9 = data.map(item => item.price_pt * item.quantity_q0);
    const row10 = data.map(item => item.price_p0 * item.quantity_qt);
    const row11 = data.map(
      item => item.price_pt * (item.quantity_q0 + item.quantity_qt),
    );
    const row12 = data.map(
      item => item.price_p0 * (item.quantity_q0 + item.quantity_qt),
    );
    const row13 = data.map(
      item => item.price_pt * Math.sqrt(item.quantity_q0 * item.quantity_qt),
    );
    const row14 = data.map(
      item => item.price_p0 * Math.sqrt(item.quantity_q0 * item.quantity_qt),
    );

    return {
      totalpriceP0: p0,
      totalquantityQ0: q0,
      totalpricePT: pt,
      totalquantityQT: qt,
      totalrow4: row4.reduce((prev, next) => prev + next),
      totalrow5: row5.reduce((prev, next) => prev + next),
      totalrow6: row6.reduce((prev, next) => prev + next),
      totalrow7: row7.reduce((prev, next) => prev + next),
      totalrow8: row8.reduce((prev, next) => prev + next),
      totalrow9: row9.reduce((prev, next) => prev + next),
      totalrow10: row10.reduce((prev, next) => prev + next),
      totalrow11: row11.reduce((prev, next) => prev + next),
      totalrow12: row12.reduce((prev, next) => prev + next),
      totalrow13: row13.reduce((prev, next) => prev + next),
      totalrow14: row14.reduce((prev, next) => prev + next),
    };
  };

  const laspeyres = () => {
    return (total().totalrow9 / total().totalrow4) * 100;
  };

  const paasche = () => {
    return (total().totalrow5 / total().totalrow10) * 100;
  };

  const drobisch = () => {
    const resultLaspeyres = laspeyres();
    const resultPaasche = paasche();

    return (resultLaspeyres + resultPaasche) / 2;
  };

  const marshallEdgeworth = () => {
    return (total().totalrow11 / total().totalrow12) * 100;
  };

  const walsh = () => {
    return (total().totalrow13 / total().totalrow14) * 100;
  };

  const fisher = () => {
    return Math.sqrt(laspeyres() * paasche());
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.cell}>Harga (P0)</DataTable.Title>
            <DataTable.Title style={styles.cell}>Quantity (Q0)</DataTable.Title>
            <DataTable.Title style={styles.cell}>Harga (PT)</DataTable.Title>
            <DataTable.Title style={styles.cell}>Quantity (QT)</DataTable.Title>
            <DataTable.Title style={styles.cell}>P0 * Q0</DataTable.Title>
            <DataTable.Title style={styles.cell}>PT * QT</DataTable.Title>
            <DataTable.Title style={styles.cell}>PT / P0</DataTable.Title>
            <DataTable.Title style={styles.cell}>
              PT / P0 .(P0 * Q0)
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              PT/P0.(PT * QT)
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>PT * Q0</DataTable.Title>
            <DataTable.Title style={styles.cell}>P0 * QT</DataTable.Title>
            <DataTable.Title style={styles.cell}>
              PT * (Q0 + QT)
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              P0 * (Q0 + QT)
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              PT * SQRT(Q0 * QT)
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              P0 * SQRT(Q0 * QT)
            </DataTable.Title>
          </DataTable.Header>
          {data.map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell style={styles.cell}>
                {item.price_p0}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {item.quantity_q0}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {item.price_pt}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {item.quantity_qt}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(item.price_p0 * item.quantity_q0)}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(item.price_pt * item.quantity_qt)}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(item.price_pt / item.price_p0)}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(
                  (item.price_pt / item.price_p0) *
                    (item.price_p0 * item.quantity_q0),
                )}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(
                  (item.price_pt / item.price_p0) *
                    (item.price_pt * item.quantity_qt),
                )}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(item.price_pt * item.quantity_q0)}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(item.price_p0 * item.quantity_qt)}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(
                  item.price_pt * (item.quantity_q0 + item.quantity_qt),
                )}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(
                  item.price_p0 * (item.quantity_q0 + item.quantity_qt),
                )}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(
                  item.price_pt *
                    Math.sqrt(item.quantity_q0 * item.quantity_qt),
                )}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cell}>
                {formatNumber(
                  item.price_p0 *
                    Math.sqrt(item.quantity_q0 * item.quantity_qt),
                )}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
          {/* sum all */}
          <DataTable.Header>
            <DataTable.Title style={styles.cell}>
              {total().totalpriceP0}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {total().totalquantityQ0}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {total().totalpricePT}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {total().totalquantityQT}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow4)}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow5)}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow6)}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow7)}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow8)}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow9)}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow10)}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow11)}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow12)}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow13)}
            </DataTable.Title>
            <DataTable.Title style={styles.cell}>
              {formatNumber(total().totalrow14)}
            </DataTable.Title>
          </DataTable.Header>
        </DataTable>
      </ScrollView>
      <View style={styles.result}>
        <Text>Untuk hasil perhitungan nya adalah : {'\n'}</Text>
        <Text>Laspeyres = {formatNumber(laspeyres())}</Text>
        <Text>Paasche = {formatNumber(paasche())}</Text>
        <Text>Drobisch = {formatNumber(drobisch())}</Text>
        <Text>Marshall Edgeworth = {formatNumber(marshallEdgeworth())}</Text>
        <Text>Walsh = {formatNumber(walsh())}</Text>
        <Text>Fisher = {formatNumber(fisher())}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    minWidth: 130,
    textAlign: 'center',
    // paddingRight: 20,
  },
  result: {
    marginTop: 40,
    gap: 8,
  },
});

export default ResultTable;
