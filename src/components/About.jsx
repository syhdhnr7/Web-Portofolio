// About.jsx
import React from 'react';
import '../assets/About.css';

const About = React.forwardRef((props, ref) => (
  <section ref={ref} className="about-section">
    <h2>About Me</h2>
    <div className="about-cards">
      <article className="about-card">
        <h3>Education</h3>
        <p>
          Informatics Engineering, 5th Semester. Skilled in Web Development with React.js, UI/UX design, and prototyping with Figma.
        </p>
      </article>
      <article className="about-card">
        <h3>Experience</h3>
        <p>
          Frontend Development projects, building both frontend and backend web solutions. Specialized in React.js, Laravel, and MySQL.
        </p>
      </article>
      <article className="about-card">
        <h3>Achievements</h3>
        <p>
          Completed various projects showcasing web development skills and UI/UX design expertise. Improved public speaking through presentations.
        </p>
      </article>
    </div>
  </section>
));

export default About;