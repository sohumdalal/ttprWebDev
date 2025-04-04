import { useState } from 'react'
import './App.css'


// const generateBoard = (size) => {
//   const newBoard = []
// for(let i = 0; i < size; i++) {
//   newBoard.push([...Array(size)])
// }
// return newBoard
// }


const sizeOfBoard = 3


//check for winner function

function Board () {
  const myArray = [...Array(sizeOfBoard)]
  return (
    <div>
      {
        myArray.map((r)=> (
          <Row size  = {sizeOfBoard} index = {r} key = {r} />
        ))}
    </div>
  )
}

function Row({size}) {
  const myArray = [...Array(size)]
  return (
    <div style = {{display: 'flex'}}>
     {myArray.map((i) => (
        <Box index={i} key = {i}/>
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
      index = {index}
    >
      {box}
    </button>
  )
}




export default Board
