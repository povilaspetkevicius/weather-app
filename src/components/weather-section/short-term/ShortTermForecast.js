import React from 'react';
import { Container, Row } from 'react-bootstrap';
function ShortTermForecast() {
	return (
		<Container>
			<Row>
				<input></input>
			</Row>
			<Row>
				<span>Gotham</span>
			</Row>
			<Row>
				<input
					id="timeSlider"
					type="range"
					min="0"
					defaultValue="0"
					max="12"
					step="1"
				/>
			</Row>
			<Row>
				{' '}
				<span>Time</span>
			</Row>
			<Row>
				{' '}
				<span>Temperature</span>
			</Row>
			<Row>
				{' '}
				<span>Windspeed</span>
			</Row>
			<Row>
				<i className={`wi wi-day-sunny display-1`}></i>
			</Row>
		</Container>
	);
}

export default ShortTermForecast;
