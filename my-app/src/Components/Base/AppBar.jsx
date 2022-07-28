import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AppBar.css' //para manejar su css
//import TimeBar from "./TimeBar"
import Boton from "../Boton/Boton"

AppBar.propTypes = { //los props deben aceptar solo estos tipos 
    title: PropTypes.string, 
    subtitle: PropTypes.string,
    myAlert: PropTypes.func
};

function AppBar({title="TITULO", subtitle="Subtitle", tiempo, myAlert, ...props}) { //...props: que jale todos los props que tienen los componentes por default (los va a tener disponibles pero no guardados)
    //si no le mandamos los parametros, que utilice los que tiene por default
        
    const miFuncionPropia = () =>{
        console.log("estoy ejecutando mi funcion propia")
        myAlert()
    };

    return (

        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">{title} </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="home "href="#home">Home</Nav.Link>
              <Nav.Link id="link" href="#" onClick={myAlert}   >Link</Nav.Link>
              {/*importamos al boton */}
             <Boton 
                title="Mi boton nieto"
                action={miFuncionPropia}
             />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
    );
}

export default AppBar;