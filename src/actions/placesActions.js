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

const updatePlace = (place) => {
	return {
		type: 'UPDATE_PLACE',
		payload: place,
	};
};

export default { addAllPlaces, setSelectedPlace, updatePlace };
