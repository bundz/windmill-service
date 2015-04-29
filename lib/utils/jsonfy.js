var jsonfy = {
  windmill: jsonfyWindmill
};

function jsonfyWindmill (windmill) {
  
  var json = {};
  
  json.phase = windmill.phase;
  json.movement = windmill.movement;
  json.player = windmill.player;
  json.state = boardToMatrix(windmill.board);
  
  return json;
}

function boardToMatrix (board) {
  
  var matrix = [];
  
  for(var i = 0; i < 7; i++) {
    
    matrix[i] = [];
    
    for(var j = 0; j < 7; j++) {
      
      matrix[i][j] = null;
      
    }
    
  }
  
  matrix[0][0] = board[0].owner ? board[0].owner : 0;
  matrix[0][3] = board[1].owner ? board[1].owner : 0;
  matrix[0][6] = board[2].owner ? board[2].owner : 0;
  matrix[1][1] = board[3].owner ? board[3].owner : 0;
  matrix[1][3] = board[4].owner ? board[4].owner : 0;
  matrix[1][5] = board[5].owner ? board[5].owner : 0;
  matrix[2][2] = board[6].owner ? board[6].owner : 0;
  matrix[2][3] = board[7].owner ? board[7].owner : 0;
  matrix[2][4] = board[8].owner ? board[8].owner : 0;
  matrix[3][0] = board[9].owner ? board[9].owner : 0;
  matrix[3][1] = board[10].owner ? board[10].owner : 0;
  matrix[3][2] = board[11].owner ? board[11].owner : 0;
  matrix[3][4] = board[12].owner ? board[12].owner : 0;
  matrix[3][5] = board[13].owner ? board[13].owner : 0;
  matrix[3][6] = board[14].owner ? board[14].owner : 0;
  matrix[4][2] = board[15].owner ? board[15].owner : 0;
  matrix[4][3] = board[16].owner ? board[16].owner : 0;
  matrix[4][4] = board[17].owner ? board[17].owner : 0;
  matrix[5][1] = board[18].owner ? board[18].owner : 0;
  matrix[5][3] = board[19].owner ? board[19].owner : 0;
  matrix[5][5] = board[20].owner ? board[20].owner : 0;
  matrix[6][0] = board[21].owner ? board[21].owner : 0;
  matrix[6][3] = board[22].owner ? board[22].owner : 0;
  matrix[6][6] = board[23].owner ? board[23].owner : 0;
  
  return matrix;
}

module.exports = jsonfy;