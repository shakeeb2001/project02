import React, { useState, useEffect } from 'react';
import './main.css'; 
import Profile from '../images/profile.png';
import Hotel from '../images/hotel.png';
import Lab from '../images/lab.png';
import Wine from '../images/wine.png';
import Footer from '../components/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const roles = ["Data Analyst", "UI/UX Designer", "Software Developer"];

export default function Main() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (index < currentRole.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(displayText + currentRole[index]);
        setIndex(index + 1);
      }, 100); // Adjust the delay to change typing speed

      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setIndex(0);
        setDisplayText('');
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1200); // Delay before starting to type the next role

      return () => clearTimeout(timeoutId);
    }
  }, [index, roleIndex, displayText]);

  return (
    <>
      <div id='home' className="container1">
        <h2 className="greeting">Hi I'm <span className='firstname'>Shakeeb</span> Jasim</h2>
        <h3 className='role'><br />Software Developer | Data Analyst | UI/UX Designer</h3>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/shjasim/" target="_blank" rel="noopener noreferrer" className="btn linkedin">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="/path/to/your_cv.pdf" download className="btn cv">
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
      <div id="about" className="container2">
        <div className="left-panel">
          <img src={Profile} alt="Profile" className="profile-image"/>
        </div>
        <div className="right-panel">
          <h3 className='aboutme'>About Me</h3>
          <p>
          I am Shakeeb Jasim, a dedicated and passionate Software Developer with extensive expertise in 
          Data Analysis and UI/UX Design. With a Bachelor's Hons in Computer Science from the
           University of Plymouth, where I graduated with a Second Class Upper Division, 
          I have honed my skills in developing innovative solutions and delivering high-quality software. My experience includes tackling complex problems, continuously seeking to enhance my knowledge, and driving improvements in software development processes. My goal is to leverage my skills and experience to contribute effectively to cutting-edge projects and advance my career in software development.
          </p>
        </div>
      </div>
      <h3 className="services-title">Services</h3>
      <div id="services" className="container3">
        <div className="card">
          <div className="icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="title">Web Development</div>
          <div className="description">
            I specialize in building robust web applications using modern technologies. My expertise includes frontend and backend development, ensuring a seamless user experience.
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-paint-brush"></i>
          </div>
          <div className="title">UI/UX Designing</div>
          <div className="description">
            I design intuitive and aesthetically pleasing user interfaces. My goal is to create user-centered designs that are both functional and visually appealing.
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="title">Mobile App Development</div>
          <div className="description">
            I analyze data to extract valuable insights and drive decision-making. My skills include data visualization, statistical analysis, and machine learning.
          </div>
        </div>
      </div>
      <h3 className="project-main-title">Projects</h3>
      <br />
      <br />
      <div id="project" className='container4'>
          <div className='card project-card'>
             <h3 className='project-title'>Cardiovascular Disease Risk Prediction System</h3> 
             <p className='project-description'>Technologies -HTML5, CSS3, JavaScript, MERN Stack, ML,Flask.<br/>
                   The final year computing project has been completed, entailing the
                   development of a system capable of predicting cardiovascular disease
                   risk levels using machine learning techniques.</p> 
             <img src={Lab} alt="Profile" className="project-img"/>
          </div>
          <div className='card project-card'>
             <h3 className='project-title'>Red Wine Quality Prediction System</h3> 
             <p className='project-description'>Technologies - HTML5, CSS3, JavaScript, ReactJs,Node JS,Firebase, ML,Flask.<br/>
               The Red Wine Quality Prediction system is a web-based application
               designed for wine stores and wine quality testing labs. It predicts the
               quality of red wine by providing a score, helping users assess the
               wine's quality efficiently.</p> 
             <img src={Wine} alt="Profile" className="project-img"/>
          </div>
          <div className='card project-card'>
             <h3 className='project-title'>Hotel Willow Lack Room Reservation System</h3> 
             <p className='project-description'>Technologies - HTML5, CSS3, JavaScript, MERN Stack<br/>
                          Willow Lack, an innovative hotel booking system designed to
                          streamline the reservation process for both individual room bookings
                          and event-related hotel accommodations.</p> 
             <img src={Hotel} alt="Profile" className="project-img"/>
          </div>
      </div>
      <Footer />
    </>
  );
}
