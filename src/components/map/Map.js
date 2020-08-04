import React from 'react';
import { useSelector } from 'react-redux';
import './Map.css';
function Map() {
	const selectedPlace = useSelector((store) => store.places.selectedPlace);
	return selectedPlace ? (
		<div className="Map">
			<p>Here should be a map</p>
		</div>
	) : null;
}

export default Map;
