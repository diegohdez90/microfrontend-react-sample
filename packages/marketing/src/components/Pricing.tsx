import React from 'react';

import {
	Container,
	Row,
	Col,
	Card,
	NavLink,
	Button
} from 'react-bootstrap';
/*
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
*/
import { Link as RouterLink } from 'react-router-dom';

function Copyright() {
  return (
    <p>
      {'Copyright © '}
      <NavLink href="https://material-ui.com/">
        Your Website
      </NavLink>{' '}
      {new Date().getFullYear()}
      {'.'}
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
									<Card.Header
									/>
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
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <NavLink href="#">
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