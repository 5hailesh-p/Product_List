import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { Link } from 'react-router';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container >
        <Navbar.Brand as={Link} to="/">Product List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            
          </Nav>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;