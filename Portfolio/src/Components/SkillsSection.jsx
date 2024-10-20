import React, { Suspense, lazy } from 'react';
import '../Style/Skills.css';

const LazySkill = lazy(() => import('./Skill'));

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: "/assets/reactjs.png" },
    { name: "JavaScript", icon: "/assets/javascript.png" },
    { name: "Java", icon: "/assets/java.png" },
    { name: "HTML", icon: "/assets/html.png" },
    { name: "CSS", icon: "/assets/css.png" },
    { name: "Node.js", icon: "/assets/nodejs.png" },
    { name: "SQL", icon: "/assets/sql.png" },
    { name: "Tailwind", icon: "/assets/tailwind.png" },
    { name: "Git", icon: "/assets/git.png" },
    { name: "Figma", icon: "/assets/figma.png" },
    { name: "Power BI", icon: "/assets/powerBI.png" },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Suspense key={index} fallback={<div className="skill-placeholder">Loading...</div>}>
            <LazySkill name={skill.name} icon={skill.icon} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
