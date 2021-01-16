const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const publishRouter = require('../publish/publish-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/publish', publishRouter);

server.get('/', (req, res) => {
  res.send({ server: 'Running!'})
});

module.exports = server;