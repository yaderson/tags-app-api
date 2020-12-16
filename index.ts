
import app from './app' 

import fastify from 'fastify';
const server = fastify({logger:true});

server.register(app)

server.listen(process.env.PORT || 3000,'0.0.0.0', (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})