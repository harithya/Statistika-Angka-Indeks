import {View, StyleSheet, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/Layouts/MainLayout';
import {Button, IconButton, TextInput} from 'react-native-paper';
import PreviewTable from '../../components/Table/PreviewTable';
import {PrepareData} from '../../types/app-types';
import {Props} from '../../types/router-type';

const HomePage: React.FC<Props<'Home'>> = ({navigation}) => {
  const [data, setData] = useState<PrepareData[]>([]);
  const [form, setForm] = useState({
    price_p0: '',
    price_pt: '',
    quantity_q0: '',
    quantity_qt: '',
  });

  const handleInput = (value: string, name: keyof PrepareData) => {
    setForm(prev => ({...prev, [name]: Number(value)}));
  };

  const handleAdd = () => {
    // add validation
    if (Object.values(form).some(value => value === '')) {
      ToastAndroid.show('Data tidak boleh kosong', ToastAndroid.SHORT);
      return;
    }

    const value = {
      price_p0: Number(form.price_p0),
      price_pt: Number(form.price_pt),
      quantity_q0: Number(form.quantity_q0),
      quantity_qt: Number(form.quantity_qt),
    };

    setData([...data, value]);

    // reset form
    setForm({
      price_p0: '',
      price_pt: '',
      quantity_q0: '',
      quantity_qt: '',
    });
  };

  return (
    <MainLayout title="Statistika">
      <View style={styles.form}>
        <TextInput
          label="Harga (P0)"
          keyboardType="numeric"
          style={styles.input}
          value={form.price_p0.toString()}
          onChangeText={(value: string) => handleInput(value, 'price_p0')}
        />
        <TextInput
          label="Harga (PT)"
          keyboardType="numeric"
          style={styles.input}
          value={form.price_pt.toString()}
          onChangeText={(value: string) => handleInput(value, 'price_pt')}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          label="Kuantitas (Q0)"
          keyboardType="numeric"
          style={styles.input}
          value={form.quantity_q0.toString()}
          onChangeText={(value: string) => handleInput(value, 'quantity_q0')}
        />
        <TextInput
          label="Kuantitas (Qt)"
          keyboardType="numeric"
          style={styles.input}
          value={form.quantity_qt.toString()}
          onChangeText={(value: string) => handleInput(value, 'quantity_qt')}
        />
      </View>
      <View style={styles.form}>
        <Button
          mode="contained-tonal"
          onPress={handleAdd}
          style={styles.button}>
          Add Data
        </Button>
      </View>
      <PreviewTable data={data} />
      {data.length > 0 && (
        <View style={styles.footer}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Calculate', {data: data})}>
            Calculate
          </Button>
        </View>
      )}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    flex: 1,
  },
  button: {
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: 16,
  },
});

export default HomePage;
