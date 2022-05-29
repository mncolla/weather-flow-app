import OpenWeatherMap from '../../../services/openWeatherMap.js';
import IpApi from '../../../services/ipApi.js';

export default async (fastify, opts) => {
	fastify.get('/:city', async (request, reply) => {
		const owm = new OpenWeatherMap('weather');
		owm.setCity(request.params.city);
		const weather = await owm.execute();
		return weather;
	});

	fastify.get('/', async (request, reply) => {
		const ipapi = new IpApi(request);
		const location = await ipapi.execute();
		const owm = new OpenWeatherMap('weather');
		owm.setCoords(location.lat, location.lon);
		const weather = await owm.execute();
		return {
			location,
			weather,
		};
	});
};
