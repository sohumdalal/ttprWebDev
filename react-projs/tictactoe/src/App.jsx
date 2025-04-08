import { useState } from 'react'
import './App.css'


const sizeOfBoard = 3


function Board() {

  const myArray = [...Array(sizeOfBoard)]
  return (
    <div>
      {
        myArray.map((r) => (
          <Row size={sizeOfBoard} index={r} key={r} />
        ))}
    </div>
  )
}

//sample Board here


function Row({ size }) {
  const myArray = [...Array(size)]
  return (
    <div style={{ display: 'flex' }}>
      {myArray.map((i) => (
        <Box index={i} key={i} />
      ))}
    </div>
  )
}

//sample row here


function Box({ index }) {
  let [box, setBox] = useState("-")

  const handleClick = () => {
    if (box === 'X') setBox('O')
    else if (box === 'O') setBox('X')
    else setBox('X')
  }


  return (
    <button style={{
      border: "solid",
      color: "white",
      height: "100px",
      width: "100px",
      textAlign: 'center',
      fontSize: "30px"
    }}
      onClick={handleClick}
      key={index}
      index={index}
    >
      {box}
    </button>
  )
}

//sample box here

export default Board





//show them the board build first
//then lets construct check for winner
//then lets redo the board to have state at the top most level
