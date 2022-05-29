import IpApi from '../../../services/ipApi.js';

export default async (fastify, opts) => {
	fastify.get('/', async (request, reply) => {
		const ipapi = new IpApi(request);
		const location = ipapi.execute();

		return location;
	});
};
