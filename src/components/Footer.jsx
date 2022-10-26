import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div className='footer'>
        <div className="flex-item">
          <p className='built-by'>Built by Yoonsoo Nam 2022</p>
        </div>
        <div className="flex-item">
          <a href="https://github.com/yoonsoo1">
              <FontAwesomeIcon icon={faGithub} size="2x" className='icon'/>
          </a>
        </div>
        <div className="flex-item">
          <a href="https://www.linkedin.com/in/yoonsoo-nam/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className='icon'/>
          </a>
        </div>
    </div>
  )
}

export default Footer