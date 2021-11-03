import { Navbar, Nav, Container, NavbarBrand, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import setAuthedUser from "../actions/authedUser";

const NavBar = () => {

    const authedUser = useSelector(state => state.authedUser)
    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(setAuthedUser(null))
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>

                <NavbarBrand>
                    Would You Rather
                </NavbarBrand>

                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/add">New Question</Nav.Link>
                    <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                </Nav>

                <Navbar className="justify-content-end">
                    <Navbar.Text className='navbar-username'>
                        {authedUser !== null
                            ? `Signed in as ${authedUser}`
                            : 'Log in'}
                    </Navbar.Text>
                    {authedUser !== null && (
                        <Button variant="light" onClick={handleLogout}>Log Out</Button>
                    )}

                </Navbar>

            </Container>
        </Navbar>
    )
};

export default NavBar;