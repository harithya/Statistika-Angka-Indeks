import {StyleSheet, View} from 'react-native';
import React from 'react';
import DetailLayout from '../../components/Layouts/DetailLayout';
import {Text, useTheme} from 'react-native-paper';
// @ts-ignore
import MathView from 'react-native-math-view';
import {useColorScheme} from 'react-native';

const InfoPage = () => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  return (
    <DetailLayout>
      <View>
        <Text style={styles.text}>
          Beberapa rumus yang digunakan dalam perhitungan ini adalah: {'\n'}
        </Text>
        <View style={styles.list}>
          <Text>1.</Text>
          <View style={styles.flex}>
            <Text style={styles.text}>
              Laspeyres{'\n'}
              Untuk menghitung indeks Laspeyres, digunakan rumus:{'\n'}
            </Text>
            <View
              style={[
                styles.math,
                {backgroundColor: theme.colors.surfaceVariant},
              ]}>
              <MathView
                color={colorScheme === 'dark' ? 'white' : 'black'}
                math={
                  'L = \\left(\\frac{\\sum PT \\cdot Q0}{\\sum P0 \\cdot Q0}\\right) \\times 100\\%'
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <Text>2.</Text>
          <View style={styles.flex}>
            <Text style={styles.text}>
              Paasche{'\n'}
              Untuk menghitung indeks Paasche, digunakan rumus:{'\n'}
            </Text>
            <View
              style={[
                styles.math,
                {backgroundColor: theme.colors.surfaceVariant},
              ]}>
              <MathView
                color={colorScheme === 'dark' ? 'white' : 'black'}
                math={
                  'P = \\left(\\frac{\\sum PT \\cdot QT}{\\sum P0 \\cdot QT}\\right) \\times 100\\%'
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <Text>3.</Text>
          <View style={styles.flex}>
            <Text style={styles.text}>
              Drobisch{'\n'}
              Untuk menghitung indeks Drobisch, digunakan rumus:{'\n'}
            </Text>
            <View
              style={[
                styles.math,
                {backgroundColor: theme.colors.surfaceVariant},
              ]}>
              <MathView
                color={colorScheme === 'dark' ? 'white' : 'black'}
                math={'D = \\frac{\\ Laspeyres + \\ Paasche}{2}'}
              />
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <Text>4.</Text>
          <View style={styles.flex}>
            <Text style={styles.text}>
              Fisher{'\n'}
              Untuk menghitung indeks Fisher, digunakan rumus:{'\n'}F = √(Σ
              Laspeyres * Σ Paasche){'\n'}
            </Text>
            <View
              style={[
                styles.math,
                {backgroundColor: theme.colors.surfaceVariant},
              ]}>
              <MathView
                color={colorScheme === 'dark' ? 'white' : 'black'}
                math={'F = \\sqrt{\\sum Laspeyres \\cdot \\sum Paasche}'}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.list}>
        <Text>5.</Text>
        <View style={styles.flex}>
          <Text style={styles.text}>
            Marshall Edgeworth{'\n'}
            Untuk menghitung indeks Marshall Edgeworth, digunakan rumus:{'\n'}
          </Text>
          <View
            style={[
              styles.math,
              {backgroundColor: theme.colors.surfaceVariant},
            ]}>
            <MathView
              color={colorScheme === 'dark' ? 'white' : 'black'}
              math={
                'ME = \\frac{\\sum PT \\cdot (Q0 + QT)}{\\sum P0 \\cdot (Q0 + QT)} \\times 100\\%'
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.list}>
        <Text>6.</Text>
        <View style={styles.flex}>
          <Text style={styles.text}>
            Simple Agregate{'\n'}
            Untuk menghitung indeks Simple Agregate, digunakan rumus:{'\n'}
          </Text>
          <View
            style={[
              styles.math,
              {backgroundColor: theme.colors.surfaceVariant},
            ]}>
            <MathView
              color={colorScheme === 'dark' ? 'white' : 'black'}
              math={'SA = \\frac{\\sum PT}{\\sum P0} \\times 100\\%'}
            />
          </View>
        </View>
      </View>
      <View style={styles.list}>
        <Text>7.</Text>
        <View style={styles.flex}>
          <Text style={styles.text}>
            Walsh{'\n'}
            Untuk menghitung indeks Walsh, digunakan rumus:{'\n'}
          </Text>
          <View
            style={[
              styles.math,
              {backgroundColor: theme.colors.surfaceVariant},
            ]}>
            <MathView
              color={colorScheme === 'dark' ? 'white' : 'black'}
              math={
                'W = \\left(\\frac{\\sum PT \\cdot \\sqrt{Q0 \\cdot QT}}{\\sum P0 \\cdot \\sqrt{Q0 \\cdot QT}}\\right) \\times 100\\%'
              }
            />
          </View>
        </View>
      </View>
    </DetailLayout>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    flex: 1,
  },
  text: {
    lineHeight: 20,
  },
  math: {
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});

export default InfoPage;
