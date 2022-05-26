import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fastify from 'fastify';
import autoload from '@fastify/autoload';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = fastify();

app.register(autoload, {
	dir: join(__dirname, 'routes/v1'),
	options: Object.assign({}, { prefix: 'v1' }),
});

app.listen(3000);
