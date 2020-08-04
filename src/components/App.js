import React, { useEffect, useState } from 'react';
import './App.css';
import Map from './map/Map';
import WeatherSection from './weather-section/WeatherSection';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import allActions from '../actions';
import constants from '../shared/index';

const serviceUrl = constants.PROXY_URL + constants.METEO_API_URL + '/places';

const fetchPlaces = () => {
	return axios
		.get(serviceUrl)
		.then((response) => response.data)
		.catch((e) => {
			throw e;
		});
};

function App() {
	const dispatch = useDispatch();
	const [errorMsg, setErrorMsg] = useState({ show: null, errorMessage: '' });

	useEffect(() => {
		fetchPlaces()
			.then(
				(places) => dispatch(allActions.placesActions.addAllPlaces(places)),
				setErrorMsg({ show: false }),
			)
			.catch((e) =>
				setErrorMsg({ show: true, errorMessage: e.response.data.message }),
			);
	}, []);

	return (
		<Container>
			<Row>
				<h2>Weather app</h2>
			</Row>
			{errorMsg.show === true ? (
				<Row>
					<p>Couldn't fetch places from meteo.lt API</p>
				</Row>
			) : (
				<Row>
					<Col>
						<WeatherSection />
					</Col>
					<Col>
						<Map />
					</Col>
				</Row>
			)}
		</Container>
	);
}

export default App;
