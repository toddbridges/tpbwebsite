import React from 'react';
import '../styles/MainContent.css';
import setlist from '../assets/setlist.webp';
import jam from '../assets/jazzjam.jpg';
import githubpic from '../assets/gitpic.webp';
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <section className="main-content">
        <a href="https://setlistmaker.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img src={setlist} alt="Clickable Image to setlist creator" style={{ display: 'block', width: '80%', height: 'auto', padding: '1rem' }}/>
        </a>
        <Link to="/gall">
        <img src={jam} alt="Clickable Image for Todd Bridges" style={{ display: 'block', width: '80%', height: 'auto', padding: '1rem' }}/>
        <p>Gallery and Videos</p>
        </Link>
        <a href="https://github.com/toddbridges/" target="_blank" rel="noopener noreferrer">
        <img src={githubpic} alt="clickable image to github link" style={{ display: 'block', width: '80%', height: 'auto', padding: '1rem' }}/>
        </a>
    </section>
  );
};

export default MainContent;