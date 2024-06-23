import React, { useState, useEffect, useRef } from 'react';
import './Style/Home.css';
import nodejsIcon from './assets/nodejs.svg';
import javascriptIcon from './assets/javascript.svg';
import googleCloudIcon from './assets/googlecloud.svg';
import vscodeIcon from './assets/visualstudiocode.svg';
import myPhoto from './assets/ijal.png';
import 'animate.css';

const CircleBar = ({ percentage, skill }) => {
  return (
    <div className="circle-bar">
      <div className="circle">
        <div className="mask full" style={{ transform: `rotate(${percentage / 100 * 180}deg)` }}>
          <div className="fill" style={{ transform: `rotate(${percentage / 100 * 180}deg)` }}></div>
        </div>
        <div className="mask half">
          <div className="fill" style={{ transform: `rotate(${percentage / 100 * 180}deg)` }}></div>
        </div>
        <div className="inside-circle">{percentage}%</div>
      </div>
      <div className="skill-name">{skill}</div>
    </div>
  );
};

const Home = () => {
  const [creativeText, setCreativeText] = useState('Developer');
  const aboutRef = useRef(null);
  const mySkillRef = useRef(null);

  useEffect(() => {
    const texts = ['Developer', 'Freelancer'];
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
        <div className="intro animate__animated animate__fadeIn">
          <div className="text">
            <h1 className='text-5xl font-bold text-white'>Hi I'm Fahrizal!</h1>
            <h2 className='text-3xl font-bold text-white'>Back End Developer - Dev Ops Engineer.</h2>
            <h3 className='text-3xl font-bold text-white'>
              Creative <span className='dynamic-text text-orange'>{creativeText}</span>
            </h3>
          </div>
          <img src={myPhoto} alt="Fahrizal" className="my-photo" />
        </div>
      </section>

      <section id="about" ref={aboutRef} className="about animate__animated">
        <h2>
          <span className='text-2xl font-bold'>About </span>
          <span className='text-2xl font-bold text-orange'>Me</span>
        </h2>
        <br></br>
        <p className='text-xl animate__animated'>
          I am an experienced Software Engineer specializing in the development of websites and applications. With a primary focus on the <b className='text-orange'>Node.js</b> and <b className='text-orange'>JavaScript</b> frameworks,
          I am dedicated to bringing your digital projects to life efficiently and with high quality.
          Additionally, I possess strong skills in <b className='text-orange'>Google Cloud Platform</b>, enabling me to <b className='text-orange'>deploy</b> and manage your applications optimally.
          Combining technical expertise with practical experience, I am ready to help you achieve success in the digital world.
        </p>
        <div className="icons">
          <img src={nodejsIcon} alt="Node.js" className="icon" />
          <img src={javascriptIcon} alt="JavaScript" className="icon" />
          <img src={googleCloudIcon} alt="Google Cloud Platform" className="icon" />
          <img src={vscodeIcon} alt="Visual Studio Code" className="icon" />
        </div>
      </section>

      <section id="myskill" ref={mySkillRef} className='myskill animate__animated'>
        <h2>
          <span className='text-2xl font-bold text-white'>My </span>
          <span className='text-2xl font-bold text-orange'>Skills</span>
        </h2>
        <div className="skill-container">
          <CircleBar percentage={80} skill="Node.js" />
          <CircleBar percentage={85} skill="JavaScript" />
          <CircleBar percentage={80} skill="Google Cloud" />
          <CircleBar percentage={80} skill="Docker" />
          <CircleBar percentage={80} skill="Kubernetes" />
          <CircleBar percentage={80} skill="CI/CD" />
        </div>
      </section>
    </div>
  );
};

export default Home;
