const express = require('express');
const router = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');
const axiosRetry = require('axios-retry'); 

router.get('/', (req, res) => {
  const preloadedState = {};
  preloadedState.app = {};
  axiosRetry(axios, { retries: 3 });
  axios.get('http://cfassignment.herokuapp.com/talislazdins/tasks')
    .then(results => {
      preloadedState.app.title = results.data.tasks.title;
      let tasks = results.data.tasks.tasks || [];
      preloadedState.app.tasks = tasks;
      let id = tasks.length ? tasks[0].id + 1 : 0;
      preloadedState.app.nextTaskId = id;
    })
    .then(() => {
      preloadedState.app.injectedState = true;
      res.render('index', {preloadedState});
    })
    .catch((err) => {
      console.log('FAILED TO INJECT PRELOADED STATE');
      preloadedState.app.injectedState = false;
      res.render('index', {preloadedState});
    });
});

router.post('/', (req, res) => {
  const data = req.body;
  axios.post('http://cfassignment.herokuapp.com/talislazdins/tasks', data)
  .then(results => {
    console.log('SERVER: Post success');
    res.end();
  })
  .catch((err)=>{
    console.log('SERVER: POST ERROR');
    res.end();
  });
});

module.exports = router;