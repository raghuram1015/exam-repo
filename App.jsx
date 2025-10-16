import React from 'react';
import Welcome from './Welcome';

const App = () => {
  return (
    <div className="app">
      <h2>Student Dashboard</h2>
      <Welcome name="Deepak" />
      <Welcome name="Priya" />
      <Welcome name="Rahul" />
    </div>
  );
};

export default App;
