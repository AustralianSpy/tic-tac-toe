import { React } from "react";
import { useNavigate } from 'react-router-dom';

export default function Gateway() {
  const navigate = useNavigate();
  // Could also wrap button in a link instead of using an onClick.

  return (
    <div className="App">
      <header className="App-header">
        <h1>Click to begin a game...</h1>
        <button
          className='button'
          onClick={() => navigate("/game")}
        >
          ENTER
        </button>
      </header>
    </div>
  )
}