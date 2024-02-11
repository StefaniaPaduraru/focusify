import React from 'react';
import './Footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitch, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
      <footer className='App-footer'>
        <div className='container container-footer'>
          <p>© 2024 Focusify</p>
          <div className='container container-footer-links'>
          <h5>You can find me on:</h5>
          <ul className='footer-links'>
            <li><a href='https://www.facebook.com/'><FaFacebook/></a></li>
            <li><a href='https://www.youtube.com/'><FaYoutube /></a></li>
            <li><a href='https://www.instagram.com/'><FaInstagram /></a></li>
            <li><a href='https://www.github.com/'><FaGithub /></a></li>
            <li><a href='https://www.linkedin.com/'><FaLinkedin /></a></li>
            <li><a href='https://www.twitch.com/'><FaTwitch /></a></li>
          </ul>
        </div>
        </div>
      </footer>
    );
  }
  

export default Footer;