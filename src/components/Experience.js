import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack Intern",
      company: "Corizo (Online)",
      duration: "2 Months",
      description: [
        "Completed a 2-month online internship focused on MERN stack development.",
        "Developed a CRUD web application as a mini-project using MongoDB, Express, React, and Node.js.",
        "Built a fully responsive e-commerce website as a major project with product listing and cart management.",
        "Worked on frontend-backend integration, REST APIs, and database management.",
        "Used Git for version control and followed agile development workflow.",
      ],
      tech: ["react", "node", "mongodb", "tailwind", "database"],
    },
  ];

  const techIcons = {
    react: <FaReact className="text-blue-400" />,
    node: <FaNodeJs className="text-green-500" />,
    mongodb: <SiMongodb className="text-green-400" />,
    tailwind: <SiTailwindcss className="text-cyan-400" />,
    database: <FaDatabase className="text-orange-400" />,
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl text-center font-display font-bold gradient-text mb-6"
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-center mb-16 max-w-xl mx-auto"
      >
        My professional journey and hands-on experience
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative group"
          >
            {/* TIMELINE DOT */}
            <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(34,211,238,0.5)] hidden md:block" />
            <div className="absolute -left-[1px] top-14 w-[2px] h-[calc(100%-56px)] bg-gradient-to-b from-cyan-400/50 to-transparent hidden md:block" />

            <div
              className="relative bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 shadow-xl
              border border-slate-700
              md:ml-8
              transform transition duration-500
              group-hover:scale-[1.02]
              group-hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]
              group-hover:border-cyan-400/30
              overflow-hidden"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />

              {/* HEADER */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 mt-1">{exp.company}</p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium">
                  {exp.duration}
                </span>
              </div>

              <ul className="text-gray-300 space-y-3 mb-6">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 text-2xl pt-4 border-t border-slate-700/50">
                {exp.tech.map((tech, idx) => (
                  <div
                    key={idx}
                    className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  >
                    {techIcons[tech]}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
