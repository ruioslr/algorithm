/*
  在8×8格的国际象棋上摆放八个皇后，使其不能互相攻击，即任意两个皇后都不能处于同一行、同一列或同一斜线上，问一共有多少种摆法。

*/

function solution() {
  const board = [];
  let total = 0;

}


function push(board, k, total) {
  if(k >= board.length){
    return ++total;
  }

  for(let i = 0; i < board.length; i++){
    board[k][i] = 0;
    if(check(k, i)){
      board[k][i] = 1;
      push(k+1);
    }
  }
}
