var Windmill = require("wildmill"),
    jsonfy = require("../utils/jsonfy"),
    config = require("../../config"),
    responses = require("../utils/responses");

var reset = function (req, res) {
  
  var admin = req.headers.admin;
  
  if(!admin || admin != config.admin) {
    return res.sendStatus(401);
  }
  
  this.locals.windmill = new Windmill();
  this.locals.players = {};
  
  res.status(200).send(jsonfy.windmill(this.locals.windmill));
  
};

module.exports = reset;