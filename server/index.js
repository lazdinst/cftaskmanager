const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 1337;
const axios = require('axios');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../client/dist'));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  const preloadedState = {};
  preloadedState.app = {};
  console.log('preloading sate')
  axios.get('http://cfassignment.herokuapp.com/talislazdins/tasks')
    .then(results => {
      let tasks = results.data.tasks || [];
      preloadedState.app.tasks = tasks;
      let id = tasks.length ? tasks[0].id + 1 : 0;
      preloadedState.app.nextTaskId = id;
    })
    .then((events) => {
      res.render('index', {preloadedState});
    })
    .catch((err) => {
      console.log(err);
    });
});


app.listen(port, () => {
  console.log('listening on port ' + port + '!');
});

module.exports.app = app;