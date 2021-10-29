import React from 'react';

const MensajeResultado = ({ cantidad, plazo, total }) => (
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>cantidad solicitada es: ${cantidad}</p>
        <p>plazo solicitada es: ${plazo}</p>
        <p>Su pago mensual es de: {(total / plazo).toFixed(2)} </p>
        <p>total solicitada es: ${(total).toFixed(2)}</p>
    </div>
)

export default MensajeResultado;