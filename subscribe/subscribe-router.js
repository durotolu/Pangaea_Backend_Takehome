const { default: axios } = require('axios');

const subscribe_server = require('express').Router();

let topicSubscribers = {};

subscribe_server.post('/topic/:topic', (req, res) => {
  const postInfo = { ...req.body, topic: req.params.topic };
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
        [topicToSubcribe]: [subscriber]
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

subscribe_server.post('/forward', (req, res) => {

  async function pushToSubscribers(tag, content) {
    console.log('topicSubscribers[tag]', topicSubscribers[tag])
    
    if (topicSubscribers[tag]) {
      let axiosArray = []
      topicSubscribers[tag].map((subcriber) =>
        axiosArray = [
          ...axiosArray,
          axios.post(subcriber, content)
        ]
      );
  
      console.log('axiosArray', axiosArray)
  
      const responsesArray = []

      axios.all(axiosArray)
        .then(axios.spread((...responses) => {
          responses.forEach(result => {
            console.log('result.data', result.data)
            responsesArray.push(result.data)
          })
          console.log('submitted all axios calls');
        }))
        .then(() => {
          res.status(201).json({
            'success': `sent ${tag} to ${responsesArray.length} subscribers`
          });
        })
        .catch(error => {
          res.status(500).json(error.message);
        })
    } else {
      res.status(404).json('no subscriber found')
    }
  }

  pushToSubscribers(req.body.topic, req.body.data)
});

module.exports = subscribe_server;