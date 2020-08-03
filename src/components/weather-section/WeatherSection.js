import React from 'react';
import ShortTermForecast from './short-term/ShortTermForecast';
import LongTermForecast from './long-term/LongTermForecast';
import { Container, Row, Col } from 'react-bootstrap';

function WeatherSection() {
	return (
		<Container>
			<Row>
				<Col>
					<ShortTermForecast />
				</Col>
			</Row>
			<Row>
				<Col>
					<LongTermForecast />
				</Col>
			</Row>
		</Container>
	);
}

export default WeatherSection;
