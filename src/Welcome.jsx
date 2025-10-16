import React from 'react';
import './Welcome.css';

const Welcome = ({ name, onReturn }) => {
  return (
    <div className="welcome-container">
      <h1>Welcome, {name}!</h1>
      <button className="return-button" onClick={onReturn}>
        Return
      </button>
    </div>
  );
};

export default Welcome;
