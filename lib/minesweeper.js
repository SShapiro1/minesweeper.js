'use strict';

/*const printBoard = board => {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);

board[0][1] = "1";
board[2][2] = "B";
printBoard(board);*/

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberofColumns) {
  var board = [5, 5];
  for (var row = 0; row < numberOfRows.length; row++) {
    for (var _columns = 0; _columns < numberOfColumns.length; _columns++) {}
    row.push(' ');
  }
  columns.push(' ');
  return board();
};

console.log(generatePlayerBoard(board));