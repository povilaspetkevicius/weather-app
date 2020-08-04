const addAll = (places) => {
	return {
		type: 'SET_PLACES',
		payload: places,
	};
};

export default { addAll };
