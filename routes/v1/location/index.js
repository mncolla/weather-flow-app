import { getLocation } from '../../../services/ipApi.js';

export default async (fastify, opts) => {
	fastify.get('/', async (request, reply) => {
		const ip = (
			request.headers['x-forwarded-for'] ||
			request.socket.remoteAddress ||
			''
		)
			.split(',')[0]
			.trim();
		// TODO: Enviar ip en getLocation
		const location = await getLocation('186.57.170.113');
		return location;
	});
};
