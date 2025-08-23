import React from 'react';
import profilepic from '../assets/profilepic.jpg';
import TypingText from './TypingText';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] w-full px-8">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center lg:items-start items-center text-left lg:pr-12">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-6xl lg:text-8xl font-light tracking-tight mb-6 text-gray-100 leading-tight"
        >
          Hardhik Pyla
        </motion.h1>

        <div className="mb-6">
  <div className="text-2xl lg:text-3xl font-normal text-white flex flex-row items-center">
    <span>I am a&nbsp;</span>
    <span
      className="inline-block whitespace-nowrap w-[18ch] overflow-hidden"
    >
      <TypingText
        textArray={["Electrical Engineer", "Systems Thinker", "Problem Solver"]}
        speed={75}
        pause={1000}
      />
    </span>
  </div>
</div>



        <motion.p
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="text-base lg:text-lg text-gray-300 max-w-xl"
        >
          <span>
            I’m Hardhik, an Electrical Systems Engineer specializing in power electronics,
            renewable integration, Electric Vehicles and of course Electrical Systems. My{' '}
          </span>
          <span className="text-purple-500 font-semibold text-xl">Passion ?</span> Designing
          solutions that don’t just work, they transform how we use energy.
        </motion.p>
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center mt-10 lg:mt-0">
        <motion.img
          variants={container(0)}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          src={profilepic}
          alt="Profile"
          className="rounded-xl object-cover w-auto h-auto max-w-xs shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
