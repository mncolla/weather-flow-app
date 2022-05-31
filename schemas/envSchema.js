export default {
	type: 'object',
	required: ['PORT'],
	properties: {
		PORT: {
			type: 'string',
			default: 3000,
		},
		OWM_API_KEY: {
			type: 'string',
			default: null,
		},
	},
};
