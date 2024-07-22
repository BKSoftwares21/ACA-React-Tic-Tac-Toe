import React, { useState } from 'react';
import './Play.css';

type Player = 'X' | 'O' | null;
type Board = Player[];
type Winner = Player | 'Draw' | null;

const Play: React.FC = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [player, setPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Winner>(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (newBoard.every(cell => cell)) {
      setWinner('Draw');
    } else {
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const calculateWinner = (board: Board): Winner => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

  const renderCell = (index: number) => (
    <div className={`cell ${board[index]}`} onClick={() => handleClick(index)} key={index}>
      {board[index]}
    </div>
  );

  return (
    <div className="game">
      <div className="grid">
        {board.map((_, index) => renderCell(index))}
      </div>
      <div className="status">
        {winner
          ? winner === 'Draw'
            ? "It's a draw!"
            : `Player ${winner} has won!`
          : `Player ${player}'s turn`}
      </div>
      <button className="reset" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Play;
