import { FaCertificate, FaBook, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    {
      title: "MERN Stack Development Certificate",
      desc: "Successfully completed a 6-month intensive MERN stack development course. Gained hands-on experience in MongoDB, Express, React, Node.js, building full-stack web applications including mini and major projects.",
      icon: <FaCertificate />,
      color: "cyan",
    },
    {
      title: "Journal – Air Monitoring System (IoT)",
      desc: "Presented a journal on IoT-based Air Monitoring System, focusing on real-time monitoring, sensor integration, and data analysis to track air quality.",
      icon: <FaBook />,
      color: "green",
    },
    {
      title: "Publication – AI-powered Hyper-Personalization",
      desc: "Published a proceeding/book chapter on AI-powered hyper-personalization in customer services, exploring personalized recommendation systems, AI algorithms, and enhancing customer experience.",
      icon: <FaFileAlt />,
      color: "purple",
    },
  ];

  const colorMap = {
    cyan: {
      text: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/20",
      glow: "group-hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]",
    },
    green: {
      text: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/20",
      glow: "group-hover:shadow-[0_0_35px_rgba(74,222,128,0.4)]",
    },
    purple: {
      text: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
      glow: "group-hover:shadow-[0_0_35px_rgba(192,132,252,0.4)]",
    },
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
    <section id="certificates" className="py-24 max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl text-center font-display font-bold gradient-text mb-6"
      >
        Certificates & Publications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-center mb-16 max-w-xl mx-auto"
      >
        Credentials that showcase my dedication to learning
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificates.map((cert, index) => {
          const colors = colorMap[cert.color];
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group perspective"
            >
              <div
                className={`relative bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 shadow-xl
                           border border-slate-700
                           transform transition-all duration-500
                           group-hover:scale-[1.03]
                           ${colors.glow}
                           group-hover:border-opacity-50
                           cursor-pointer overflow-hidden
                           h-full flex flex-col`}
              >
                {/* Background glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border
                  flex items-center justify-center text-2xl ${colors.text} mb-5
                  group-hover:scale-110 transition-transform duration-300`}
                >
                  {cert.icon}
                </div>

                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-cyan-400 transition">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
