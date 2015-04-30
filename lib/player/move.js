var responses = require("../utils/responses"),
    windmillfy = require("../utils/windmillfy");

var move = function (req, res) {
  
  if (!req.headers.player) {
    return res.status(400).send(responses.error.noPlayer); 
  }
  
  if (!this.locals.windmill) {
    return res.status(409).send(responses.gameNotSet);
  }
  
  if (!this.locals.windmill.phase == "end") {
    return res.status(410).send();
  }
  
  if (this.locals.players[this.locals.turn] != req.headers.player) {
    return res.status(401).send(responses.notYourTurn);
  }
  
  var board = windmillfy.matrix(req.body);
  
  if (board.error) {
    return res.status(400).send(responses.malformedInput);
  }
  
  var response = this.locals.windmill.changeState(board);
  
  if (response && response.error) {
    return res.status(400).send(response.message); 
  }
  
  this.locals.turn = this.locals.windmill.player;
  
  res.status(200).send();
  
};

module.exports = move;