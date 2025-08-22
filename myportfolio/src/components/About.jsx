import aboutpic from '../assets/about.jpeg';
import {motion} from 'framer-motion';


const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] w-full px-8 mt-16" id='about'>
      
      {/* Left: Image */}
      <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
        <motion.img
            whileInView={{opacity:1, x:0 }}
            initial={{opacity:0, x:-100 }}
            transition={{duration: 0.5}}
            src={aboutpic}
            alt="About"
            className="w-full max-w-md lg:max-w-lg rounded-xl shadow-xl"
        />
      </div>

      {/* Right: Text */}
      <div
            
      className="flex-1 flex flex-col justify-center lg:items-start items-center text-left lg:pl-12">
        <h2 className="text-4xl font-light tracking-tight mb-6 text-gray-100">
          About <span className="text-purple-500 font-semibold">Me</span>
          <div className="w-auto h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
        </h2>
        <motion.p whileInView={{opacity:1, x:0 }}
            initial={{opacity:0, x:100 }}
            transition={{duration: 0.5}} className="text-base lg:text-lg text-white-400 max-w-xl">
        Hi, I’m Hardhik, an Electrical Engineer passionate about making energy systems smarter, cleaner, and more reliable. My work revolves around power electronics, renewable integration, and embedded control, where I enjoy turning theory into practical, real-world solutions. I’ve worked on projects like grid-connected solar PV systems, EV battery cell balancing, and smart energy meters, each pushing me to bridge the gap between simulation, hardware, and impact. For me, it’s not just about getting circuits to work it’s about designing systems that last and adapt.
        <br /> <br />  Beyond labs and MATLAB models, I’ve led teams, mentored peers, and taken on roles that taught me as much about people and problem-solving as about circuits and code. In short:<span className='text-purple-500'> I’m an engineer who thrives on challenges, keeps a systems-level view, and is driven by the belief that the future of energy deserves both precision and imagination.</span>
        </motion.p>
      </div>
    </section>
  );
}

export default About;
