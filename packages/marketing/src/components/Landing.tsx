import React from 'react';
import {
	Button,
	Card,
	Container,
	Row,
	Col,
	Nav,
	NavLink,
	Navbar,
	Offcanvas
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function Copyright() {
  return (
		<p className='flex-row'>
      Copyright © <Link to="https://material-ui.com/">
        Your Website
      </Link> {new Date().getFullYear()}{'.'}
    </p>
  );
}


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {

  return (
    <React.Fragment>
			<Container>
			{/* Hero unit */}
				<Row>
					<Container>
						<h2 style={{
							textAlign: 'center'
						}}>
							Home Page
						</h2>
						<h5>
							Something short and leading about the collection below—its
							contents, the creator, etc. Make it short and sweet, but not too
							short so folks don&apos;t simply skip over it entirely.
						</h5>
						<div>
							<Container>
								<Navbar>
									<Container>
										<Navbar.Offcanvas>
											<Offcanvas.Body style={{
												justifyContent: 'center'
											}}>
												<Nav>
													<LinkContainer to="/pricing">
														<Nav.Link>
															<Button variant='primary'>
																Pricing
															</Button>
														</Nav.Link>
													</LinkContainer>
													<LinkContainer to="/pricing">
														<Nav.Link>
															<Button variant='outline-primary'>
																Pricing
															</Button>
														</Nav.Link>
													</LinkContainer>
												</Nav>
											</Offcanvas.Body>
										</Navbar.Offcanvas>
									</Container>
								</Navbar>
							</Container>
						</div>
					</Container>
				</Row>
				<Row>
					<Container>
						{/* End hero unit */}
						<Row md={4} sm={3} xs={12}>
							{cards.map((card) => (
								<Col key={card} className='py-2'>
									<Card>
										<Card.Img
											src="https://source.unsplash.com/random"
											title="Image title"
										/>
										<Card.Header>
											<h2>
												Heading
											</h2>
										</Card.Header>
										<Card.Body>
											<p>
												This is a media card. You can use this section to describe
												the content.
											</p>
										</Card.Body>
										<Card.Footer>
											<LinkContainer to='/pricing'>
												<Card.Link>
													<Button variant='primary'>
														View
													</Button>
												</Card.Link>
											</LinkContainer>
											<LinkContainer to='/pricing'>
												<Card.Link href='/pricing'>
													<Button variant="primary">
														Edit
													</Button>
												</Card.Link>
											</LinkContainer>
										</Card.Footer>
									</Card>
								</Col>
							))}
						</Row>
					</Container>
				</Row>
			</Container>
      {/* Footer */}
      <Container>
				<Row>
        	<Copyright />
				</Row>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
