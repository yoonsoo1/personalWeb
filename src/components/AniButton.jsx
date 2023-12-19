import React from 'react';
import {motion} from 'framer-motion'

function AniButton(props) {

  return <div>
        <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className='hoverEffect btn-color rounded-full px-4 text-white font-bold py-2'
          >
            {props.text}
        </motion.button>
  </div>;
}

export default AniButton;
