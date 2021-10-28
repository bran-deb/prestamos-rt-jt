import React, { Fragment } from 'react';

const Header = ({ titulo, cantidad }) => (
    < Fragment >
        <h1>{titulo}</h1>
        <p>{cantidad}</p>
    </ Fragment>
)

export default Header

