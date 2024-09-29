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

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV-Vishal.pdf";
    link.download = "CV-Vishal.pdf";
    link.click();
  };

  return (
    <section className="about">
      <h2>About Me</h2>

      <div className="about-content">
        <div className="Profle-image">
          <img src="https://i.ibb.co/0htsPWG/Whats-App-Image-2024-08-01-at-15-44-32-369b04ae.jpg" alt="Image"  />
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
          <button className="button" onClick={handleDownloadCV}>
            <div className="icon">
              <div className="arrow"></div>
              <svg className="line" viewBox="0 0 24 24"></svg>
            </div>
            &#68;ownload CV
          </button>
        </div>
        
      </div>
      <h2>Education</h2>
      <div className='card-education'>
        <div className='tenth-education'>
        <h3>Bachelor of Computer Applications</h3>
          <p>Chandigarh University, Punjab 
           <br /> 2021 - 2024
          </p>
        </div>
        <div className='tenth-education'>
          <h3>Senior Secondary(Class XII) - PCM </h3>
          <p>Lord Mahavir Jain Public School, Punjab
            <br />2020 - 2021
          </p>
        </div>
        <div className='tenth-education'>
          <h3>Secondary School Education (Class X)</h3>
          <p>Sun Flower Public School, Uttar Pradash 
           <br /> 2018 - 2019
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default About;
