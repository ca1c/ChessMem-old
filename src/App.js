import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import logo from './logo.svg';
import './App.css';

import Navbar from "./components/navbar/navbar.component";
import ChessBoard from "./components/chessboard/chessBoard.component";

const lightTheme = createTheme({
  palette: {
    background: {
      default: "#ededed",
      secondary: "#ffffff",
    },
    primary: {
      main: "#000000"
    }
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#FFFFFF"
    }
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      	<Navbar />
        <ChessBoard />
      </ThemeProvider>
    </div>

  );
}

export default App;
