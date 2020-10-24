import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/navbar.component";
import ChessBoard from "./components/chessBoard.component";

function App() {
  return (
    <div className="App">
    	<Navbar />
        <ChessBoard />
    </div>

  );
}

export default App;
