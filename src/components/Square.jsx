import React from 'react';
import Button from 'react-bootstrap/Button';
import 'tachyons/css/tachyons.min.css';
import Bounce from 'react-reveal/Bounce';

const Square = ({ value, onClick }) => {
  return (
    <Bounce cascade>
      <Button
        className="square bg-light-blue f1 b--blue br3 pointer grow shadow-5"
        onClick={onClick}
        variant="outline-primary"
        style={{
          height: '100px',
          width: '100px',
          fontSize: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s',
        }}
      >
        {value}
      </Button>
    </Bounce>
  );
};

export default Square;
