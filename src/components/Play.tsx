import React, { useState } from 'react';
import './Play.css';

type Player = 'X' | 'O' | null;

const Play: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));

  const handleClick = (index: number) => {
    const newBoard = board.slice();
    newBoard[index] = newBoard[index] ? null : 'X'; // Toggle between null and 'X' for simplicity
    setBoard(newBoard);
  };

  const renderCell = (index: number) => (
    <div className={`cell ${board[index]}`} onClick={() => handleClick(index)} key={index}>
      {board[index]}
    </div>
  );

  return (
    <div className="grid">
      {board.map((_, index) => renderCell(index))}
    </div>
  );
};

export default Play;
