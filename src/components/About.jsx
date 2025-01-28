import React from 'react'
import {Tilt} from 'react-tilt'; 
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      variants={fadeIn("", "", 0.1, 1)}
      >
        I'm an 18 year old Computer Engineering student at the University of Waterloo. I'm passionate about machine learning, robotics, fintech and game development. I'm a huge Formula 1 fan and in my free time, I love reading and playing sports like cricket or soccer.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")