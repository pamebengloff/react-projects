import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AppBar.css' //para manejar su css
//import TimeBar from "./TimeBar"
import Boton from "../Boton/Boton"
import Dropdown from 'react-bootstrap/Dropdown';

AppBar.propTypes = { //los props deben aceptar solo estos tipos 
    title: PropTypes.string, 
    subtitle: PropTypes.string,
    myAlert: PropTypes.func  //recibe la funcion alerta y se inicializa abajo 
};

function AppBar({title="TITULO", subtitle="Subtitle", tiempo, myAlert, ...props}) { //...props: que jale todos los props que tienen los componentes por default (los va a tener disponibles pero no guardados)
    //si no le mandamos los parametros, que utilice los que tiene por default
        
    const miFuncionPropia = () =>{
        console.log("estoy ejecutando mi funcion propia")
        myAlert() //aqui ejecuta la funcion que recibió el prop myAlert (la funcion es alerta de App, se "sobrecarga" como en java )
                  //cuando se ejecute miFuncionPropia con el onClick de Boton tambien se ejecuta myAlert
    };

    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="titulo-app-bar">
            {title}{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="home" href="#">
                Home
              </Nav.Link>
              {/*estando en el comp hijo ejecutamos una funcion (myAlert) que esta declarada en el padre */}
              <Nav.Link id="link" href="#" onClick={myAlert}>
                Link
              </Nav.Link>
              {/*importamos al componente Boton y ejecutamos una funcion en que esta en su comp padre (AppBar padre, Boton hijo) */}
              <Boton title="Mi boton nieto" action={miFuncionPropia} />
              
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default AppBar;