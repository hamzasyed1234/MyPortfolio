import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
import Education from './pages/Education.js';
import './App.css';

function App() {
  console.log('App component rendered');
  
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<div>Projects Page Coming Soon</div>} />
            <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;