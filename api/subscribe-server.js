const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const subscribeRouter = require('../subscribe/subscribe-router');

const subscribe_server = express();

subscribe_server.use(helmet());
subscribe_server.use(cors());
subscribe_server.use(express.json());

subscribe_server.use('/subscribe', subscribeRouter);

subscribe_server.get('/', (req, res) => {
  res.send({ subscribe_server: 'Running!'})
});

module.exports = subscribe_server;