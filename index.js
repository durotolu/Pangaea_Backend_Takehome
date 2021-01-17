const publisher_server = require('./api/publisher-server');
const subscription_server = require('./api/subscription-server');
require('dotenv').config();

const publisher_port = process.env.PUBLISHER_PORT || 5000;
const subscription_port = process.env.SUBCRIPTION_PORT || 6000;

publisher_server.listen(publisher_port, () => {
  console.log(`\n=== Publish server listening on port ${publisher_port} ===\n`);
});

subscription_server.listen(subscription_port, () => {
  console.log(`\n=== Subscription server listening on port ${subscription_port} ===\n`);
});