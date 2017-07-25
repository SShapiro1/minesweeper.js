const printBoard = board => {
  console.log('Current Board: ');
  for (let r = 0; r < board.length; r++) {
    console.log(board[r].join(' | '));
}
};

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);


board[0][1] = "1";
board[2][2] = "B";
printBoard(board);

const generatePlayerBoard = (rows, cols) => {
  let board = [];
  for (let r = 0; r < rows; r++) {
    let row = [  ];
    for (let c = 0; c < cols; c++) {
      let col = ' '
      row.push(col);
    }
    board.push(row);
  }
  return board
};

console.log(generatePlayerBoard(5,5));

function getRandomInt(min, max) {
  return Math.floor(Math.random() *
  (max - min + 1)) + min; }


const generateBombBoard = (rows, cols, bombs) => {
  let board = [ ];
  for (let r = 0; r < rows; r++) {
    let row = [  ];
    for (let c = 0; c < cols; c++) {
      let col = ' '
      row.push(col);
    }
    board.push(row);
  }
    for (let b = 0; b < bombs; b++) {
      let bomb = 'B'
      bombPlaced = false;
      while (!bombPlaced){
        let bombRow = getRandomInt(0, rows - 1);
        let bombCol = getRandomInt(0, cols - 1);
        if (board[bombRow][bombCol] == ' ' ) {
          board[bombRow][bombCol]= bomb;
          bombPlaced = true;
        }
      }
    }
 return board
};

printBoard(generateBombBoard(5,5,3));
