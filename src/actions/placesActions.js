const addAllPlaces = (places) => {
	return {
		type: 'SET_PLACES',
		payload: places,
	};
};

const setSelectedPlace = (placeCode) => {
	return {
		type: 'SET_SELECTED_PLACE',
		payload: placeCode,
	};
};

export default { addAllPlaces, setSelectedPlace };
