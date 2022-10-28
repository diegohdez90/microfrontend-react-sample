import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	NavLink,
	Button
} from 'react-bootstrap';
import { Link, Link as RouterLink } from 'react-router-dom';
import { BiStar } from 'react-icons/bi';

function Copyright() {
  return (
    <p className='flex-row'>
      Copyright © <Link to="https://material-ui.com/">
        Your Website
      </Link> {new Date().getFullYear()}{'.'}
    </p>
  );
}

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Pricing() {

  return (
    <React.Fragment>
      {/* Hero unit */}
      <Container>
				<Row>
					<Container>
						<h2
						>
							Pricing
						</h2>
						<h5
						>
							Quickly build an effective pricing table for your potential customers
							with this layout. It&apos;s built with default Material-UI components
							with little customization.
						</h5>
					</Container>
				</Row>
      </Container>
      {/* End hero unit */}
      <Container>
				<Row md={4} sm={2} xs={1}>
						{tiers.map((tier) => (
							// Enterprise card is full width at sm breakpoint
							<Col
							>
								<Card>
									<Card.Header>
										<h3 className='text-center'>{tier.title}<small className='justify-content-end'>{tier.title === 'Pro' && <BiStar />}</small></h3>
									</Card.Header>
									<Card.Body>
										<div>
											<h2>
												${tier.price}
											</h2>
											<h6>
												/mo
											</h6>
										</div>
										<ul>
											{tier.description.map((line) => (
												<li
													key={line}
												>
													{line}
												</li>
											))}
										</ul>
									</Card.Body>
									<Card.Footer>
										<Card.Link 
											href="/auth/signup">
											<Button variant='primary'>
												{tier.buttonText}
											</Button>
										</Card.Link>
									</Card.Footer>
								</Card>
							</Col>
						))}
				</Row>
      </Container>
      {/* Footer */}
      <Container>
        <Row>
          {footers.map((footer) => (
            <Col className='my-2'>
              <h6>
                {footer.title}
              </h6>
              <ul className='nav flex-column'>
                {footer.description.map((item) => (
                  <li key={item} className='nav-item'>
                    <NavLink href="#" className='nav-link text-muted'>
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        <Row mt={5}>
          <Copyright />
        </Row>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
