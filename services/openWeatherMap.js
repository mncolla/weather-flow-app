import fetch from 'node-fetch';

const OWM_API_URL =
	'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}';

export const openWeatherMap = async () => {
	const response = await fetch('https://api.github.com/users/github');
	const data = await response.json();
};
