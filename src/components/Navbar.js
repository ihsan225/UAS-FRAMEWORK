import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const logout = async () => {
    
    sessionStorage.clear();
    window.location.href = '/';
    
    // window.location.href = '/';
}
const navbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="justify-content-end">
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default navbar;