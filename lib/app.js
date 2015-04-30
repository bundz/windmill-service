var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/game/set', require("./game/set").bind(app));
app.post('/game/join', require("./game/join").bind(app));
app.post('/game/start', require("./game/start").bind(app));
app.post('/game/reset', require("./game/reset").bind(app));
app.get('/game/state', require("./game/state").bind(app));

app.get('/player/ismyturn', require("./player/ismyturn").bind(app));
app.post('/player/move', require("./player/move").bind(app));


module.exports = app;
