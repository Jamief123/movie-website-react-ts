import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const query = e.currentTarget.elements.query.value;
        navigate(`/search/${query}`);
    }
    
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Link to='/'>
            <Navbar.Brand href="#">JCinema</Navbar.Brand>
            </Link>
        
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            </Nav>
            <form className="d-flex"
            onSubmit={handleSubmit}>
                <input
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="query"
                />
                <Button variant="outline-success"
                type="submit">Search</Button>
            </form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar;