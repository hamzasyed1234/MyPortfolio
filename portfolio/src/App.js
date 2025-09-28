import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h1>Welcome to My React App</h1>
        <p>Start building your amazing application!</p>
      </main>
    </div>
  );
}

export default App;