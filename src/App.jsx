import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import './App.css';

const App = () => {
  const [studentName, setStudentName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

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

  const showSnackbar = () => {
    setSnackbarVisible(true);
  };

  useEffect(() => {
    if (!snackbarVisible) return;
    const t = setTimeout(() => setSnackbarVisible(false), 3000);
    return () => clearTimeout(t);
  }, [snackbarVisible]);

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
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            <button type="submit" className="submit-button">Submit</button>
            <button type="button" className="contained-button" onClick={showSnackbar}>
              Save
            </button>
          </div>
        </form>
      ) : (
        <Welcome name={submittedName} onReturn={handleReturn} />
      )}

      <div className={snackbarVisible ? 'snackbar show' : 'snackbar'} role="status" aria-live="polite">
        Saved
      </div>
    </div>
  );
};

export default App;
