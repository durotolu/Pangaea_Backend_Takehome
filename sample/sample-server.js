const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const sampleRouter = require('./sample-router');

const sample_server = express();

sample_server.use(helmet());
sample_server.use(cors());
sample_server.use(express.json());

sample_server.use('/sample', sampleRouter);

sample_server.get('/', (req, res) => {
  res.send({ sample_server: 'Running!'})
});

module.exports = sample_server;