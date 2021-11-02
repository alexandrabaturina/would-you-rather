import { Navbar, Nav, Container, NavbarBrand, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const NavBar = () => {

    const authedUser = useSelector(state => state.authedUser)

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>

                <NavbarBrand>
                    Would You Rather
                </NavbarBrand>

                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add">New Question</Nav.Link>
                    <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                </Nav>

                <Navbar className="justify-content-end">
                    <Navbar.Text className='navbar-username'>
                        {authedUser !== null
                            ? `Signed in as ${authedUser}`
                            : 'Log in'}
                    </Navbar.Text>
                    {authedUser !== null && (
                        <Button variant="light">Log Out</Button>
                    )}

                </Navbar>

            </Container>
        </Navbar>
    )
};

export default NavBar;