import React, { useEffect, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';

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

export default PlaceSelector;
