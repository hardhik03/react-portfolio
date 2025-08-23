import { motion } from "framer-motion";
import csulogo from "../assets/csulogo.png";
import energylogo from "../assets/energyinstitute.png";
import alfaleus from "../assets/alfaleus.jpg";
import apgenco from "../assets/apgenco.jpg";
import toshiba from "../assets/toshiba.jpg";

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
    <div className={`relative w-full flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"} mb-20`}>
      {/* Connector Line and Dot */}
      <div
        className={`hidden md:block absolute top-1/2 ${isLeft ? "left-0 -translate-x-[140%]" : "right-0 translate-x-[140%]"} -translate-y-1/2 z-20`}
      >
        <div className={`absolute top-1/2 -translate-y-1/2 h-[2px] w-8 bg-purple-600 ${isLeft ? "right-full" : "left-full"}`} />
        <div className="w-4 h-4 bg-purple-600 border-4 border-white rounded-full"></div>
      </div>

      {/* Experience Card */}
      <div
        className={`bg-[#181824]/90 border border-[#282848] shadow-md rounded-xl p-4 md:p-6 max-w-[480px] w-full z-10 relative
        ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
      >
        <img src={exp.logo} alt={`${exp.company} logo`} className="absolute top-4 right-4 w-10 h-10 object-contain rounded" />
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
    </div>
  );
};

const Experience = () => {
  return (
    <section className="relative px-4 py-20 bg-transparent w-full overflow-x-hidden" id="experience">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-white"
        >
          Experience <span className="text-purple-500"> </span>
        </motion.h2>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-56 h-1 bg-purple-500 mx-auto mt-2 rounded-full"
        />
      </div>

      <div className="hidden md:block absolute left-1/2 top-[220px] bottom-0 w-[2px] bg-purple-600 z-0" />

      <div className="relative z-10 flex flex-col gap-10 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} align={idx % 2 === 0 ? "left" : "right"} />
        ))}
      </div>

      <div className="relative w-full mt-[-1rem] flex justify-center items-center z-10">
        <div className="w-5 h-5 bg-purple-600 border-4 border-white rounded-full z-10"></div>
      </div>
    </section>
  );
};

export default Experience;
