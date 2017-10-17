const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1337;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log('listening on port ' + port + '!');
});

module.exports.app = app;