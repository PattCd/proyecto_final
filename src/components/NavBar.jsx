import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import logo from '../assets/Funko_Logo.png'

export function NavBar() {
  const linkStyle= { 
    fontSize: 16, 
    margin: '10% 0'
   }

   const logoStyle = {
    width: '50%'
   }

   const navBrandStyle = {
    width: '20%',
   }

    return  (      
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"  style={navBrandStyle}><img src={logo} style={logoStyle}></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio" style={linkStyle}>INICIO</Nav.Link>
            <Nav.Link href="#productos" style={linkStyle}>CATEGORIA</Nav.Link>
            <Nav.Link href="#contacto" style={linkStyle}>CONTACTO</Nav.Link>

          </Nav>
          <Nav>            
            <CartWidget/>          
          </Nav>          
        </Container>
    </Navbar>           
     
    )
}