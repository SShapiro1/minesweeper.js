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

const generatePlayerBoard = (numberOfRows, numberofColumns) => {
  let board = [5,5];
  for (let row = 0; row < numberOfRows.length; row++) {
    for (let columns = 0; columns < numberOfColumns.length; columns++);
  row.push(' '); }
  columns.push(' ');
  return board();
};

console.log(generatePlayerBoard(board));
