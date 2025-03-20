/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [],
        chessboard = new Array(n);
    // 棋盘初始化
    for(let i = 0;i < n;i ++) {
        chessboard[i] = new Array(n).fill('.');
    }
    
    // 判断当前坐标合法性，同一行、同一列、同一斜线不能有Q
  const isValid = (chessboard, x, y) => {
        for(let i = 0;i < n;i ++) {
            for(let j = 0;j < n;j ++) {
                if(chessboard[i][y] === 'Q' 
                    || chessboard[x][j] === 'Q' 
                    || i + j === x + y && chessboard[i][j] === 'Q'
                    || i - j === x - y && chessboard[i][j] === 'Q') 
                    return false;
            }
        }
        return true;
    }

    // 递归过程
    const dfs = (chessboard, x) => {
        // 终止条件
        if(x === n) {
            const solve = [];
            for(let i = 0;i < n;i ++) {
                solve.push(chessboard[i].join(''));
            }
            res.push(solve);
            return ;
        }

      for (let y = 0; y < n; y++) {
            if(isValid(chessboard, x, y)) {
                chessboard[x][y] = 'Q';
                dfs(chessboard, x + 1);
                chessboard[x][y] = '.';
            }
        }
    }

    dfs(chessboard, 0);
    return res;
};

const n = 8;
console.log(solveNQueens(n));
