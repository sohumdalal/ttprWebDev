import { useState } from 'react'
import './App.css'

function App() {
  const myNumArray = [...Array(10)].fill(1)
  const [count, setCount] = useState([...myNumArray])


  const handleClick = (index) => {
    setCount((prevCounts) => {
      const newCounts = [...prevCounts]
      newCounts[index] += 1
      return newCounts
    })
  }

  return (
    <div>
      {myNumArray.map((num, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}>
          {count[i]}
        </button>
      ))}
    </div>
  )
}



export default App
