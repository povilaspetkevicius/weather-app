import React from 'react';
import { Card } from 'react-bootstrap';

const cardStyle = {
	flex: 1,
	minWidth: '55%',
	maxWidth: '60%',
	marginBottom: '1rem',
	marginRight: '1rem',
};

const getImageClassName = (conditionCode, date) => {
	const timeOfDay =
		date.substring(11, 13) > 21 || date.substring(11, 13) < 8 ? 'night' : 'day';
	if (timeOfDay === 'day') {
		switch (conditionCode) {
			case 'clear': {
				return `wi-day-sunny`;
			}
			case 'isolated-clouds':
			case 'scattered-clouds': {
				return 'wi-day-sunny-overcast';
			}
			case 'overcast': {
				return 'wi-day-cloudy';
			}
			case 'light-rain': {
				return 'wi-day-sprinkle';
			}
			case 'moderate-rain': {
				return 'wi-day-showers';
			}
			case 'heavy-rain': {
				return 'wi-day-rain';
			}
			case 'light-snow':
			case 'moderate-snow':
			case 'heavy-snow': {
				return 'wi-day-snow';
			}
			case 'fog': {
				return 'wi-day-fog';
			}
			default: {
				return 'wi-na';
			}
		}
	} else {
		switch (conditionCode) {
			case 'clear': {
				return `wi-night-clear`;
			}
			case 'isolated-clouds':
			case 'scattered-clouds': {
				return 'wi-night-alt-cloudy';
			}
			case 'overcast': {
				return 'wi-night-cloudy';
			}
			case 'light-rain': {
				return 'wi-night-sprinkle';
			}
			case 'moderate-rain': {
				return 'wi-night-showers';
			}
			case 'heavy-rain': {
				return 'wi-night-rain';
			}
			case 'light-snow':
			case 'moderate-snow':
			case 'heavy-snow': {
				return 'wi-night-snow';
			}
			case 'fog': {
				return 'wi-night-fog';
			}
			default: {
				return 'wi-na';
			}
		}
	}
};

function ForecastTimestamp(props) {
	const timestamp = props.timestamp;
	console.log(
		21 > timestamp.forecastTimeUtc.substring(11, 13) &&
			timestamp.forecastTimeUtc.substring(11, 13) < 7,
		timestamp.forecastTimeUtc.substring(11, 13),
	);
	return (
		<Card style={cardStyle}>
			<Card.Body>
				<Card.Header style={{ fontSize: '90%', textAlign: 'center' }}>
					{timestamp.forecastTimeUtc}
				</Card.Header>
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						padding: '1rem',
					}}
				>
					{timestamp.conditionCode && timestamp.forecastTimeUtc && (
						<i
							className={`wi ${getImageClassName(
								timestamp.conditionCode,
								timestamp.forecastTimeUtc,
							)} display-1`}
						></i>
					)}
				</div>
				<Card.Text>
					Temperature at {timestamp.airTemperature}°C. Windspeed at{' '}
					{timestamp.windSpeed}m/s with gusts up to {timestamp.windGust}m/s.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default ForecastTimestamp;
