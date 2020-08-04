import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import allActions from '../../actions';
import axios from 'axios';
import constants from '../../shared/index';
import PlaceSelector from './PlaceSelector';
const getPlaces = (state) => state.places;

const getPlaceNamesAndCodes = createSelector([getPlaces], (places) => {
	if (places.places) {
		return Object.values(places.places).map((place) => {
			return {
				name: place.name,
				code: place.code,
			};
		});
	}
	return places;
});

const fetchAdditionalPlaceInfo = (place) => {
	return axios
		.get(
			`${constants.PROXY_URL}${constants.METEO_API_URL}/places/${place.code}/forecasts/long-term`,
		)
		.then((response) => response.data)
		.catch((e) => {
			throw e;
		});
};

function WeatherSection() {
	const places = useSelector(getPlaceNamesAndCodes);

	const selectedPlace = useSelector((store) => store.places.selectedPlace);

	const [placeDetails, setPlaceDetails] = useState({});

	const dispatch = useDispatch();

	useEffect(() => {
		if (selectedPlace) {
			fetchAdditionalPlaceInfo(selectedPlace).then((response) => {
				dispatch(allActions.placesActions.updatePlace(response));
				setPlaceDetails(response);
			});
		}
	}, [selectedPlace]);

	return (
		<Container>
			<Row>
				<PlaceSelector places={places} />
			</Row>
			{placeDetails && placeDetails.place && (
				<div>
					<Row>
						{placeDetails.place.name}, {placeDetails.place.country}{' '}
						{placeDetails.place.countryCode}
					</Row>
					<Row>
						<input type="range" min="0" defaultValue="0" max="12" step="1" />
					</Row>
					<Row>
						<span>Time</span>
					</Row>
					<Row>
						<span>Temperature</span>
					</Row>
					<Row>
						<span>Windspeed</span>
					</Row>
					<Row>
						<i className={`wi wi-day-sunny display-1`}></i>
					</Row>
				</div>
			)}
		</Container>
	);
}

export default WeatherSection;
