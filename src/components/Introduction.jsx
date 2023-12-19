import React, { useState, useEffect } from "react";
import coverImage from '../assets/cover.jpg'; 
import AniButton from "./AniButton";
import Typewriter from "./TypeWriter";
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
        transition: {delay: 2},
        when: "beforeChildren"
    }
  };

  const secondP = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {delay: 2.5},
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative">
      <div 
          style={{ backgroundImage: `url(${coverImage})`, height: '100vh'}}
          className={`bg-cover bg-center transition-opacity flex flex-col justify-between`}>
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-white text-center mb-8 px-8 text-4xl font-bold lg:text-8xl">
                <Typewriter text="Hi, I'm Yoonsoo!" delay={100} />
              </div>
              <motion.div variants={containerVar} initial="hidden" animate="visible" className="text-white text-center mb-4 px-8 text-2xl lg:text-5xl">
                Welcome to my personal space where I present things I have been doing and have done
              </motion.div>
            </div>            
              
            <motion.div variants={secondP} initial="hidden" animate="visible">
              <div className="flex justify-center mb-2">
                <div className="btnBox">
                    <Link to="more-me"
                    spy={true} 
                    smooth={true} 
                    duration={100}
                    delay={100}>
                      <AniButton text='More Things?'></AniButton>
                    </Link>
                  </div>
              </div>
              <div className="text-white text-center mb-4 px-16 text-xl lg:text-3xl">
                Starting with the picture I took here of my hometown, Busan! 😃
              </div>
            </motion.div>
      </div>
    </div>
  );
}

export default Introduction;
