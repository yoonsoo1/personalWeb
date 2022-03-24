import React, { useRef, useEffect } from "react";
import AniButton from "./AniButton";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

function Introduction() {
  // Variants
  const containerVar = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {delay: 1},
        when: "beforeChildren"
    }
  };

  const secondP = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {delay: 2},
    }
  }


  return (
    <div className="row intro">
      <h4>Hi, I'm </h4>
      <motion.h1 
      animate={{y:10}}
      transition={{type: 'spring', bounce: 1, duration: 5}}
      className='name'>Yoonsoo Nam</motion.h1>
      {/* <h1 className="name">Yoonsoo</h1> */}
      <motion.p variants={containerVar} 
      initial="hidden" animate="visible"
      style={{fontSize: '25px'}}
      >
        I'm a Developer, Surfer, Golfer, Former Sea Rescuer, Tech Lover, Foodie,
        Powerlifter, and a Water Drinker
      </motion.p>
      <motion.p variants={secondP} initial="hidden" animate="visible" data-end=" ;" className="building">
        Building my universe one semicolon at a time
      </motion.p>
      <div className="panel-body container btnBox">
        <Link to="more-me"
        spy={true} 
        smooth={true} 
        duration={100}
        delay={100}>
          <AniButton text='Get To Know Me!'></AniButton>
        </Link>
      </div>
    </div>
  );
}

export default Introduction;
