import React from 'react';
import {motion} from 'framer-motion'

function AniButton(props) {

  return <div>
        <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className='btn btn-outline-primary hoverEffect'
          >
            {props.text}
        </motion.button>
  </div>;
}

export default AniButton;
