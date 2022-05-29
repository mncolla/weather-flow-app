import fetch from 'node-fetch';

const IP_API_URL = 'http://ip-api.com/json/';

export const getLocation = async ip => {
	const location = await fetch(IP_API_URL + ip, { method: 'GET' });
	const data = await location.json();
	return data;
};
