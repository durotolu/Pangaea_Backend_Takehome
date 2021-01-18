const publish_router = require('express').Router();
const { default: axios } = require('axios')

publish_router.post('/:topic', (req, res) => {
  const topic =  req.params.topic;
  axios.post(`http://localhost:6000/subscribe/forward`, {
    topic,
    'data': req.body
  })
    .then(message => {
      res.status(200).json(message.data)
    })
    .catch(error => {
      res.status(500).json({
        'error': error.message
      });
    });
});

module.exports = publish_router;