import { useMemo, useState } from "react";
import { makeBorders } from "../utility/helpers";

export default function Box({ index, player, isGameOver, handleMove }) {
  const [marked, setMarked] = useState(false);
  const [symbol, setSymbol] = useState("");

  const borders = useMemo(() => {
    return makeBorders(index);
  })

  const handleClicks = () => {
    if (!marked && !isGameOver) {
      let result = player === 1 ? "O" : "X";
      setSymbol(result);
      setMarked(true);
      handleMove(result, index);
    }
  };

  return (
    <div 
      className={`game-square ${borders}`}
      onClick={() => handleClicks()}>
      {symbol}
    </div>
  )
}