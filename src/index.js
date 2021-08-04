module.exports = function solveSudoku (matrix){
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] == 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValid(matrix, i, j, k)) {
            matrix[i][j] = k;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(matrix, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + i % 3;
    if (matrix[row][i] == k || matrix[i][col] == k || matrix[m][n] == k) {
      return false;
    }
  }
  return true;
}

/*console.log(sodokoSolver([
  [6, 5, 0, 7, 3, 0, 0, 8, 0],
  [0, 0, 0, 4, 8, 0, 5, 3, 0],
  [8, 4, 0, 9, 2, 5, 0, 0, 0],
  [0, 9, 0, 8, 0, 0, 0, 0, 0],
  [5, 3, 0, 2, 0, 9, 6, 0, 0],
  [0, 0, 6, 0, 0, 0, 8, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 6],
  [0, 0, 7, 0, 0, 0, 0, 5, 0],
  [1, 6, 5, 3, 9, 0, 4, 7, 0]
]));
function solveSudoku (matrix){
  while (!isSolved(matrix)) {
    for (x = 0; x < 9; x++) {
      for (y = 0; y < 9; y++) {
        matrix[y][x] = digit(matrix, x, y);
      }
    }
  }
  return matrix;
}

function digit(matrix, x, y) {
  if (matrix[y][x] !== 0) return matrix[y][x];

  let row = matrix[y];
  let column = columnArray(matrix, x);
  let grid = gridArray(matrix, x, y);
  
  let knowns = row.concat(column, grid);
  
  let possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(item => knowns.indexOf(item) === -1);

  return possibilities.length == 1 ? possibilities[0] : 0;
}

const columnArray = (matrix, idx) => matrix.map(row => row[idx]);
const sum = arr => arr.reduce((a, n) => a + n, 0);
const winningRow = arr => sum(arr.map(num => Math.pow(2, num - 1))) == 511;
const isSolved = matrix => matrix.filter(row => !winningRow(row)).length === 0;

function gridArray(matrix, x, y) {
  x = Math.floor(x / 3) * 3;
  y = Math.floor(y / 3) * 3;
  
  var arr = [];
  
  for (i = x; i < x + 3; i++) {
    for (j = y; j < y + 3; j++) {
      arr.push(matrix[j][i]);
    }
  }
  
  return arr;
}*/
