var Windmill = require("wildmill"),
    jsonfy = require("../utils/jsonfy"),
    config = require("../../config"),
    responses = require("../utils/responses");

var state = function (req, res) {
  
  if(!this.locals.windmill) {
    return res.status(409).send(responses.gameNotSet);
  }
  
  var state = { windmill: jsonfy.windmill(this.locals.windmill), players: this.locals.players };
  
  return res.status(200).send(state);
  
};

module.exports = state;