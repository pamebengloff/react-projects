import React from 'react';
import PropTypes from 'prop-types';

Boton.propTypes = {
    title: PropTypes.string, 
    action: PropTypes.func //action recibira una function desde su prop en AppBar y la invocara en el onClick
};

function Boton({title, action, props}) {
    return (
        <button onClick={action}> {/*ejecutara a miFormulaPropia() y por consecuencia a alerta(), funciones pasadas por el abuelo y el padre*/}
            {title}
        </button>
    );
}

export default Boton;