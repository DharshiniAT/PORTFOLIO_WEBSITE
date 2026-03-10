import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import profile from "../assests/profile.jpeg";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="about"
      className="relative py-24 px-6 max-w-5xl mx-auto"
      ref={ref}
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          text-5xl font-display font-bold text-center mb-16
          bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
          bg-clip-text text-transparent
        "
      >
        About Me
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group perspective"
        >
          {/* CARD */}
          <motion.div
            whileHover={{
              rotateY: 8,
              rotateX: -6,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              relative glass p-4 rounded-2xl
              h-[520px] overflow-hidden
              transform-style-preserve-3d
              shadow-xl
            "
          >
            {/* Animated Glow */}
            <div
              className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                opacity-0 group-hover:opacity-30
                blur-2xl transition duration-500
              "
            />

            {/* FLOATING IMAGE */}
            <motion.img
              src={profile}
              alt="Dharshini A T — MERN Stack Developer"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="
                w-full h-full
                object-cover
                object-[center_25%]
                rounded-xl
                scale-105
              "
            />
          </motion.div>

          {/* BACKGROUND GLOW */}
          <div className="absolute -z-10 inset-0 blur-3xl bg-purple-600/30 group-hover:bg-cyan-500/30 transition duration-500" />
        </motion.div>

        {/* RIGHT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-300 leading-8 mb-8">
            I'm an MCA graduate and MERN Stack developer passionate about
            building scalable applications with modern UI experiences. I
            specialize in React ecosystems, API integration, and
            performance-focused frontend architecture.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 text-center mb-10">
            <Stat number={10} label="Projects" inView={inView} />
            <Stat number={15} label="Technologies" inView={inView} />
            <Stat number={100} label="Learning Hours" inView={inView} />
          </div>

          {/* SKILLS */}
          <SkillBar name="React / Frontend" percent={90} inView={inView} />
          <SkillBar name="Node & Express" percent={80} inView={inView} />
          <SkillBar name="MongoDB" percent={75} inView={inView} />
          <SkillBar name="UI / Animation" percent={85} inView={inView} />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- STAT COUNTER ---------- */

function Stat({ number, label, inView }) {
  return (
    <div className="glass p-4 rounded-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition duration-300">
      <h3 className="text-2xl font-bold text-cyan-400">
        {inView && <CountUp end={number} duration={2} />}+
      </h3>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

/* ---------- SKILL BAR ---------- */

function SkillBar({ name, percent, inView }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-cyan-400">{percent}%</span>
      </div>

      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percent}%` : 0 }}
          transition={{ duration: 1.5 }}
          className="
            h-full rounded-full
            bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
          "
        />
      </div>
    </div>
  );
}
