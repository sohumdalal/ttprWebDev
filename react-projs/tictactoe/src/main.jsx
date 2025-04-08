import { createRoot } from 'react-dom/client'
import './index.css'
import Board from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Board rowSize = {3} columnsize = {3}/>
)
