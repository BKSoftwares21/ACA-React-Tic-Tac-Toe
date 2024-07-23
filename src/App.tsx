import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Play from './components/Play'
import Winner from './components/Winner';


const App:React.FC = () => {


  return (
    <>
    <h1>Tic-Tac-Toe</h1>
    <Router>
    <Routes>
      <Route path="/" element={<Play />} />
      <Route path="/winner" element={<Winner />} />
    </Routes>
  </Router>
      
    </>
  )
}

export default App