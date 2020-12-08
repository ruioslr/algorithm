/*
  在8×8格的国际象棋上摆放八个皇后，使其不能互相攻击，即任意两个皇后都不能处于同一行、同一列或同一斜线上，问一共有多少种摆法。

*/
// n皇后
function solution(n) {
  const res = [];
  const board = new Array(n).fill('.').map(_ => new Array(n).fill('.'));

  function backTrace(k){
    if(k === n){
      res.push(board.slice())
      return;
    }
    for(let i = 0; i < n; i++){
      if(isOk(k, i)){
        board[k][i] = 'Q';
        backTrace(k+1);
        board[k][i] = '.';
      }
    }
  }

  function isOk(row, col){
    for(let i = 0; i < col; i++){
      if(board[row][i] === 'Q'){
        return false;
      }
    }

    for(let m = row-1, j = col -1; m >= 0, j >= 0; m--, j--){
      if(board[m][j] === 'Q'){
        return false;
      }
    }

    for(let m = row-1, j = col + 1; m >=0, j < n; m--, j++){
      if(board[m][j] === 'Q'){
        return false;
      }
    }

    return true;
  }
}
