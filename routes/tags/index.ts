import { Socket } from 'dgram';
import { FastifyInstance } from 'fastify';

export default async function name(fastify: FastifyInstance) {
    interface queryString {
        name: string
    }
    fastify.get<{ 
        Querystring: queryString,
    }>('/',{ websocket: true },async (connection, reply) => {
        connection.socket.on('message', message => {
            message = JSON.parse(message)
            switch(message.type){
                case 'ADD':
                    sendToAll(message)
                    break
                case 'DELETE':
                    sendToAll(message)
                    break
            }
        })
    })

    function sendToAll(data){
        fastify.websocketServer.clients.forEach(client => {
            if (client.readyState === 1) {
              client.send(JSON.stringify(data))
            }
        })
    }
}