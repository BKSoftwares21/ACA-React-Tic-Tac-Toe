import React, { useState } from 'react';
import './Play.css';

type Player = 'X' | 'O' | null;

const Play: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [player, setPlayer] = useState<Player>('X');
  const handleClick = (index: number) => {
    if (board[index]) return;

    const newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);

    setPlayer(player === 'X' ? 'O' : 'X');
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
