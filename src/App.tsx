import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Lorem ipsum dolor</p>
        <a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>Dev branch commit 1</div>
        <div>Dev branch commit 2</div>
        <div>Dev branch commit 3</div>
        <div>develop login branch commit 1</div>
        <div>develop login branch commit 2</div>
        <div>develop popup branch commit 1</div>
        <div>develop popup branch commit 2</div>
      </header>
    </div>
  );
}

export default App;
