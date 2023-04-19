import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Resultado } from '../interface';

interface Props {
  resultado: Resultado,
}

function Cotizacion({resultado}:Props) {
  const { PRICE, CHANGEPCT24HOUR, HIGHDAY, LOWDAY, LASTUPDATE } = resultado;

  if(Object.keys(resultado).length === 0) return null;

  return (
    <View style={styles.resultado}>
      <Text style={styles.texto}>
        <Text style={[styles.span, styles.precio]}>{PRICE}</Text>
      </Text>

      <Text style={styles.texto}>
        Precio mas alto del dia: {''}
        <Text style={styles.span}>{HIGHDAY}</Text>
      </Text>

      <Text style={styles.texto}>
        Precio mas bajo del dia: {''}
        <Text style={styles.span}>{LOWDAY}</Text>
      </Text>

      <Text style={styles.texto}>
        Variación últimas 24 horas{''}
        <Text style={styles.span}>{CHANGEPCT24HOUR} %</Text>
      </Text>

      <Text style={styles.texto}>
        Última actualización: {''}
        <Text style={styles.span}>{LASTUPDATE}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#5E49E2',
    padding: 20,
    marginVertical: 10
  },
  texto: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
  },
  precio: {
    fontSize: 38,
    marginBottom: 20,
  },
  span: {
    fontWeight: 'bold',
    fontSize: 15,
  }
});

export default Cotizacion;
