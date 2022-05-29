import OpenWeatherMap from '../../../services/openWeatherMap.js';
import IpApi from '../../../services/ipApi.js';

export default async (fastify, opts) => {
	fastify.get('/:city', async (request, reply) => {
		const owm = new OpenWeatherMap('forecast');
		owm.setCity(request.params.city);
		const forecast = await owm.execute();
		return forecast;
	});

	fastify.get('/', async (request, reply) => {
		const ipapi = new IpApi(request);
		const location = await ipapi.execute();
		const owm = new OpenWeatherMap('forecast');
		owm.setCoords(location.lat, location.lon);
		const forecast = await owm.execute();
		return {
			location,
			forecast,
		};
	});
};
