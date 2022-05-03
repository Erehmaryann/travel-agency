import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { NavbarCon } from './NavbarStyles';

const NavbarComponent = () => {
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 60) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);

	return (
		<NavbarCon
			expand="lg"
			fixed="top"
			className={
				colorChange
					? 'colorChange'
					: 'navbar navbar-expand-lg navbar-light fixed-top'
			}>
			<Container>
				<Navbar.Brand href="#">
					<img src="/assets/travel-logo.png" alt="brand-logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll>
						<Nav.Link
							href="#action1"
							style={{ color: '#fff', fontSize: '14px' }}>
							About Us
						</Nav.Link>
						<Nav.Link
							href="#action2"
							style={{ color: '#fff', fontSize: '14px' }}>
							Support
						</Nav.Link>
						<Nav.Link href="#" style={{ color: '#fff', fontSize: '14px' }}>
							Language
						</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Button
							style={{
								background: '#fff',
								outline: 'none !important',
								border: '0.5px solid #fff !important',
								borderRadius: '10px',
								width: '151px',
								padding: '12.5px 0',
								color: '#3E86F5',
								fontSize: '14px',
							}}>
							Sign In
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</NavbarCon>
	);
};

export default NavbarComponent;
