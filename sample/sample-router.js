const sample_router = require('express').Router();

sample_router.post('/', (req, res) => {
  console.log(req.body, 'sample');
  res.status(200).json({
    'gotten': req.body
  })
});

module.exports = sample_router;