const Chess = require('chess.js');
// console.log(Chess.Chess);
const chess = Chess();

const genRandNum = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Number of pieces on the board
const difficultyNumbers = {
  easy: genRandNum(4, 8),
  medium: genRandNum(8, 16),
  hard: genRandNum(16, 32),
};


const regenerateDifficulties = function () {
  difficultyNumbers.easy = genRandNum(4, 8);
  difficultyNumbers.medium = genRandNum(8, 16);
  difficultyNumbers.hard = genRandNum(16, 32);
}

const getUncapturedPieces = function() {
  const boardRanks = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const boardColumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  let pieces = [];

  for(let i = 0; i < boardColumns.length; i++) {
    for(let j = 0; j < boardRanks.length; j++) {
      pieces.push({[boardColumns[i] + boardRanks[j]]: chess.get(boardColumns[i] + boardRanks[j])});
    }
  }
  

  // remove all of the squares that dont have a piece on them
  pieces = pieces.filter(square => square[Object.keys(square)[0]] !== null);

  //would look something like: { c4: "wQ", e3: "wR", g3: "wN", f4: "wP" }

  let piecesObj = {}

  for(let i = 0; i < pieces.length; i++) {
    let piece = pieces[i];
    piecesObj[Object.keys(piece)[0]] = piece[Object.keys(piece)[0]].color + piece[Object.keys(piece)[0]].type.toUpperCase();
  }


  return piecesObj;
}

const genRandPos = function(difficulty) {
  // difficulty is either a 0, 1, 2 (easy, medium, hard)

  let currentPos = "";
  let pieceNum = 0;
  let uncapturedPieces;

  if(difficulty === 0) {
    pieceNum = difficultyNumbers.easy;
  } else if(difficulty === 1) {
    pieceNum = difficultyNumbers.medium;
  } else {
    pieceNum = difficultyNumbers.hard;
  }

  while(!chess.game_over()) {
    const moves = chess.moves();
    const move = moves[Math.floor(Math.random() * moves.length)];
    chess.move(move);

    // console.log(chess.pgn());
    uncapturedPieces = getUncapturedPieces();

    let uPLength = Object.getOwnPropertyNames(uncapturedPieces);

    if(uPLength.length === pieceNum) {
      currentPos = uncapturedPieces;
    }

  }

  //Possiblity of chess game being over without meeting the piece requirement
  if(chess.game_over() && currentPos === "") {
    currentPos = uncapturedPieces;
  }

  chess.reset();

  regenerateDifficulties();

  return currentPos;
}

export default genRandPos;
