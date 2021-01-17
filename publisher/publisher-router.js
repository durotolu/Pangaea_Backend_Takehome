const publisher_router = require('express').Router();

publisher_router.post('/:topic', (req, res) => {
  const topic =  req.params.topic;
  console.log(req.body);
  axios.post(`http://localhost:5000/subscribe/foward`, {
    topic,
    'data': req.body
  })
    .then(message => {
      res.status(200).json(message)
    })
    .catch(error => {
      res.status(500).json({
        'error': error.message
      });
    });
});

module.exports = publisher_router;