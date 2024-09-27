import React, { useState, useEffect } from 'react';
import './Hireme.css';

const Hireme = () => {
  const [jobIndex, setJobIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const jobs = [
    'Software Engineer.',
    'Competitive Programmer.',
    'wanna be Fullstack Web Developer.'
  ];

  useEffect(() => {
    const job = jobs[jobIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= job.length) {
        setDisplayedText(job.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [jobIndex]);

  const handleHireClick = () => {
    // Replace this with your desired action, e.g., opening a contact form or linking to your resume
    window.open('https://www.linkedin.com/in/vishal-singh271/', '_blank');
  };

  return (
    <div className="hire-me-container">
      <h3>Hello, my name is</h3>
      <h1>Vishal Singh</h1>
      <h2>I'm a <span className="job-title">{displayedText}</span></h2>
      <button className="hire-me-button" onClick={handleHireClick}>Hire Me</button>
    </div>
  );
};

export default Hireme;
