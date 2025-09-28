import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
import Education from './pages/Education.js';
import Services from './pages/Services.js';
import Projects from './pages/Projects.js';  // Add this import
import Contact from './pages/Contact.js';
import './App.css';

// connect all pages
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />  {/* Use the actual component */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;