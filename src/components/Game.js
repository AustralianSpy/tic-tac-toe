import { useCallback, useEffect, useState } from 'react';
import { INITIAL_BOARD, DRAW_CONDITIONS } from "../utility/constants";
import { checkWinner } from '../utility/helpers';
import Box from './Box';
import "./Game.css"

export default function Game() {
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState([...INITIAL_BOARD]);
  const [moveCount, setMoveCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  // -----> CHECK FOR COMPLETED BOARD AFTER EACH MOVE.
  useEffect(() => {
    if (moveCount === DRAW_CONDITIONS) setGameOver(true);
  }, [moveCount]);

  const handlePlayerMove = useCallback((symbol, index) => {
    if (!gameOver) {
      const newBoard = [...board];
      newBoard[index] = symbol;
      setBoard(newBoard)

      if (checkWinner(player, newBoard)) {
        setWinner(player);
        setGameOver(true);
      } else {
        setMoveCount((prev) => prev + 1);
        setPlayer((prev) => prev === 1 ? 2 : 1);
      }
    }
  }, [board]);

  // ----> RESET HANDLER IF GAME-OVER IS MET.
  const handleResetGame = () => {
    setBoard([...INITIAL_BOARD]);
    setMoveCount(0);
    setGameOver(false);
    setWinner(null);
    setPlayer(1);
  }

  return (
    <main className="App-header">
      { gameOver ?
          winner ?
            <h1>PLAYER {player} WINS!</h1> :
            <h1>GAME OVER</h1> :
              <h1>Player {player} is now playing...</h1>
      }
      <div className="game-board">
        { board.map((symbol, index) => {
          return (
            <Box
              key={`square+${symbol}+${index}`}
              index={index}
              symbol={symbol}
              player={player}
              isGameOver={gameOver}
              handleMove={handlePlayerMove}
            />
          )
          })
        }
      </div>
      { gameOver && <button className="button" onClick={() => handleResetGame()}>REPLAY</button>}
    </main>
  )
}