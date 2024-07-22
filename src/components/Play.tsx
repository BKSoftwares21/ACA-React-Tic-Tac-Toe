import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Play.css';

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
type Player = 'X' | 'O' | null;


const Play: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [player, setPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  const navigate = useNavigate();

  const checkWinner = (newBoard: Player[]) => {
    for (const [a, b, c] of winningCombinations) {
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index]) return;

    const newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);

    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      navigate('/winner', { state: { winner: newWinner } });
    } else if (newBoard.every(cell => cell)) {
      setIsDraw(true);
      navigate('/winner', { state: { draw: true } });
    } else {
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const renderCell = (index: number) => (
    className={`cell ${board[index]}`}
      onClick={() => handleClick(index)}
      key={index}
    >
      {board[index]}
    </div>
  );

  return (
    <div className="game">
      <div className="grid">
        {board.map((_, index) => renderCell(index))}
      </div>
      {!winner && !isDraw && <div className="status">Next player: {player}</div>}
    </div>
  );
};

export default Play;
