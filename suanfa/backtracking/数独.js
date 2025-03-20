/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // 有效性判断
  const isValid = (board, num, x, y) => {
    for (let i = 0; i < 9; i++) {
      if (board[i][y] == num) return false;
    }
    for (let i = 0; i < 9; i++) {
      if (board[x][i] == num) return false;
    }
    // 九宫格验证
    let startX = Math.floor(x / 3) * 3;
    let startY = Math.floor(y / 3) * 3;
    for (let i = startX; i < startX + 3; i++) {
      for (let j = startY; j < startY + 3; j++) {
        if (board[i][j] == num) return false;
      }
    }
    return true;
  };

  const backTracking = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== '.') continue;

        // 对坐标[i, j]填充1-9，确定一个可行方案
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, num, i, j)) {
            board[i][j] = `${num}`;
            if (backTracking()) { // 递归
              return true;
            }
            board[i][j] = `.`;
          }
        }
        return false; // 1-9 所有方案均不成立，此时棋盘无解
      }
    }
    return true; // 棋盘中所有数字填充完毕，递归结束
  }

  backTracking();
  return;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
solveSudoku(board);
console.log(board);

