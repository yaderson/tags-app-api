import Autoload from  'fastify-autoload';
import { FastifyInstance} from 'fastify';
import helmet from 'fastify-helmet';
import fastifySocket from 'fastify-websocket'
import dotenv from 'dotenv';
import * as path from 'path';

dotenv.config()


export default async function app(fastify: FastifyInstance, opts: any){
    //Helmet provide default response headers
    //fastify.register(helmet);
    fastify.register(fastifySocket, {
        handle,
        options: {
            maxPayload: 1048576, // we set the maximum allowed messages size to 1 MiB (1024 bytes * 1024 bytes)
            path: '/tags', // we accept only connections matching this path e.g.: ws://localhost:3000/fastify
        }
    })
    function handle (conn) {
        console.log(conn)
        conn.pipe(conn) // creates an echo server
    }
      
    //Do not touch this code

    //load plugins form ./plugins


    //Load routes form ./routes folder
    
    fastify.register(Autoload,{
        dir: path.join(__dirname, 'routes'),
        options: opts
    });

}