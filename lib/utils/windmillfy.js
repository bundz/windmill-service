var Windmill = require("wildmill");

module.exports = {
 matrix: windmillfyMatrix 
};

function windmillfyMatrix (matrix) {
 
  var windmill = new Windmill();
  
  windmill.board[0].owner = matrix[0][0] == 0 ? null : matrix[0][0];
  windmill.board[1].owner = matrix[0][3] == 0 ? null : matrix[0][3];
  windmill.board[2].owner = matrix[0][6] == 0 ? null : matrix[0][6];
  windmill.board[3].owner = matrix[1][1] == 0 ? null : matrix[1][1];
  windmill.board[4].owner = matrix[1][3] == 0 ? null : matrix[1][3];
  windmill.board[5].owner = matrix[1][5] == 0 ? null : matrix[1][5];
  windmill.board[6].owner = matrix[2][2] == 0 ? null : matrix[2][2];
  windmill.board[7].owner = matrix[2][3] == 0 ? null : matrix[2][3];
  windmill.board[8].owner = matrix[2][4] == 0 ? null : matrix[2][4];
  windmill.board[9].owner = matrix[3][0] == 0 ? null : matrix[3][0];
  windmill.board[10].owner = matrix[3][1] == 0 ? null : matrix[3][1];
  windmill.board[11].owner = matrix[3][2] == 0 ? null : matrix[3][2];
  windmill.board[12].owner = matrix[3][4] == 0 ? null : matrix[3][4];
  windmill.board[13].owner = matrix[3][5] == 0 ? null : matrix[3][5];
  windmill.board[14].owner = matrix[3][6] == 0 ? null : matrix[3][6];
  windmill.board[15].owner = matrix[4][2] == 0 ? null : matrix[4][2];
  windmill.board[16].owner = matrix[4][3] == 0 ? null : matrix[4][3];
  windmill.board[17].owner = matrix[4][4] == 0 ? null : matrix[4][4];
  windmill.board[18].owner = matrix[5][1] == 0 ? null : matrix[5][1];
  windmill.board[19].owner = matrix[5][3] == 0 ? null : matrix[5][3];
  windmill.board[20].owner = matrix[5][5] == 0 ? null : matrix[5][5];
  windmill.board[21].owner = matrix[6][0] == 0 ? null : matrix[6][0];
  windmill.board[22].owner = matrix[6][3] == 0 ? null : matrix[6][3];
  windmill.board[23].owner = matrix[6][6] == 0 ? null : matrix[6][6];
  
  return windmill.board;
  
}