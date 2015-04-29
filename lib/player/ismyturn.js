var Windmill = require("wildmill"),
    jsonfy = require("../utils/jsonfy"),
    config = require("../../config"),
    responses = require("../utils/responses");

var state = function (req, res) {
  
  
  if (!req.headers.player) {
    res.status(400).send(responses.error.noPlayer); 
  }
  
  if (!this.locals.windmill) {
    res.status(409).send(responses.gameNotSet);
  }
  
  if (!this.locals.windmill.phase == "end") {
    res.status(410).send();
  }
  
  var response = jsonfy.windmill(this.locals.windmill);
  
  if (this.locals.players[response.player] != req.headers.player) {
    res.status(412).send();
  }
  
  res.status(200).send(response);
  
};

module.exports = state;