import React from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  document.title = 'CV builder'
  return (
    <div className="app">
      <Main />
    </div>
  );
}

export default App;