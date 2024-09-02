import React from 'react';
import Board from './components/Board';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';
import { Col } from 'react-bootstrap';
import './App.css';
const App = () => {
  return (
    <Col className="App bg-light-gray vh-100 shadow-2">
      <h1 className="mt4 f1 lh-title navy mb4">Tic Tac Toe</h1>
      <Board />
    </Col>
  );
};

export default App;
