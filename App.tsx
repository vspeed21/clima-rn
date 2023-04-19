import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Formulario from './src/components/Formulario';
import Header from './src/components/Header';
import Cotizacion from './src/components/Cotizacion';

import { Resultado } from './src/interface';
import { ScrollView, ActivityIndicator } from 'react-native';

function App() {
  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setCriptoMoneda] = useState('');
  const [consultarAPI, setConsultarAPI] = useState(false);
  const [resultado, setResultado] = useState<Resultado>({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    fetchingCotizacion();
    async function fetchingCotizacion() {
      if(consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        const { data } = await axios(url);
        setCargando(true);
        
        //Ocultar el spinner y mostrar el resultado
        setTimeout(() => {
          setResultado(data.DISPLAY[criptoMoneda][moneda]);
          setConsultarAPI(false);
          setCargando(false);
        }, 3000);
      }
    }
  }, [consultarAPI]);

  return (
    <>
      <Header />

      <ScrollView>
        <Formulario 
          moneda={moneda}
          setMoneda={setMoneda}
          criptoMoneda={criptoMoneda}
          setCriptoMoneda={setCriptoMoneda}
          setConsultarAPI={setConsultarAPI}
        />

        {cargando ? (
          <ActivityIndicator
            size='large'
            color='#5E49E2'
          />
        ): (
          <Cotizacion
            resultado={resultado}
          />
        )}
      </ScrollView>

    </>
  );
}

export default App;
