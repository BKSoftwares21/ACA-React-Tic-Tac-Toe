import React from 'react';
import { Link } from 'react-router-dom';
import Play from './components/Play.tsx'



const App:React.FC = () => {


  return (
    <>
    <div className="App">
      <h1>Welcome to Tic-Tac-Toe</h1>
      <Play />
  
      </div>
      
    </>
  )
}

export default App