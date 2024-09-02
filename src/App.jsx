import React from 'react';
import Board from './components/Board';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';
import { Col } from 'react-bootstrap';
import './App.css';
const App = () => {
  // 1. create a board, that contains 9 buttons ... 
  // 2. change the text on touch for that create a square which containes button
  // 3. create logic for win and lose or draw and add a reset button 
  /// then test 
  return (
    
    <Col className="App bg-light-gray vh-100 shadow-2">
      <h1 className="mt4 f1 lh-title navy mb4">Tic Tac Toe</h1>
      <Board />
    </Col>
  );
};

export default App;
