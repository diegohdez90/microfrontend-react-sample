import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

interface Props {
	signedIn: boolean,
	onSignOut: () => void;
}

function NavigationBar ({ signedIn, onSignOut }: Props) {

  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

	return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
						<LinkContainer to="/">
            	<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/pricing">
            	<Nav.Link>Pricing</Nav.Link>
						</LinkContainer>
						<NavDropdown title="Register" id="nav-dropdown">
							{signedIn && <React.Fragment><NavDropdown.Item>Profile</NavDropdown.Item>
							<NavDropdown.Divider /></React.Fragment>}
							<NavDropdown.Item
								 onClick={onClick}
								 href={signedIn ? '/' : '/auth/signin'}
							>{signedIn ? 'Logout' : 'Login'}</NavDropdown.Item>
						</NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;