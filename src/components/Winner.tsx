import React from 'react';
import { useLocation } from 'react-router-dom';

const WinnerPage: React.FC = () => {
  const location = useLocation();
  const { winner, draw } = location.state as { winner?: 'X' | 'O'; draw?: boolean };

  return (
    <div className="winner-page">
      {draw ? (
        <h1>It's a draw!</h1>
      ) : (
        <h1>Player {winner} wins!</h1>
      )}
      <a href="/">Play Again</a>
    </div>
  );
};

export default WinnerPage;
