import React from 'react';
import './Service.css';



const Service = () => {

    return (
        <section className="services-section">
            <h1>My services</h1>
            <div className="row1-container">
                <div className="box box-down cyan">
                    <h2>API Development </h2>
                    <p>Developing RESTful APIs that can communicate with databases or other services.</p>
                    <img src="/api-development.png" alt="Supervisor icon" />
                </div>

                <div className="box red">
                    <h2>Fullstack Web Development</h2>
                    <p>Creating end-to-end web applications, including front-end interfaces and back-end functionality, tailored to business or customer needs.</p>
                    <img src="/web-developer.png" alt="Team Builder icon" />
                </div>

                <div className="box box-down blue">
                    <h2>Competitive Programming </h2>
                    <p>Solving complex algorithmic challenges or optimizing code for efficiency.</p>
                    <img src="/leadership-development.png" alt="Calculator icon" />
                </div>
            </div>
            <div className="row2-container">
                <div className="box orange">
                    <h2>UI/UX Design</h2>
                    <p>Designing intuitive, visually appealing user interfaces and experiences for websites or web apps.</p>
                    <img src="/ui-ux.png" alt="Karma icon" />
                </div>
            </div>
        </section>
    );
};

export default Service;
