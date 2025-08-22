import {motion} from 'framer-motion';

const iconvariants = (duration) => ({
    initial: {y:-10},
    animate:{
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
    }
}});


const skills = {
  programming: [
    { name: "C", color: "text-[#00599c]" },
    { name: "C++", color: "text-[#00599c]" },
    { name: "Embedded C", color: "text-[#5c6bc0]" },
    { name: "Python", color: "text-[#3776ab]" },
    { name: "MATLAB", color: "text-[#e16737]" },
    { name: "React JS", color: "text-[#61dafb]" },
    { name: "Tailwind CSS", color: "text-[#38bdf8]" },
  ],
  simulation: [
    { name: "MATLAB Simulink", color: "text-[#e16737]" },
    { name: "PSCAD", color: "text-[#ffb300]" },
    { name: "AutoCAD Electrical", color: "text-[#dd1b16]" },
    { name: "SolidWorks", color: "text-[#ff6c37]" },
    { name: "Proteus", color: "text-[#30aabc]" },
    { name: "Altium Designer", color: "text-[#a974d6]" },
    { name: "Cadence", color: "text-[#f47920]" },
    { name: "Eagle", color: "text-[#ff0000]" },
  ],
  hardware: [
    { name: "STM32", color: "text-[#0098d4]" },
    { name: "Arduino", color: "text-[#00979d]" },
    { name: "Raspberry Pi", color: "text-[#c51a4a]" },
    { name: "dSPACE", color: "text-[#003e74]" },
    { name: "Seeed Studio ", color: "text-[#7e57c2]" },
    { name: "Oscilloscope", color: "text-[#546e7a]" },
    { name: "Multimeter", color: "text-[#455a64]" },
  ],
  softSkills: [
    { name: "Leadership", color: "text-[#7c3aed]" },
    { name: "Team Collaboration", color: "text-[#14b8a6]" },
    { name: "Technical Communication", color: "text-[#06b6d4]" },
    { name: "Academic Mentorship", color: "text-[#6366f1]" },
    { name: "Event Organization", color: "text-[#ec4899]" },
    { name: "Problem Solving", color: "text-[#facc15]" },
  ],
};

const neonStyles = `
.neon-card {
  position: relative;
  border-radius: 1.5rem;
  padding: 2rem;
  margin: 1.5rem;
  background: transparent;
  overflow: hidden;
}
.neon-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 3px;
  background: linear-gradient(270deg, #a855f7,  #38bdf8, #a855f7);
  background-size: 600% 600%;
  z-index: 0;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: border-move 3s linear infinite;
}
@keyframes border-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.neon-card-content {
  position: relative;
  z-index: 1;
}
`;

const SkillCard = ({ title, items }) => (
  <motion.div 
  variants={iconvariants(2.5)}
  initial="initial"
  animate="animate"
  className="neon-card min-w-[280px] flex-1">
    <div className="neon-card-content">
      <h3 className="text-2xl font-semibold text-center text-gray-100 mb-6">{title}</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {items.map((item) => (
          <span
            key={item.name}
            className={`px-5 py-2 rounded-lg font-semibold text-base bg-transparent ${item.color} shadow-none border border-[#222]`}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Technologies = () => (
  <>
    <style>{neonStyles}</style>
    <section className="w-full px-4 py-16 flex flex-col items-center" id="skills">
      <motion.h2
       whileInView={{opacity:1, y:0 }}
            initial={{opacity:0, y:-100 }}
            transition={{duration: 0.5}} className="text-4xl font-extrabold text-center text-white mb-2 tracking-wide">
        Skills <span className="text-purple-500">& Expertise</span>
        <div className="w-auto h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
      </motion.h2>
      <div className="w-full text-center text-gray-300 mb-10 text-lg">
        A collection of my technical skills and expertise honed through hands-on engineering and research projects
      </div>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        <SkillCard title="Programming & Scripting" items={skills.programming} />
        <SkillCard title="Simulation & Design Tools" items={skills.simulation} />
      </div>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mt-8">
        <SkillCard title="Hardware & Lab Tools" items={skills.hardware} />
        <SkillCard title="Soft Skills" items={skills.softSkills} />
      </div>
    </section>
  </>
);

export default Technologies;
