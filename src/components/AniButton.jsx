import React from 'react';
import {motion} from 'framer-motion'
import { useRef } from 'react';

function AniButton() {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()    

  return <div>
      <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className='btn btn-outline-primary hoverEffect'
        onClick={executeScroll}
        >
            Get to know me! 
      </motion.button>
  </div>;
}

export default AniButton;
