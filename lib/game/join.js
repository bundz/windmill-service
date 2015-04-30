var responses = require("../utils/responses");

var join = function (req, res) {
  
  if (!req.headers.player) {
    return res.status(400).send(responses.error.noPlayer); 
  }
  
  if(!this.locals.windmill) {
    return res.status(412).send(responses.error.gameNotSet); 
  }
  
  if (this.locals.players[1] && this.locals.players[2]) {
    return res.status(409).send(responses.error.fullRoom);
  }
  
  
  if(this.locals.players[1]) {
    this.locals.players[2] = req.headers.player; 
  } else {
    this.locals.players[1] = req.headers.player; 
  }
  
  res.json({message: "Hello " + req.headers.player}).sendStatus(200);
  
};

module.exports = join;