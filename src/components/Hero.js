import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import TextType from "./TextType";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen mt-8 flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-slate-900 to-black" />

      {/* Animated Orbs */}
      <div className="absolute w-72 h-72 bg-purple-600/30 blur-3xl rounded-full top-20 left-10 animate-pulse" />
      <div className="absolute w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full bottom-10 right-10 animate-pulse" />
      <div className="absolute w-48 h-48 bg-pink-500/20 blur-3xl rounded-full top-1/2 left-1/3 animate-float" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* STATUS BADGE */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6
            rounded-full border border-green-400/30 bg-green-400/5
            text-green-400 text-sm font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Greeting */}
        <motion.p
          className="text-white mb-2 tracking-widest font-light text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          HELLO , I'M
        </motion.p>

        {/* NAME */}
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
          <TextType
            text={[
              "DHARSHINI A T",
              "Frontend Developer",
              "Backend Developer",
              "MERN Stack Developer",
            ]}
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            className="
              bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
              bg-clip-text text-transparent
              drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]
            "
          />
        </h1>

        {/* ROLE */}
        <motion.h2
          className="text-xl md:text-2xl text-gray-300 mb-6 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          MCA Graduate • MERN Stack Developer 🚀
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className="max-w-2xl mx-auto text-gray-400 leading-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build modern, scalable and visually engaging web applications using
          the MERN stack. Passionate about crafting smooth user experiences,
          performance optimization, and creative UI animations.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="mt-8 flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* VIEW PROJECTS */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r
            from-purple-500 to-pink-500 font-semibold
            hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
            transition-all duration-300"
          >
            View Projects
          </a>

          {/* DOWNLOAD RESUME */}
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl border border-cyan-400/40
            hover:bg-cyan-400/10 hover:border-cyan-400
            transition-all duration-300 flex items-center gap-2
            font-medium"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-600
            hover:bg-gray-800 hover:border-gray-500
            transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          className="flex justify-center gap-6 mt-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://github.com/DharshiniAT"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 hover:border-cyan-400/50
              hover:bg-cyan-400/10 hover:text-white
              transition-all duration-300 hover:scale-110
              hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/dharshini35/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 hover:border-blue-400/50
              hover:bg-blue-400/10 hover:text-white
              transition-all duration-300 hover:scale-110
              hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:atdharshini709@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Dharshini,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
            className="p-3 rounded-full border border-white/10 hover:border-pink-400/50
              hover:bg-pink-400/10 hover:text-white
              transition-all duration-300 hover:scale-110
              hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#about"
        className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-500"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
