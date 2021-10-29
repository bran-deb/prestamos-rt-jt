import React, { Fragment, useState } from 'react';
import { calcularTotal } from '../helpers/helpers';


const Formulario = (props) => {

    const { cantidad, setCantidad, plazo, setPlazo, setTotal, setCargando } = props
    //definir state
    const [error, guardarError] = useState(false)

    //submit
    const calcularPrestamo = (e) => {
        e.preventDefault()
        // validar
        if (cantidad === 0 || plazo === '' || isNaN(plazo) || isNaN(cantidad)) {
            guardarError(true)
            return
        }
        guardarError(false)
        setCargando(true)



        setTimeout(() => {
            //cotizar
            const total = calcularTotal(cantidad, plazo)

            //una vez calculado guardar total
            setTotal(total)
            //desabilito spinner
            setCargando(false)
        }, 2000);
    }


    return (
        <Fragment>

            <form onSubmit={calcularPrestamo}>
                <div>
                    <label>Cantidad Prestamo</label>
                    <input
                        className="u-full-width"
                        type="number"
                        placeholder="Ejemplo: 3000"
                        // usamos un evento(onchange) para actualizar el setCantidad
                        onChange={(e) => setCantidad(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    <label>Plazo para pagar</label>
                    <select
                        className="u-full-width"
                        onChange={(e) => setPlazo(parseInt(e.target.value))}
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Calcular"
                    className="button-primary u-full-width"
                />
            </form>
            {(error)
                ? <p className="error">Todos los campos son obligatorios</p>
                : null
            }

        </Fragment>
    )
}

export default Formulario;