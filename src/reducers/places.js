const places = (state = [], action) => {
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
		default:
			return state;
	}
};

export default places;
