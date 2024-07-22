import React from 'react'
import Play from './components/Play.tsx'
import Display from './components/Display.tsx'

const App:React.FC = () => {


  return (
    <>
    <div className="App">
      <h1>Welcome to Tic-Tac-Toe</h1>
      <Play />
      <Display />
      </div>
      
    </>
  )
}

export default App