import { Fastify } from 'fastify';
const fastify = Fastify();

fastify.get('/', async (req, rep) => 'Hello world get');
fastify.post('/', async (req, rep) => 'Hello world post');
fastify.delete('/', async (req, rep) => 'Hello world delete');
fastify.put('/', async (req, rep) => 'Hello world put');

fastify.listen(3000, () => console.log('Running in 3000 port'));
