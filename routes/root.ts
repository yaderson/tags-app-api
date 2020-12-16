import { FastifyInstance } from 'fastify';

export default async function(fastify: FastifyInstance, opts: any){
    fastify.get('/', async (request, reply) => {
        
        reply.send({
            message: 'Hello from tags-api-ap'
        })
    })
}