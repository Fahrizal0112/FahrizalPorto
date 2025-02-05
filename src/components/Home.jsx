import React, { useState, useEffect, useRef } from 'react';
import './Style/Home.css';
import nodejsIcon from './assets/nodejs.svg';
import javascriptIcon from './assets/javascript.svg';
import googleCloudIcon from './assets/googlecloud.svg';
import vscodeIcon from './assets/visualstudiocode.svg';
import myPhoto from './assets/ijal.png';
import kubernetesIcon from './assets/kubernetes.png';
import 'animate.css';

const SkillBar = ({ skill, percentage, color }) => {
  return (
    <div className="skill-bar-container" data-aos="fade-right">
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color
          }}
        ></div>
      </div>
    </div>
  );
};

const Home = () => {
  const [creativeText, setCreativeText] = useState('Developer');
  const aboutRef = useRef(null);
  const mySkillRef = useRef(null);

  useEffect(() => {
    const texts = ['Developer', 'Freelancer', 'Problem Solver'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCreativeText(texts[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('animate__fadeOut');
          entry.target.classList.add('animate__fadeIn');
        } else {
          entry.target.classList.remove('animate__fadeIn');
          entry.target.classList.add('animate__fadeOut');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (mySkillRef.current) {
      observer.observe(mySkillRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (mySkillRef.current) {
        observer.unobserve(mySkillRef.current);
      }
    };
  }, []);

  return (
    <div id="home">
      <section className="home">
        <div className="intro" data-aos="fade-up" data-aos-duration="1000">
          <div className="text">
            <h1 className="text-5xl font-bold text-white" data-aos="fade-right" data-aos-delay="200">
              Hi I'm Fahrizal!
            </h1>
            <h2 className="text-3xl font-bold text-white" data-aos="fade-right" data-aos-delay="400">
              Back End Developer - Dev Ops Engineer
            </h2>
            <h3 className="text-3xl font-bold text-white" data-aos="fade-right" data-aos-delay="600">
              Creative <span className="dynamic-text text-orange">{creativeText}</span>
            </h3>
            <div className="cta-buttons" data-aos="fade-up" data-aos-delay="800">
              <a href="/contact" className="primary-btn">Contact Me</a>
              <a href="#about" className="secondary-btn">Learn More</a>
            </div>
          </div>
          <img 
            src={myPhoto} 
            alt="Fahrizal" 
            className="my-photo" 
            data-aos="fade-left" 
            data-aos-delay="400"
          />
        </div>
      </section>

      <section id="about" ref={aboutRef} className="about" data-aos="fade-up">
        <h2 className="section-title">
          <span className="text-2xl font-bold">About </span>
          <span className="text-2xl font-bold text-orange">Me</span>
        </h2>
        <div className="about-content" data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl">
            I am an experienced Software Engineer specializing in the development of websites and applications. 
            With a primary focus on the <b className="text-orange">Node.js</b> and <b className="text-orange">JavaScript</b> frameworks,
            I am dedicated to bringing your digital projects to life efficiently and with high quality.
            Additionally, I possess strong skills in <b className="text-orange">Google Cloud Platform</b>, 
            enabling me to <b className="text-orange">deploy</b> and manage your applications optimally.
            Combining technical expertise with practical experience, I am ready to help you achieve success in the digital world.
          </p>
          <div className="tech-stack" data-aos="fade-up" data-aos-delay="400">
            <img src={nodejsIcon} alt="Node.js" className="tech-icon" />
            <img src={javascriptIcon} alt="JavaScript" className="tech-icon" />
            <img src={googleCloudIcon} alt="Google Cloud Platform" className="tech-icon" />
            <img src={vscodeIcon} alt="Visual Studio Code" className="tech-icon" />
          </div>
        </div>
      </section>

      <section id="myskill" ref={mySkillRef} className="myskill-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">
            <span className="text-2xl font-bold text-white">My </span>
            <span className="text-2xl font-bold text-orange">Skills</span>
          </h2>
          
          <div className="skills-grid">
            <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
              <div className="skill-icon">
                <img src={nodejsIcon} alt="Node.js" />
              </div>
              <h3>Node.js</h3>
              <p className="text-white">Backend development with Express.js, RESTful APIs, and database integration</p>
            </div>

            <div className="skill-card" data-aos="fade-up" data-aos-delay="200">
              <div className="skill-icon">
                <img src={javascriptIcon} alt="JavaScript" />
              </div>
              <h3>JavaScript</h3>
              <p className="text-white">Modern ES6+, async programming, and frontend frameworks</p>
            </div>

            <div className="skill-card" data-aos="fade-up" data-aos-delay="300">
              <div className="skill-icon">
                <img src={googleCloudIcon} alt="Google Cloud" />
              </div>
              <h3>Google Cloud</h3>
              <p className="text-white">Cloud infrastructure, deployment, and scalable solutions</p>
            </div>

            <div className="skill-card" data-aos="fade-up" data-aos-delay="400">
              <div className="skill-icon docker-icon">
                <i className="fab fa-docker"></i>
              </div>
              <h3>Docker</h3>
              <p className="text-white">Containerization, microservices architecture, and deployment</p>
            </div>

            <div className="skill-card" data-aos="fade-up" data-aos-delay="500">
              <div className="skill-icon" style={{ width: '100px', height: '100px' }}>
                <img src={kubernetesIcon} alt="Kubernetes" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3>Kubernetes</h3>
              <p className="text-white">Container orchestration, scaling, and cluster management</p>
            </div>

            <div className="skill-card" data-aos="fade-up" data-aos-delay="600">
              <div className="skill-icon cicd-icon">
                <i className="fas fa-code-branch"></i>
              </div>
              <h3>CI/CD</h3>
              <p className="text-white">Automated testing, deployment pipelines, and continuous integration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
