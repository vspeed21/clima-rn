import React from 'react';
import {Text, StyleSheet, SafeAreaView, Image} from 'react-native';

function Header() {
  return (
    <SafeAreaView>
      <Text style={styles.encabezado}>Criptomonedas</Text>

      <Image
        style={styles.imagen}
        source={require('../assets/img/cryptomonedas.png')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  encabezado: {
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    paddingVertical: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    fontSize: 22,
  },
  imagen: {
    width: '100%',
    height: 150,
    marginVertical: 20,
  },
});

export default Header;
