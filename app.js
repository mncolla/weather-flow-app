import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fastify from 'fastify';
import autoload from '@fastify/autoload';
import fastifyEnv from '@fastify/env';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = fastify({ logger: true, trustProxy: true });

const schema = {
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

const options = {
	confKey: 'config',
	dotenv: true,
	schema,
	data: process.env,
};

const start = async () => {
	app.register(autoload, {
		dir: join(__dirname, 'routes/v1'),
		options: Object.assign({}, { prefix: 'v1' }),
	});

	app.register(fastifyEnv, options).ready(err => {
		if (err) console.error(err);
	});
	await app.after();
};

start();

// Fire up the server
(async () => {
	try {
		await app.ready();
		await app.listen(3000);
	} catch (error) {
		app.log.error(error);
		process.exit(1);
	}
})();
