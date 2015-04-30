var Windmill = require("wildmill"),
    jsonfy = require("../utils/jsonfy"),
    config = require("../../config"),
    responses = require("../utils/responses");

var set = function (req, res) {
  
  var admin = req.headers.admin;
  
  if(!admin || admin != config.admin) {
    return res.sendStatus(401);
  }
  
  if(this.locals.windmill) {
    return res.status(409).send(responses.gameRunning);
  }
  
  this.locals.windmill = new Windmill();
  this.locals.players = {};
  this.locals.turn = 0;
  
  res.status(200).send(jsonfy.windmill(this.locals.windmill));
  
};

module.exports = set;