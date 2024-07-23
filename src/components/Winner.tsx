import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Play.css';


const WinnerPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { winner, draw } = location.state as { winner?: 'X' | 'O'; draw?: boolean };

  return (
    <div className="winner-page">
      {draw ? (
        <h1>It's a draw!</h1>
      ) : (
        <h1>Player {winner} wins!</h1>
      )}
      <button onClick={() => navigate('/')}>Play Again</button>
    </div>
  );
};

export default WinnerPage;
