const router = require('express').Router();

router.post('/:topic', (req, res) => {
  const postInfo = { ...req.body, topic: req.params.topic };
  console.log(postInfo.topic, postInfo.msg);
});

module.exports = router;