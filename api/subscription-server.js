const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const subscriptionRouter = require('../subscription/subscription-router');

const subscription_server = express();

subscription_server.use(helmet());
subscription_server.use(cors());
subscription_server.use(express.json());

subscription_server.use('/subscription', subscriptionRouter);

subscription_server.get('/', (req, res) => {
  res.send({ subscription_server: 'Running!'})
});

module.exports = subscription_server;