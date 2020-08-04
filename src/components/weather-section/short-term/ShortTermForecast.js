import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import allActions from '../../../actions';

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

function PlaceSelector(props) {
	const [suggestions, setSuggestions] = useState([]);
	const [value, setValue] = useState({ code: '', name: '' });

	const dispatch = useDispatch();

	useEffect(() => {
		const selectedPlace = props.places.find(
			(place) => place.name === value.name,
		);
		if (selectedPlace) {
			dispatch(allActions.placesActions.setSelectedPlace(selectedPlace));
		}
	}, [value]);

	useEffect(() => {
		setSuggestions(props.places);
	}, [props.places]);

	useEffect(() => {
		setSuggestions(props.places);
	}, [props.places]);

	function getSuggestions(value) {
		return props.places.filter((name) => {
			return name.code.startsWith(value.trim().toLowerCase());
		});
	}
	return (
		<div>
			{props.places.length > 0 && (
				<Autosuggest
					suggestions={suggestions
						.map((suggestion) => suggestion.name)
						.slice(0, 10)}
					onSuggestionsFetchRequested={({ value }) => {
						setValue({ name: value });
						setSuggestions(getSuggestions(value));
					}}
					onSuggestionsClearRequested={() => setSuggestions([])}
					onSuggestionSelected={(e, suggestionValue) => {
						setValue({ name: suggestionValue.suggestion });
					}}
					getSuggestionValue={(suggestion) => suggestion.name}
					renderSuggestion={(suggestion) => {
						return <div>{suggestion}</div>;
					}}
					inputProps={{
						placeholder: 'Start typing a place',
						value: value.name,
						onChange: (_, { newValue }) => {
							setValue({ name: newValue });
						},
					}}
				/>
			)}
		</div>
	);
}

function ShortTermForecast() {
	const places = useSelector(getPlaceNamesAndCodes);

	return (
		<Container>
			<Row>
				<PlaceSelector places={places} />
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
