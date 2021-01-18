const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const publishRouter = require('../publish/publish-router');

const publish_server = express();

publish_server.use(helmet());
publish_server.use(cors());
publish_server.use(express.json());

publish_server.use('/publish', publishRouter);

publish_server.get('/', (req, res) => {
  res.send({ publish_server: 'Running!'})
});

module.exports = publish_server;