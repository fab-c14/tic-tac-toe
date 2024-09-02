import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Square from './Square';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import 'tachyons/css/tachyons.min.css';

const Board = () => {
  const initialSquares = Array(9).fill(null); // intial board 
  const [squares, setSquares] = useState(initialSquares); // intial squares 
  const [isXNext, setIsXNext] = useState(true); // next move 0 or X
  const winner = calculateWinner(squares); // calculate result if winner or not (based on square matches)
  const isDraw = !winner && squares.every(Boolean); // calculate if is draw or based on if every square is filled and winner is not found.
  const status = winner 
    ? `Winner: ${winner}` 
    : isDraw
    ? 'It\'s a Draw!'
    : `Next player: ${isXNext ? 'X' : 'O'}`; 

  const handleClick = (index) => {
    if (squares[index] || winner) {
      return; // if winner is found then return 
    }
    const newSquares = squares.slice();
    console.log(newSquares);
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setSquares(initialSquares); // setting the text of squares to null 
    setIsXNext(true); // and set x as next value , first turn is X
  };

  const renderSquare = (i) => {
    return <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />; // create a click function that will put x or o on the square 
  }; // basically this will change the text of a square to x or 0 based on turn

  return (
    // used react-bootstrap and tachyons css for better responsive design s
    <Container className=" ma3 tc">
      <Fade>
        <h2 className="mb4 b navy">{status}</h2>
      </Fade>
      <Zoom>
        <div className="board-grid mb4">
          <Row>
            <Col xs={4} className="pa1">{renderSquare(0)}</Col>
            <Col xs={4} className="pa1">{renderSquare(1)}</Col>
            <Col xs={4} className="pa1">{renderSquare(2)}</Col>
          </Row>
          <Row>
            <Col xs={4} className="pa1">{renderSquare(3)}</Col>
            <Col xs={4} className="pa1">{renderSquare(4)}</Col>
            <Col xs={4} className="pa1">{renderSquare(5)}</Col>
          </Row>
          <Row>
            <Col xs={4} className="pa1">{renderSquare(6)}</Col>
            <Col xs={4} className="pa1">{renderSquare(7)}</Col>
            <Col xs={4} className="pa1">{renderSquare(8)}</Col>
          </Row>
        </div>
      </Zoom>
      <Button
        variant="primary"
        onClick={handleReset}
        className="f4 b pa2 br3"
      >
        Reset Game
      </Button>
    </Container>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
