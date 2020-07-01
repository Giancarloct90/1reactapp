import React, { useState, Fragment } from 'react';

const Contador = () => {
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log('me diste un click');
        setNumero(numero + 1);
    }

    return (
        <Fragment>
            <h1>Mi primer Contador {numero}</h1>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
};

export default Contador;