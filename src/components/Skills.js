import React, { useRef, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function Skills() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const skillsRow1 = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Bootstrap",
  ];

  const skillsRow2 = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "Context API",
    "React Router",
  ];

  /* =============================
     MOUSE PARALLAX (3D DEPTH)
  ==============================*/
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-400, 400], [10, -10]);
  const rotateY = useTransform(mouseX, [-400, 400], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  /* =============================
     MAGNETIC CURSOR GLOW
  ==============================*/
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  /* =============================
     PARTICLE BACKGROUND
  ==============================*/
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.6)";
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    const cleanup = initParticles();
    return cleanup;
  }, [initParticles]);

  /* =============================
     STAGGER ANIMATION
  ==============================*/
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 80, scale: 0.7 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="skills"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* PARTICLES */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      {/* NEON GRID */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#00ffff22_1px,transparent_1px),linear-gradient(90deg,#00ffff22_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* CURSOR GLOW */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="pointer-events-none absolute w-72 h-72 rounded-full blur-3xl bg-cyan-500/30"
      />

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10"
      >
        <h2 className="text-5xl font-display font-bold text-center gradient-text mb-20">
          Skills
        </h2>

        {/* ROW 1 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            animate={{ x: ["-30%", "30%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 18,
              ease: "linear",
            }}
            className="flex gap-8"
          >
            {skillsRow1.map((skill, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.2, y: -12 }}
                className="
                  px-8 py-4
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-cyan-400/20
                  text-white font-semibold
                  shadow-[0_0_25px_rgba(0,255,255,0.2)]
                  hover:shadow-[0_0_60px_rgba(0,255,255,0.8)]
                  transition-all duration-300
                  cursor-default
                "
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ROW 2 CRISS CROSS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ x: ["30%", "-30%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "linear",
            }}
            className="flex gap-8"
          >
            {skillsRow2.map((skill, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.2, y: -12 }}
                className="
                  px-8 py-4
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-purple-400/20
                  text-white font-semibold
                  shadow-[0_0_25px_rgba(168,85,247,0.25)]
                  hover:shadow-[0_0_65px_rgba(168,85,247,0.9)]
                  transition-all duration-300
                  cursor-default
                "
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
