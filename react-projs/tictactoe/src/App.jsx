import { useState } from 'react'
// import './App.css'


function Board({rowSize, columnsize}) {

  const myArray = [...Array(rowSize)]
  return (
    <div>
      {
        myArray.map((r) => (
          <Row column = {columnsize} index={r} key={r} />
        ))}
    </div>
  )
}

function Row({column}) {
  const myArray = [...Array(column)]
  return (
    <div style={{ display: 'flex' }}>
      {myArray.map((i) => (
        <Box index={i} key={i} />
      ))}
    </div>
  )
}

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

export default Board



//then lets construct check for winner
//then lets redo the board to have state at the top most level
