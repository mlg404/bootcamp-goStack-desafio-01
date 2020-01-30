const express = require('express');
const routes = require('./routes')

const server = express();

function requestCount(req, res, next){
  console.count('requests');
  return next()
}

server.use(express.json());
server.use(requestCount)
server.use(routes);

server.listen(3000, ()=>console.log('Listening...'));