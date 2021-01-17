const subscription_server = require('express').Router();

let arr = [];

subscription_server.post('/:topic', (req, res) => {
  const postInfo = { ...req.body, topic: req.params.topic };
  console.log(postInfo.topic, postInfo.url);
  const topic = postInfo.topic
  
  async function add(subscriber) {
    arr = await [...arr, subscriber];
    console.log(arr)
    return subscriber;
  }

  add(postInfo.url)
    .then(url => {
      res.status(201).json({
        url,
        topic
      });
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = subscription_server;