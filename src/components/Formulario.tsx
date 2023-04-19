import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Cripto } from '../interface';

interface Props {
  moneda: string,
  setMoneda: (state: string) => void,
  criptoMoneda: string,
  setCriptoMoneda: (state: string) => void,
  setConsultarAPI: (state: boolean) => void, 
}

function Formulario({ moneda, setMoneda, criptoMoneda,setCriptoMoneda, setConsultarAPI }: Props) {
  const [criptoMonedas, setCriptoMonedas] = useState<Cripto[]>([]);

  useEffect(() => {
    fetchingAPI();
    async function fetchingAPI() {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const { data } = await axios(url);
      setCriptoMonedas(data.Data);
    }
  }, []);

  async function cotizarPrecio() {
    if ([moneda, criptoMoneda].includes('')) {
      Alert.alert('Error', 'Ambos campos son obligatorios para la cotización');
      return;
    }

    setConsultarAPI(true);
  }

  return (
    <View style={styles.formulario}>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        style={styles.input}
        selectedValue={moneda}
        onValueChange={itemValue => {
          setMoneda(itemValue);
        }}
      >
        <Picker.Item label="--Seleccione--" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Peso colombiano" value="COL" />
        <Picker.Item label="Libra esterlina" value="GBP" />
        <Picker.Item label="Euro" value="EUR" />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        style={styles.input}
        selectedValue={criptoMoneda}
        onValueChange={itemValue => {
          setCriptoMoneda(itemValue);
        }}
      >
        <Picker.Item label="--Seleccione--" value="" />
        {criptoMonedas.length ? (
          criptoMonedas.map(cripto => (
            <Picker.Item
              key={cripto.CoinInfo.id} 
              label={cripto.CoinInfo.FullName}
              value={cripto.CoinInfo.Name}
            />
          ))
        ): null}
      </Picker>

      <TouchableHighlight 
        style={styles.btn}
        onPress={cotizarPrecio}
      >
        <Text style={styles.btnText}>Cotizar</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    marginVertical: 20,
    textTransform: 'uppercase',
  },
  formulario: {
    marginHorizontal: '3%',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Formulario;
