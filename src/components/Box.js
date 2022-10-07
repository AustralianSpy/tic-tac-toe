import { useMemo, useState } from "react";
import { makeBorders } from "../utility/helpers";

// ----> INDIVIDUAL BOXES WITHIN GAME BOARD.
export default function Box({ index, symbol, player, isGameOver, handleMove }) {
  const [marked, setMarked] = useState(false);

  const borders = useMemo(
    () => makeBorders(index), 
    [index]
  );

  const handleClicks = () => {
    if (!marked && !isGameOver) {
      let result = player === 1 ? "O" : "X";
      setMarked(true);
      handleMove(result, index);
    }
  };

  return (
    <div 
      className={`game-square ${borders}`}
      onClick={handleClicks}>
      {symbol}
    </div>
  )
}