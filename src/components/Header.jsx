import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/home" className='fs-2 py-1 px-2 mx-2 link-secondary text-white'>Todo-App</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className='link-secondary text-white fs-6 text-decoration-none px-2 py-2 my-1 hovarable'>Home</Link>
            <Link to="/about" className='link-secondary text-white  fs-6 text-decoration-none px-2 py-2 my-1'>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header