import fetch from 'node-fetch';

const OWM_URL_BASE =
	'https://api.openweathermap.org/data/2.5/TYPE?q=CITY&appid=APIKEY';
const OWN_API_KEY = '2ccdeafa04e246cbbfee81b1d58b70d3';

export const getForecastByCity = async city => {
	return await getQuery(city, 'forecast');
};

export const getWeatherByCity = async city => {
	return await getQuery(city, 'weather');
};

const getQuery = async (city, type) => {
	const url = OWM_URL_BASE.replace('TYPE', type)
		.replace('CITY', city)
		.replace('APIKEY', OWN_API_KEY);

	const res = await fetch(url);
	const data = await res.json();

	return data;
};
