import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const pageStyle = {
    backgroundColor: '#1a1a2e', // Deep Blue Background
    color: '#e94560',           // Vibrant Pink Text
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
    margin: 0
  };

  const statusStyle = {
    backgroundColor: '#16213e',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #0f3460',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
  };

  return (
    <div style={pageStyle}>
      <div style={statusStyle}>
        <h1>🚀 Jenkins CI/CD Project</h1>
        <p>Status: <span style={{color: '#4ecca3'}}>Connected via GitHub Webhook</span></p>
        <hr style={{borderColor: '#0f3460'}} />
        <small>Last Deployment: {new Date().toLocaleTimeString()}</small>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
