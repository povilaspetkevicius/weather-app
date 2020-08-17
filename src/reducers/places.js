const places = (state = { places: [], selectedPlace: null }, action) => {
	switch (action.type) {
		case 'SET_PLACES':
			return {
				...state,
				places: action.payload,
			};
		case 'SET_SELECTED_PLACE':
			return {
				...state,
				selectedPlace: action.payload,
			};
		case 'UPDATE_PLACE':
			return {
				...state,
				places: updatePlaces(state, action.payload),
			};
		default:
			return state;
	}
};

const updatePlaces = (state, payload) => {
	return state.places.map((place) => {
		if (place.code !== payload.place.code) {
			return place;
		}
		return {
			...place,
			coordinates: payload.place.coordinates,
			country: payload.place.country,
			forecastTimeStamps: payload.forecastTimestamps,
		};
	});
};

export default places;
