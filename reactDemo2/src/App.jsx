import './App.css'
import { useState } from 'react';

function App() {
  const myNumArray = [...Array(10)].fill(0)

  const [count, setCount] = useState([...myNumArray]);

  const handleClick = (index) => {
    setCount((prevCounts) => {
        const newCounts = [...prevCounts]
        newCounts[index] += 1;
        return newCounts
    })
  }
  return (
      <div>
        {myNumArray.map((num, index) => (
          <button 
          className = 'button'
          key={index} 
          onClick={() => handleClick(index)}>
            {count[index]}
          </button>
        ))}
      </div>
  );
}
export default App



