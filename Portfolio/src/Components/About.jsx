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
//https://drive.google.com/file/d/1y6E8rzpqHgUUJL7ZF8nKA3orIxNr6wTB/view?usp=drive_link
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
    // const pdfUrl = 'https://drive.google.com/file/d/1y6E8rzpqHgUUJL7ZF8nKA3orIxNr6wTB/view?usp=drive_link';
    const pdfUrl = '/workspaces/Portfolio-website/CV-Vishal.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV-Vishal.pdf'; // Replace with your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about">
      <h2>About Me</h2>
      
      <div className="about-content">
      <div className="Profle-image">
          <img src="https://i.ibb.co/0htsPWG/Whats-App-Image-2024-08-01-at-15-44-32-369b04ae.jpg" alt="Image" srcset="" />
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
          <button class="button" onClick={handleDownloadCV}>
            <div class="icon">
              <div class="arrow"></div>
              <svg class="line" viewBox="0 0 24 24"></svg>
            </div>
            &#68;ownload CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
