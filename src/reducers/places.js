const places = (state = [], action) => {
	switch (action.type) {
		case 'SET_PLACES':
			return {
				...state,
				places: action.payload,
			};
		default:
			return state;
	}
};

export default places;
