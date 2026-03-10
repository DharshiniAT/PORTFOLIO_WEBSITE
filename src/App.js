import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Certificates from "./components/Certificates";

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden font-sans">
      <Navbar />

      <Hero />
      <div className="section-divider" />

      <About />
      <div className="section-divider" />

      <Skills />
      <div className="section-divider" />

      <Projects />
      <div className="section-divider" />

      <Experience />
      <div className="section-divider" />

      <Services />
      <div className="section-divider" />

      <Certificates />
      <div className="section-divider" />

      <Contact />
      <Footer />

      {/* ─── BACK TO TOP BUTTON ─── */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50
            w-12 h-12 rounded-full
            bg-gradient-to-r from-cyan-500 to-purple-600
            flex items-center justify-center
            shadow-[0_0_30px_rgba(34,211,238,0.4)]
            hover:shadow-[0_0_50px_rgba(34,211,238,0.7)]
            hover:scale-110
            transition-all duration-300
            animate-bounce-up"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
}

export default App;
