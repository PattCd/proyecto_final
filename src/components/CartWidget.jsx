import Nav from 'react-bootstrap/Nav';
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
    const supStyle= { 
        fontSize: 12, 
        color: 'white',
        backgroundColor: 'red',
        padding: '1px 4px',
        borderRadius: '100px'
    }
    return  (
        <>     
        <Nav.Link href="#carrito"><BsFillCartFill size={24}/><sup style={supStyle}>3</sup> </Nav.Link>            
        </>
    )
}

export default CartWidget

