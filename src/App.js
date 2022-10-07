import { React } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Game from './components/Game';
import Gateway from './components/Gateway';
import NotFound from './components/NotFound';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="enter" />} />
        <Route path="enter" element={<Gateway />} />
        <Route path="game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
