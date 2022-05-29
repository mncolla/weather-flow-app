import {
	getForecastByCity,
	getWeatherByCity,
} from '../../../services/openWeatherMap.js';
import { getLocation } from '../../../services/ipApi.js';

export default async (fastify, opts) => {
	fastify.get('/:city', async (request, reply) => {
		const location = await getLocation('186.57.170.113');
		return location;
	});

	fastify.get('/', async (request, reply) => {
		const ip = (
			request.headers['x-forwarded-for'] ||
			request.socket.remoteAddress ||
			''
		)
			.split(',')[0]
			.trim();
		const location = await getLocation('186.57.170.113');
		const weather = await getWeatherByCity(location.city);
		return {
			location,
			weather,
		};
	});
};
