import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import MensajeResultado from './components/MensajeResultado';


function App() {
  //definir state
  const [cantidad, setCantidad] = useState(0)
  const [plazo, setPlazo] = useState('')
  const [total, setTotal] = useState(0)

  //carga condicional de componentes
  let componente
  ((total === 0 || plazo === '' || isNaN(plazo) || isNaN(total)))
    ? componente = <Mensaje />
    : componente = <MensajeResultado
      cantidad={cantidad}
      plazo={plazo}
      total={total}
    />


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
          total={total}
          setTotal={setTotal}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  )
}

export default App;
