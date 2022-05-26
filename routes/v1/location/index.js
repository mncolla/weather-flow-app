import { getLocation } from '../../../services/ipApi.js';

export default async (fastify, opts) => {
	fastify.get('/', async (request, reply) => {
		return (
			request.headers['x-forwarded-for'] || request.connection.remoteAddress
		);
	});
};
