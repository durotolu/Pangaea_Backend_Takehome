const subscription_server = require('express').Router();

let topicSubscribers = {};

subscription_server.post('/:topic', (req, res) => {
  const postInfo = { ...req.body, topic: req.params.topic };
  console.log(postInfo.topic, postInfo.url);
  const topic = postInfo.topic
  
  async function add(topicToSubcribe, subscriber) {
    if (topicToSubcribe in topicSubscribers) {
      if (topicSubscribers[topicToSubcribe].includes(subscriber)) {
        return 'already subscribed'
      }
      topicSubscribers = await {
        ...topicSubscribers,
        [topicToSubcribe]: [...topicSubscribers[topicToSubcribe], subscriber]
      };
    } else {
      topicSubscribers = await {
        ...topicSubscribers,
        [topicToSubcribe]: [ subscriber ]
      };
    }
    console.log(topicSubscribers)
    return subscriber
  }

  add(topic, postInfo.url)
    .then(url => {
      res.status(201).json({
        url: url,
        topic
      });
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

subscription_server.post('/forward', (req, res) => {
  const postInfo = { ...req.body, topic: req.params.topic };
  console.log(postInfo.topic, postInfo.url);
  const topic = postInfo.topic
  
  async function push(tag, content) {
    topicSubscribers[tag].map((subcriber) => {
      axios.post(subcriber, content)
        .then(response => {
          res.status(201).json(response);
        })
        .catch(error => {
          res.status(500).json(error.message);
        });
    });
    return topicSubscribers[tag].length;
  }

  push(topic, req.body)
    .then(count => {
      res.status(201).json({
        'success': `sent ${req.body} to ${count} subscribers`
      });
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = subscription_server;