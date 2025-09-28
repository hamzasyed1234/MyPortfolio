import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Get to know me better</p>
      </div>
      
      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image">
            <div className="image-placeholder">Your Photo</div>
          </div>
          
          <div className="profile-info">
            <h2>Hi, I'm Hamza Syed</h2>
            <p className="tagline">Software Engineering Student</p>
            <p className="bio">
              Welcome to my personal space! I'm passionate about web development and creating 
              amazing user experiences. With experience in modern technologies, I love building 
              solutions that make a difference.
            </p>
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-card">
            <h3>🎯 My Skills</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript/TypeScript</li>
              <li>HTML/CSS</li>
              <li>Node.js</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>📚 Education</h3>
            <ul>
              <li>Highschool - Dunbarton HS</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>💼 Experience</h3>
            <ul>
              <li>Ministry of Transportation Summer Employment (2022-23)</li>
            </ul>
          </div>

        </div>

        <div className="contact-cta">
          <h3>Let's Connect!</h3>
          <p>Feel free to reach out for collaborations or just to say hello!</p>
          <button className="contact-btn">Get In Touch</button>
        </div>
      </div>
    </div>
  );
}

export default About;