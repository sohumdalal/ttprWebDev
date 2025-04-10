import { useState } from 'react'
// import './App.css'


function checkForWinner(board) {
  const size = board.length

  //5 cases:
  //check rows:
  for (let row = 0; row < size; row++) {
    if (board[row].every(cell => cell === board[row][0] && cell !== "-")) {
      return board[row][0];
    }
  }



  //check columns:
  for (let col = 0; col < size; col++) {
    let column = board.map(row => row[col])
    if (column.every(cell => cell === column[0] && cell !== "-")) {
      return column[0];
    }
  }



  //check main diagonal:
  let mainDiagonal = [];
  for (let i = 0; i < size; i++) {
    mainDiagonal.push(board[i][i]);
  }
  if (mainDiagonal.every(cell => cell === mainDiagonal[0] && cell !== "-")) {
    return mainDiagonal[0];
  }



  // Check anti-diagonal
  let antiDiagonal = [];
  for (let i = 0; i < size; i++) {
    antiDiagonal.push(board[i][size - 1 - i]);
  }
  if (antiDiagonal.every(cell => cell === antiDiagonal[0] && cell !== "-")) {
    return antiDiagonal[0];
  }

  //no winner
  return null;
}
const sizeOfBoard = 3
function Board() {

  const emptyBoard = Array(sizeOfBoard).fill(null).map(() => Array(sizeOfBoard).fill("-"))
  const [board, setBoard] = useState(emptyBoard)
  const [currentPlayer, setCurrentPlayer] = useState("X")

  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] !== "-") return // prevents switching of existing squares

    const updatedBoard = board.map((row, r) =>
      row.map((cell, c) => {
        if (r === rowIndex && c === colIndex) {
          return currentPlayer;
        } else {
          return cell;
        }
      })
    );

    setBoard(updatedBoard)

    const winner = checkForWinner(updatedBoard);
    if (winner) alert(`Winner is ${winner}`)

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
  }

  return (
    <div>
      <h2>Current Player: {currentPlayer}</h2>
      {
        board.map((row, r) => (
          <Row
            rowIndex={r}
            key={r}
            row={row}
            onBoxClick={handleClick}
          />
        ))
      }
    </div>
  )
}

function Row({ rowIndex, onBoxClick, row }) {
  return (
    <div style={{ display: 'flex' }}>

      {row.map((box, columnIndex) => (
        <Box index={columnIndex}
          key={columnIndex}
          value={box}
          onClick={() => onBoxClick(rowIndex, columnIndex)} />
      ))}

    </div>
  )
}

function Box({ value, onClick }) {
  return (
    <button style={{
      border: "solid",
      color: "white",
      height: "100px",
      width: "100px",
      textAlign: 'center',
      fontSize: "30px"
    }}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Board
