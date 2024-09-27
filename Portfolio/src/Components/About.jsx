import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const titles = [
    'Software Engineer.',
    'Competitive Programmer.',
    'wanna be Fullstack Web Developer.'
  ];

  useEffect(() => {
    const title = titles[titleIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= title.length) {
        setDisplayedTitle(title.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [titleIndex]);
    
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div>
            <img src="" alt="/workspaces/Portfolio-website/Portfolio/src/assets/profile.jpg"  srcset="" />
        </div>
        <div className="about-text">
          <h3>I'm a <span className="job-titl">{displayedTitle}</span></h3>
          <p>
            I am ambitious and driven, constantly seeking out challenges and
            setting goals to push myself toward excellence. Settling for the 
            ordinary isn't in my nature—I'm always looking 
            for ways to improve and achieve more. As a tech enthusiast,
            I'm committed to expanding my technical skills and
            building innovative, reliable solutions that simplify 
            everyday life. I'm also excited about collaborating on impactful
            projects that address real-world challenges and vulnerabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
