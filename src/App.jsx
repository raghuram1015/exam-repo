import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import './App.css';

const App = () => {
  const [studentName, setStudentName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName.trim()) {
      setSubmittedName(studentName);
      setShowWelcome(true);
      setShowSaved(false);
    }
  };

  const handleReturn = () => {
    setStudentName('');
    setSubmittedName('');
    setShowWelcome(false);
    setShowSaved(false);
  };

  const handleSave = () => {
    if (!studentName.trim()) return;
    setSubmittedName(studentName);
    setSnackbarVisible(true);

    // after a short delay, navigate to the Saved page
    setTimeout(() => {
      setSnackbarVisible(false);
      setShowSaved(true);
      setShowWelcome(false);
    }, 900);
  };

  useEffect(() => {
    if (!snackbarVisible) return;
    const t = setTimeout(() => setSnackbarVisible(false), 3000);
    return () => clearTimeout(t);
  }, [snackbarVisible]);

  return (
    <div className="app">
      <h2>Student Dashboard</h2>

      {!showSaved && !showWelcome ? (
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
            <button type="button" className="contained-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </form>
      ) : null}

      {!showSaved && showWelcome ? (
        <Welcome name={submittedName} onReturn={handleReturn} />
      ) : null}

      {showSaved && (
        <div className="saved-page">
          <h4 className="typography-h4">{submittedName}</h4>
          <div style={{ marginTop: 20 }}>
            <button className="return-button" onClick={handleReturn}>
              Return
            </button>
          </div>
        </div>
      )}

      {/* Snackbar */}
      <div
        className={snackbarVisible ? 'snackbar show' : 'snackbar'}
        role="status"
        aria-live="polite"
      >
        <div className="snackbar-content">
          <svg className="snackbar-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2 18.6 6.8z" fill="currentColor"/>
          </svg>
          <span className="snackbar-message">Saved</span>
          <button
            className="snackbar-close"
            aria-label="Close"
            onClick={() => setSnackbarVisible(false)}
            title="Close"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
