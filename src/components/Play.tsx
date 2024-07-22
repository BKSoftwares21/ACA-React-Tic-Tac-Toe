import React from 'react'
import 'Play.css'

type Player = 'X' | 'O' | null;
type Board = Player[][];
type Move = [number, number];
type Winner = Player | null;
type State = {
    board: Board,
    player: Player,
    winner: Winner,
    moves: Move[]
    }
function Play() {
  return (
    <div className='grid'>
       <div className="cell" data-index="0"></div>
    <div className="cell" data-index="1"></div>
    <div className="cell" data-index="2"></div>
    <div className="cell" data-index="3"></div>
    <div className="cell" data-index="4"></div>
    <div className="cell" data-index="5"></div>
    <div className="cell" data-index="6"></div>
    <div className="cell" data-index="7"></div>
    <div className="cell" data-index="8"></div>

  <div className="status" id="status">Player X's turn</div>
  <buttov className="reset" id="resetButton">Reset Game</buttov>
    </div>
  )
}



export default Play

