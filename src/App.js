import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {
  return (
    <Fragment>
      <Header titulo="Cotizador de Prestamos" />
      <div className="container">
        <Formulario></Formulario>
      </div>
    </Fragment>
  )
}

export default App;
