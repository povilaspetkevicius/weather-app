import React from 'react';
import './App.css';
import Map from './map/Map';
import WeatherSection from './weather-section/WeatherSection';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
	return (
		<Container>
			<Row>
				<h2>Weather app</h2>
			</Row>
			<Row>
				<Col>
					<WeatherSection />
				</Col>
				<Col>
					<Map />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
