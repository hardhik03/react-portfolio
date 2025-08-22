import csulogo from "../assets/csulogo.png";
import energylogo from "../assets/energyinstitute.png";
import alfaleus from "../assets/alfaleus.jpg";
import apgenco from "../assets/apgenco.jpg";
import iste from "../assets/iste.png";
import toshiba from "../assets/toshiba.jpg";
import {motion} from 'framer-motion';

const experiences = [
  {
    company: "Colorado State University",
    logo: csulogo,
    role: "Teaching Assistant",
    period: "Jan 2025 - May 2025",
    description:
      "Supported the courses ECE251 and ECE571 by evaluating over 150 assignments, quizzes, and exams. Provided constructive feedback to enhance student understanding of core electrical and microprocessor concepts.",
    skills: ["Microprocessors", "Academic Mentorship", "Evaluation"],
  },
  {
    company: "Electrical and Computer Engineering Department, CSU",
    logo: csulogo,
    role: "President, ECEGSA",
    period: "Sept 2024 - May 2025",
    description:
      "Led the Electrical and Computer Engineering Graduate Student Association (ECEGSA), advocating for student needs and facilitating communication between students and faculty. Organized workshops and events to enhance professional development and community engagement.",
    skills: ["Leadership", "Advocacy", "Event Planning", "Communication", "Team Collaboration"],
  },
  {
    company: "Blue Green Decisions Lab, Energy Institute",
    logo: energylogo,
    role: "Research Assistant",
    period: "Nov 2023 - Aug 2024",
    description:
      "Developed an Arduino-based data acquisition system that reduced monitoring errors by 30%. Designed and implemented MATLAB Simulink models to analyze electricity usage patterns in smart thermostats, delivering actionable insights from real-time datasets.",
    skills: ["MATLAB Simulink", "Arduino", "Data Acquisition", "Energy Monitoring", "Research"],
  },
  {
    company: "Alfaleus Technology Pvt Ltd, India",
    logo: alfaleus,
    role: "Electronics Intern",
    period: "Dec 2022 - Jun 2023",
    description:
      "Engineered an eye drop detection system using BLE and pressure sensors, achieving 92% accuracy. Researched and prototyped an IR-based eyesight screening device using Raspberry Pi and OpenCV, supporting early-stage healthcare innovation.",
    skills: ["Microprocessors", "Embedded Systems", "Computer Vision", "Healthcare Technology", "BLE Communication", "PCB Design"],
  },
  {
    company: "Toshiba Transmission and Distribution Systems, India",
    logo: toshiba,
    role: "Industrial Apprenctice",
    period: "Nov 2022 - Dec 2022",
    description:
      "Refined understanding of transformer testing procedures to ensure compliance with industry standards. Worked on winding, insulation, and core assembly analysis while developing knowledge of large-scale power equipment quality assurance.",
    skills: ["Power Distribution", "Electrical Components", "Transformer Testing"],
  },
  {
    company: "APGENCO, India",
    logo: apgenco,
    role: "Industrial Apprenctice",
    period: "Jul 2021 - Aug 2021",
    description:
      "Gained hands-on exposure to power generation, transmission, and distribution systems. Learned operational procedures and analyzed critical electrical components including switchgear, isolators, SF₆ and air circuit breakers, as well as SCADA systems.",
    skills: ["Power Generation", "Industrial Automation", "Power Systems", "SCADA"],
  },
];

const ExperienceCard = ({ exp, align = "left" }) => {
  const isLeft = align === "left";

  return (
    <motion.div 
    whileInView={{opacity:1, y:0 }}
    initial={{opacity:0, y:100 }}
    transition={{duration: 0.5}}
    className={`relative w-full flex ${isLeft ? "justify-start" : "justify-end"} mb-20`}>
      <div
        className={`bg-[#181824]/90 border border-[#282848] shadow-md rounded-xl p-4 md:p-6 max-w-[480px] z-10 relative
        ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
      >
        {/* Logo */}
        <img
          src={exp.logo}
          alt={`${exp.company} logo`}
          className="absolute top-4 right-4 w-10 h-10 object-contain rounded"
        />

        <h3 className="text-white font-bold text-xl mb-1">{exp.role}</h3>
        <div className="text-gray-300 text-sm">{exp.company}</div>
        <div className="text-gray-400 text-xs mb-4">{exp.period}</div>
        <p className="text-gray-300 mb-4">{exp.description}</p>
        <span className="text-white font-semibold mb-2 block">Skills:</span>
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-purple-600/80 text-white text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-600 border-4 border-white rounded-full z-20"></div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="relative px-4 py-20 bg-transparent w-full overflow-x-hidden" id="experience">
      <motion.h2
       whileInView={{opacity:1, y:0 }}
            initial={{opacity:0, y:100 }}
            transition={{duration: 0.5}} className="text-4xl text-white font-extrabold text-center mb-10">
        Experience
        <div className="w-50 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
      </motion.h2>

      <div className="hidden md:block absolute left-1/2 top-32 bottom-24 w-[2px] bg-purple-600 z-0"></div>

      <div className="relative z-10 flex flex-col gap-10 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            exp={exp}
            align={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>

      <div className="relative w-full mt-[-1rem] flex justify-center items-center z-10">
        <div className="absolute w-40 h-1 bg-purple-500 rounded-full"></div>
        <div className="w-5 h-5 bg-purple-600 border-4 border-white rounded-full z-10"></div>
      </div>
    </section>
  );
};

export default Experience;
