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
				places: updatePlaces(state, action.payload.place),
			};
		default:
			return state;
	}
};

const updatePlaces = (state, placeToUpdate) => {
	return state.places.map((place) => {
		if (place.code !== placeToUpdate.code) {
			return place;
		}
		return {
			...place,
			coordinates: placeToUpdate.coordinates,
			country: placeToUpdate.country,
		};
	});
};

export default places;
