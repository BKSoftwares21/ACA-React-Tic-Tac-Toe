import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Play from './components/Play.tsx'
import Winner from './components/Winner.tsx';


const App:React.FC = () => {


  return (
    <>
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