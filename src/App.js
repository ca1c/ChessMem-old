import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/navbar/navbar.component";
import ChessBoard from "./components/chessboard/chessBoard.component";

function App() {
  return (
    <div className="App">
    	<Navbar />
      <ChessBoard />
    </div>

  );
}

export default App;
