const router = require('express').Router();

router.post('/:topic', (req, res) => {
  const postInfo = { ...req.body, topic: req.params.topic };
  console.log(postInfo.topic, postInfo.msg);
  axios.post(`http://localhost:5000/subscribe`)
    .then(message => {
      res.status(200).json(message)
    })
    .catch(error => {
      res.status(500).json({
        'error': error.message
      });
    });
});

module.exports = router;