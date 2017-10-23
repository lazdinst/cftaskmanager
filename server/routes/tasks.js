const express = require('express');
const router = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');

router.get('/', (req, res) => {
  res.send('hello world');
});

router.post('/', (req, res) => {
  const data = req.body.data;
  axios.post('http://cfassignment.herokuapp.com/talislazdins/tasks', data)
  .then(results => {
    console.log('SERVER: Post success');
  })
  .catch((err)=>{
    console.log('SERVER: POST ERROR');
  });
});

module.exports = router;