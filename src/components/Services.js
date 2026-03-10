import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaPalette,
  FaProjectDiagram,
  FaDatabase,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Build responsive, modern websites using React.js, Tailwind CSS, HTML, and CSS with interactive UI and smooth performance.",
      icon: <FaLaptopCode />,
      color: "cyan",
    },
    {
      title: "MERN Stack Development",
      desc: "Develop full-stack applications using MongoDB, Express, React, and Node.js including CRUD operations, APIs, and database integration.",
      icon: <FaDatabase />,
      color: "green",
    },
    {
      title: "E-commerce & Landing Pages",
      desc: "Create responsive e-commerce websites and landing pages with modern layouts, product showcase, and optimized user experience.",
      icon: <FaShoppingCart />,
      color: "purple",
    },
    {
      title: "UI/UX Enhancements & Website Clones",
      desc: "Design modern interfaces and clone popular websites to enhance UI/UX skills with animations and smooth interactions.",
      icon: <FaPalette />,
      color: "pink",
    },
    {
      title: "Project Implementation & Support",
      desc: "Assist in building projects, debugging issues, deployment, and maintaining scalable web applications.",
      icon: <FaProjectDiagram />,
      color: "orange",
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
    pink: {
      text: "text-pink-400",
      bg: "bg-pink-400/10",
      border: "border-pink-400/20",
      glow: "group-hover:shadow-[0_0_35px_rgba(244,114,182,0.4)]",
    },
    orange: {
      text: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "border-orange-400/20",
      glow: "group-hover:shadow-[0_0_35px_rgba(251,146,60,0.4)]",
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
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
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl text-center font-display font-bold gradient-text mb-6"
      >
        Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-center mb-16 max-w-xl mx-auto"
      >
        What I can help you build
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => {
          const colors = colorMap[service.color];
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              <div
                className={`relative bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 shadow-xl
                border border-slate-700
                transform transition-all duration-500
                group-hover:scale-[1.03]
                group-hover:border-opacity-50
                ${colors.glow}
                cursor-pointer overflow-hidden
                h-full flex flex-col`}
              >
                {/* Background glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />

                {/* ICON */}
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border
                  flex items-center justify-center text-2xl ${colors.text} mb-5
                  group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
