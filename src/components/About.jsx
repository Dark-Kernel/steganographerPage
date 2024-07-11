import React from 'react';

const About = () => {
  return (
    <div className="wrapper">
      <div className="cyber-grid"></div>
      <div className="container">
        <div className="about-container">
          <h2 className="about-title">About Steganographer</h2>
          <p className="about-description">
            Steganographer is an all-in-one solution for steganography, the art of hiding secret messages within ordinary-looking files. Our tool allows you to securely encode and decode hidden information in various file formats, providing an extra layer of privacy and security for your sensitive data.
          </p>
          <a href="https://github.com/yourusername/steganographer" className="github-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-icons">
              {['React', 'Node.js', 'Python', 'Crypto.js'].map((tech) => (
                <div key={tech} className="tech-icon">
                  <img src={`/icons/${tech.toLowerCase().replace('.', '')}.svg`} alt={tech} />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="cool-feature">
            <h3>Try Our Live Demo</h3>
            <p className="typewriter">
              Encode a secret message right now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
