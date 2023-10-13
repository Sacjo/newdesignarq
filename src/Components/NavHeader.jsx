import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../Assets/logonew@3x.png'; // Asegúrate de reemplazar la ruta con la ubicación real de tu logo

function NavHeader() {
  return (
    <Navbar expand="lg" className='bg-transparent shadow-none sticky-top'>
      <Container className='mt-4 mb-2'>
        <Navbar.Brand className=" d-block d-lg-none">
          <img
            src={Logo}
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto btn-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='ps-4 pt-3 pb-3 mt-2'>
          <Nav className='col-3 '>
            <Nav.Link href="#proyectos">PROYECTOS</Nav.Link>
            <Nav.Link href="#construcciones">CONSTRUCCIONES</Nav.Link>
            <Nav.Link href="#amoblamientos">AMOBLAMIENTOS</Nav.Link>
          </Nav>
          <Navbar.Brand className="mx-auto d-none d-lg-block">
            <img
              src={Logo}
              alt="Logo"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className='col-3 '>
            <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
            <Nav.Link href="#clientes">CLIENTES</Nav.Link>
            <Nav.Link href="#contacto">CONTACTO </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
