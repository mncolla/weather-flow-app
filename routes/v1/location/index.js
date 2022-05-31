import IpApi from '../../../services/ipApi.js';
import locationSchema from '../../../schemas/locationSchema.js';

export default async (fastify, opts) => {
	// schemas are used to serialization
	// only expressed atributtes allow
	fastify.get('/', { schema: locationSchema }, async (request, reply) => {
		const ipapi = new IpApi(request);
		const location = ipapi.execute();

		return location;
	});
};
