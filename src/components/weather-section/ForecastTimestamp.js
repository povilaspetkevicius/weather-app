import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

const containerStyle = {
	display: 'flex',
	flexFlow: 'row wrap',
	maxWidth: '50%',
	justifyContent: 'space-around',
};
const cardStyle = { flex: 1, minWidth: '100px', maxWidth: '150px' };

function ForecastTimeStamp(props) {
	return (
		<CardDeck style={containerStyle}>
			<Card style={cardStyle}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card style={cardStyle}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card style={cardStyle}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card style={cardStyle}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card style={cardStyle}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		</CardDeck>
	);
}
