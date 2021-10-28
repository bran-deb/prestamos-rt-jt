import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {
  //definir state
  const [cantidad, setCantidad] = useState(0)
  const [plazo, setPlazo] = useState('')

  return (
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos"
      />
      <div className="container">
        {/* pasamos el state via props */}
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
        >
        </Formulario>
      </div>
    </Fragment>
  )
}

export default App;
