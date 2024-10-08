import React from 'react';
import '../Style/Project.css';

function Project() {
  return (
    <div className='Project'>
    <div className="project-container">
        <h2>My Project</h2>
      <div className="project-grid">
        <figure className="snip1177">
          <img src="Project1.png" alt="Project Title" />
          <div>
            <h3>Med-Connection<span>Hub</span></h3>
          </div>
          <a href="#"></a>
        </figure>
        
        <figure className="snip1177">
          <img src="Project2.png" alt="Project Title" />
          <div>
            <h3>Portfolio<span>Website</span></h3>
          </div>
          <a href="#"></a>
        </figure>
        {/* <figure className="snip1177">
          <img src="Project2.png" alt="Project Title" />
          <div>
            <h3>Project <span>Title</span></h3>
          </div>
          <a href="#"></a>
        </figure> */}
      </div>
    </div>
    </div>
  );
}

export default Project;
