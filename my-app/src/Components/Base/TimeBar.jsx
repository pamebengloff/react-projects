import React from 'react';
import PropTypes from 'prop-types';
import './AppBar.css' //para manejar su css
//import {useState} from "react";


function TimeBar() {


    const date = new Date();
    const time = date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();

    return (
        <h3>{time} </h3>
        );
}

export default TimeBar;