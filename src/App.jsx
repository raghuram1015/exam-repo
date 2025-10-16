import React, { useState } from 'react';
import Welcome from './Welcome';
import './App.css';

const App = () => {
  const [studentName, setStudentName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName.trim()) {
      setSubmittedName(studentName);
      setShowWelcome(true);
    }
  };

  const handleReturn = () => {
    setStudentName('');
    setSubmittedName('');
    setShowWelcome(false);
  };

  return (
    <div className="app">
      <h2>Student Dashboard</h2>
      
      {!showWelcome ? (
        <form onSubmit={handleSubmit} className="name-form">
          <label htmlFor="studentName">Enter your name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      ) : (
        <Welcome name={submittedName} onReturn={handleReturn} />
      )}
    </div>
  );
};

export default App;
