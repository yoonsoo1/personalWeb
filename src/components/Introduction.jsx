import React from "react";
import AniButton from "./AniButton";
import { motion } from "framer-motion";

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
      >
        I'm a Developer, Surfer, Golfer, Former Sea Rescuer, Tech Lover, Foodie,
        Powerlifter, Water Drinker, and a Trojan
      </motion.p>
      <motion.p variants={secondP} initial="hidden" animate="visible" data-end=" ;" className="building">
        Building my universe one semicolon at a time
      </motion.p>
      <div className="panel-body container btnBox">
        <AniButton></AniButton>
      </div>
    </div>
  );
}

export default Introduction;
