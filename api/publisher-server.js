const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const publisherRouter = require('../publisher/publisher-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/publish', publisherRouter);

server.get('/', (req, res) => {
  res.send({ server: 'Running!'})
});

module.exports = server;