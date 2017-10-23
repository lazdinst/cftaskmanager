const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const axios = require('axios');
const axiosRetry = require('axios-retry'); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../client/dist'));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use('/api', express.Router()
.use('/tasks', require('./routes/tasks'))
);

app.get('*', (req, res) => {
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

module.exports = app;