import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
// import logo from './logo.svg';
import './App.css';

import Navbar from "./components/navbar/navbar.component";
import ChessBoard from "./components/chessboard/chessBoard.component";

const theme = createMuiTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      	<Navbar />
        <ChessBoard />
      </ThemeProvider>
    </div>

  );
}

export default App;
