var config = require("../../config");

var start = function (req, res) {
  
  var admin = req.headers.admin;
  
  if(!admin || admin != config.admin) {
    return res.sendStatus(401);
  }
  
  if(!this.locals.windmill) {
    return res.status(412).send(responses.error.gameNotSet); 
  }
  
  if (!this.locals.players[1] || !this.locals.players[2]) {
    return res.status(409).send(responses.error.missingPlayer);
  }
  
  this.locals.turn = this.locals.windmill.player;  
  
  res.status(200).send();
  
};

module.exports = start;