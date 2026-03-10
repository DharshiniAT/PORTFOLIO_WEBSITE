import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal developer portfolio built with React + Tailwind with modern UI and smooth scrolling.",
      github: "https://github.com/DharshiniAT",
      live: "#",
      tech: ["react", "tailwind", "html", "css"],
      category: "frontend",
    },
    {
      title: "Manufacturing Management System",
      desc: "MERN stack app with Admin, Supplier, and Inventory modules for managing workflow.",
      github: "https://github.com/DharshiniAT",
      live: "#",
      tech: ["react", "node", "mongodb", "tailwind"],
      category: "fullstack",
    },
    {
      title: "Stripe Website Clone",
      desc: "Responsive landing page inspired by Stripe with modern layouts and reusable components.",
      github: "https://github.com/DharshiniAT",
      live: "#",
      tech: ["react", "tailwind", "html", "css"],
      category: "frontend",
    },
    {
      title: "Business Website – UI Component Development",
      desc: "Contributed to a live business website by designing and developing a responsive UI component using HTML and CSS. Focused on clean layout structure, responsive styling, and pixel-perfect implementation based on design requirements within a collaborative development environment.",
      github: "https://github.com/DharshiniAT",
      live: "#",
      tech: ["html", "css"],
      category: "frontend",
    },
    {
      title: "Myntra UI Clone",
      desc: "E-commerce frontend clone with product grids, navbar interactions, and responsive design.",
      github: "https://github.com/DharshiniAT",
      live: "#",
      tech: ["react", "tailwind", "html", "css"],
      category: "frontend",
    },
    {
      title: "Cadbury Product Website",
      desc: "Brand-based website clone with animations, product showcase sections, and attractive UI.",
      github: "https://github.com/DharshiniAT",
      live: "#",
      tech: ["html", "css", "tailwind"],
      category: "frontend",
    },
    {
      title: "Ponds Skincare Landing Page",
      desc: "Clean and elegant landing page with Flexbox, responsive layouts, and smooth hover effects.",
      github: "https://github.com/DharshiniAT",
      live: "#",
      tech: ["react", "tailwind"],
      category: "frontend",
    },
    {
      title: "Ice Cream & Dairy Product Landing Page",
      desc: "Responsive landing page designed for an ice cream and dairy brand showcasing products, featured flavors, promotional sections, and contact information with a clean and modern UI.",
      github: "https://github.com/DharshiniAT",
      live: "#",
      tech: ["html", "css"],
      category: "frontend",
    },
    {
      title: "Login Page Design",
      desc: "Stylish responsive login page with modern input animations and clean UI.",
      github: "https://github.com/DharshiniAT",
      live: "#",
      tech: ["react", "tailwind"],
      category: "frontend",
    },
  ];

  const techIcons = {
    react: <FaReact className="text-blue-400" />,
    tailwind: <SiTailwindcss className="text-cyan-400" />,
    html: <FaHtml5 className="text-orange-500" />,
    css: <FaCss3Alt className="text-blue-500" />,
    node: <FaNodeJs className="text-green-500" />,
    mongodb: <SiMongodb className="text-green-400" />,
  };

  const categories = [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl text-center font-display font-bold gradient-text mb-6"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-center mb-12 max-w-xl mx-auto"
      >
        A collection of projects showcasing my skills in web development
      </motion.p>

      {/* FILTER TABS */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium
              transition-all duration-300 border
              ${
                filter === cat.key
                  ? "bg-cyan-400/20 border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={filter}
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              layout
              className="relative group perspective"
            >
              <div
                className="relative bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 shadow-xl
                           border border-slate-700
                           transform transition-all duration-500
                           group-hover:scale-[1.03]
                           group-hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]
                           group-hover:border-cyan-400/30
                           cursor-pointer overflow-hidden
                           h-full flex flex-col"
              >
                {/* Neon animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />

                {/* PROJECT NUMBER */}
                <span className="absolute top-4 right-4 text-5xl font-bold text-white/5 font-display">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {project.desc}
                </p>

                {/* Tech icons */}
                <div className="flex gap-3 mb-4">
                  {project.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="text-xl opacity-60 group-hover:opacity-100 transition duration-500"
                    >
                      {techIcons[tech]}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-700/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400
                      hover:text-white transition px-3 py-1.5 rounded-lg
                      hover:bg-white/5"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400
                      hover:text-cyan-400 transition px-3 py-1.5 rounded-lg
                      hover:bg-cyan-400/5"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
