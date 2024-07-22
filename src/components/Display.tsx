import React from 'react'


const Display:React.FC = () => {
    const location = useLocation<{ board: (string | null)[] }>();
    const { board } = location.state || { board: Array(9).fill(null) };
    
    return (
    <div>
      <div className="display">
      <h2>Moves Display</h2>
      <div className="grid">
        {board.map((cell, index) => (
          <div className={`cell ${cell}`} key={index}>
            {cell}
          </div>
        ))}
      </div>
      <Link to="/" className="navigate">Back to Game</Link>
    </div>
    </div>
  )
}

export default  Display;