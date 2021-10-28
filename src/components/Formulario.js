import React from 'react';


const Formulario = () => (
    <form>
        <div>
            <label>Cantidad Prestamo</label>
            <input
                className="u-full-width"
                type="number"
                placeholder="Ejemplo: 3000"
            />
        </div>
        <div>
            <label>Plazo para pagar</label>
            <select className="u-full-width">
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
)

export default Formulario;