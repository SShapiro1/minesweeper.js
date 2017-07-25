'use strict';

var printBoard = function printBoard(board) {
  console.log('Current Board: ');
  for (var r = 0; r < board.length; r++) {
    console.log(board[r].join(' | ').join('\n'));
  }
};

var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

printBoard(board);

board[0][1] = "1";
board[2][2] = "B";
printBoard(board);

var generatePlayerBoard = function generatePlayerBoard(rows, cols) {
  var board = [];
  for (var r = 0; r < rows; r++) {
    var row = [];
    for (var c = 0; c < cols; c++) {
      var col = ' ';
      row.push(col);
    }
    board.push(row);
  }
  return board;
};

console.log(generatePlayerBoard(5, 5));

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var generateBombBoard = function generateBombBoard(rows, cols, bombs) {
  var board = [];
  for (var r = 0; r < rows; r++) {
    var row = [];
    for (var c = 0; c < cols; c++) {
      var col = ' ';
      row.push(col);
    }
    board.push(row);
  }
  for (var b = 0; b < bombs; b++) {
    var bomb = 'B';
    bombPlaced = false;
    while (!bombPlaced) {
      var bombRow = getRandomInt(0, rows - 1);
      var bombCol = getRandomInt(0, cols - 1);
      if (board[bombRow][bombCol] == ' ') {
        board[bombRow][bombCol] = bomb;
        bombPlaced = true;
      }
    }
  }
  return board;
};

printBoard(generateBombBoard(5, 5, 3));