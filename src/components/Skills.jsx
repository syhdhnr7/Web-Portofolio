import React from 'react';
import '../assets/Skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-cards">
        <div className="skill-card">
          <h3 className="skill-number">01 \ FRONTEND</h3>
          <h4 className="skill-title">React.js Development –</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nisl ut dolor laoreet accumsan non non est.</p>
        </div>
        <div className="skill-card">
          <h3 className="skill-number">02 \ UI/UX DESIGN</h3>
          <h4 className="skill-title">Figma Prototyping –</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt neque in lectus gravida, eu faucibus ipsum tempor.</p>
        </div>
        <div className="line"></div> {/* Garis di tengah kolom */}
        <div className="circle top-circle"></div> {/* Bulatan di atas */}
        <div className="circle bottom-circle"></div> {/* Bulatan di bawah */}
        <div className="skill-card">
          <h3 className="skill-number">03 \ BACKEND</h3>
          <h4 className="skill-title">Laravel Development –</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor sapien vel est varius, non vulputate nisl cursus.</p>
        </div>
        <div className="skill-card">
          <h3 className="skill-number">04 \ DATABASE</h3>
          <h4 className="skill-title">MySQL Administration –</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dui ut leo egestas gravida vel nec nisl.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
