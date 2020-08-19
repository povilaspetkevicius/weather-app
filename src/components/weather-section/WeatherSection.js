import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import allActions from '../../actions';
import axios from 'axios';
import constants from '../../shared/index';
import PlaceSelector from './PlaceSelector';
import ForecastTimestamp from './ForecastTimestamp';

const getSelectedPlace = (state) => state.places.selectedPlace;
const getPlaces = (state) => state.places.places;

const getDetailedPlace = createSelector(
	[getPlaces, getSelectedPlace],
	(places, selectedPlace) => {
		console.log(places.places, selectedPlace);
		return places.length && selectedPlace
			? places.find(
					(place) =>
						place.code === selectedPlace.code &&
						place.name === selectedPlace.name,
			  )
			: {};
	},
);

const getPlaceNamesAndCodes = createSelector([getPlaces], (places) => {
	if (places) {
		return Object.values(places).map((place) => {
			return {
				name: place.name,
				code: place.code,
			};
		});
	}
	return places;
});

const containerStyle = {
	display: 'flex',
	flexFlow: 'row nowrap',
	overflowX: 'scroll',
	height: '90%',
	maxWidth: '100%',
	minWidth: '90%',
};

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

	const selectedPlace = useSelector(getSelectedPlace);

	const placeDetails = useSelector(getDetailedPlace);

	const dispatch = useDispatch();

	useEffect(() => {
		if (selectedPlace) {
			fetchAdditionalPlaceInfo(selectedPlace).then((response) => {
				dispatch(allActions.placesActions.updatePlace(response));
			});
		}
	}, [selectedPlace]);

	console.log(placeDetails, selectedPlace);

	return (
		<Container>
			<Row>
				<PlaceSelector places={places} />
			</Row>
			{Object.keys(placeDetails).length > 0 && (
				<Row>
					<h2>
						{placeDetails.name}, {placeDetails.country}{' '}
						{placeDetails.countryCode}
					</h2>
				</Row>
			)}
			<Row>
				<div style={containerStyle}>
					{placeDetails.forecastTimeStamps &&
						placeDetails.forecastTimeStamps.map((timestamp, i) => (
							<ForecastTimestamp timestamp={timestamp} key={i} />
						))}
				</div>
			</Row>
		</Container>
	);
}

export default WeatherSection;
