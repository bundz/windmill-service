var Windmill = require("wildmill"),
    jsonfy = require("../utils/jsonfy"),
    config = require("../../config"),
    responses = require("../utils/responses");

var state = function (req, res) {
  
  if(!this.locals.windmill) {
    return res.status(409).send(responses.gameNotSet);
  }
  
  return res.status(200).send(jsonfy.windmill(this.locals.windmill));
  
};

module.exports = state;