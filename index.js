require('dotenv').config();

const publish_server = require('./api/publish-server');
const subscribe_server = require('./api/subscribe-server');
const sample_server = require('./sample/sample-server');

const publish_port = process.env.PUBLISH_PORT || 5000;
const subscribe_port = process.env.SUBSCRIBE_PORT || 6000;
const sample_port = process.env.SAMPLE_PORT || 6000;

publish_server.listen(publish_port, () => {
  console.log(`\n=== Publish server listening on port ${publish_port} ===\n`);
});

subscribe_server.listen(subscribe_port, () => {
  console.log(`\n=== Subscribe server listening on port ${subscribe_port} ===\n`);
});

sample_server.listen(sample_port, () => {
  console.log(`\n=== sample server listening on port ${sample_port} ===\n`);
});