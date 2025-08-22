import solargrid from "../assets/solartogrid.png"
import cell from "../assets/cellbalancing.png"
import smartmeter from "../assets/smartenergy.png"
import portfolio from "../assets/portfolio.png" 
import virtualassist from "../assets/virtualassist.png"
import { motion } from "framer-motion"  

const projects = [
  {
    title: "Solar to Grid connected PV System",
    image: solargrid,
    description:
      "Designed and simulated a grid-connected solar photovoltaic system using MATLAB Simulink and App Designer for real-time performance monitoring. Implemented DC-DC converters and DC-AC inverters, achieving stable grid integration with less than 2% voltage fluctuation across varying loads. Validated performance through hardware implementation with dSPACE systems and integrated sensors.",
    skills: [
      "MATLAB Simulink", "App Designer", "Power Electronics", "Grid Integration", "Real-time Monitoring", "dSPACE Systems", "Sensor Integration",
    ],
    link: "",
  },
  {
    title: "Cell Balancing System for EV using Solar Energy",
    image: cell,
    description:
      "Simulated an onboard battery charger for EV battery module balancing using MATLAB Simulink, optimizing solar-based charging distribution. Designed adaptive charging algorithms to balance cells by prioritizing lower state-of-charge modules, reducing recharge time and improving system efficiency.",
    skills: ["MATLAB Simulink", "Renewable Energy", "Electric Vehicles", "Battery Management", "Adaptive Algorithms"],
    link: "",
  },
  {
    title: "Smart Energy Meter",
    image: smartmeter,
    description:
      "Developed a smart energy meter using Arduino and IoT technology for real-time energy consumption monitoring. Implemented a user-friendly mobile app for remote monitoring and control, enabling users to track their energy usage patterns and receive alerts for unusual consumption.",
    skills: ["Arduino", "IoT", "Mobile App Development", "Energy Monitoring", "Real-time Alerts"],
    link: "",
  },
  {
    title: "Personal Portfolio Website",
    image: portfolio,
    description:
      "Built a responsive and interactive portfolio website using React and TailwindCSS, with custom SVG-based animations to showcase projects, skills, and professional experiences. Designed with a focus on clean UI, dynamic backgrounds, and engaging content presentation.",
    skills: ["React", "TailwindCSS", "JavaScript", "Frontend Development"],
    link: "",
  },
  {
    title: "Voice-enabled Virtual Assistant (Workshop Project)",
    image: virtualassist,
    description:
      "Created a voice-enabled virtual assistant using Python during a hands-on workshop as a speaker. Implemented speech recognition and text-to-speech features to process user commands and provide responses, introducing practical applications of Python libraries for automation and AI.",
    skills: ["Python", "Natural Language Processing", "Speech Recognition", "Text-to-Speech", "Machine Automation"],
    link: "https://www.youtube.com/watch?v=2uXDPUHKuk0&list=PLtArheW_rmIY5XaLcEvzslM3Jobz5l_gX",
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 w-full bg-transparent" id="projects">
      <motion.h2 
      whileInView={{opacity:1, y:0 }}
            initial={{opacity:0, y:-100 }}
            transition={{duration: 0.5}}      
      className="text-3xl text-white font-extrabold text-center mb-16">
        Projects
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-20">
        {projects.map((project, index) => (
          <div
          
            key={index}
            className="w-full flex flex-col md:flex-row items-center justify-center gap-8"
          >
            {/* Image (clickable) */}
            <motion.a
            whileInView={{opacity:1, x:0 }}
            initial={{opacity:0, x:-100 }}
            transition={{duration: 1}}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block flex-shrink-0 w-72 h-56 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fit"
              />
            </motion.a>

            {/* Text Content */}
            <motion.div 
            whileInView={{opacity:1, x:0 }}
            initial={{opacity:0, x:100 }}
            transition={{duration: 1}}
            className="max-w-2xl text-center md:text-left">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 text-2xl font-semibold hover:underline block"
              >
                {project.title}
              </a>
              <p className="text-gray-300 mt-2 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 rounded-md bg-[#0f0f12] text-purple-500 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
