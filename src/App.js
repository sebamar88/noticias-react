import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    
    const consultarAPI = async () => {
      if(categoria === '') return;
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=51d95705d99d4c47ab1b42552c7194ac`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
        <Header 
          titulo='Buscador de Noticias'
        />

        <div className="container white">
            <Formulario 
              guardarCategoria={guardarCategoria}
            />

            <ListadoNoticias 
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default App;
