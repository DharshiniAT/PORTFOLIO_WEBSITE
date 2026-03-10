import { useState, useEffect } from "react";

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "services",
  "certificates",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);

      navItems.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 150;
        const h = section.offsetHeight;

        if (scrollTop >= top && scrollTop < top + h) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  const spotlightMove = (e) => {
    const nav = e.currentTarget;
    const rect = nav.getBoundingClientRect();
    nav.style.setProperty("--x", `${e.clientX - rect.left}px`);
    nav.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-[60]
        transition-all duration-200"
        style={{ width: `${progress}%` }}
      />

      <nav
        onMouseMove={spotlightMove}
        className={`
        fixed top-4 left-1/2 -translate-x-1/2
        w-[92%] max-w-6xl z-50
        rounded-2xl
        backdrop-blur-xl
        border border-white/10
        transition-all duration-500
        ${scrolled
          ? "py-2 bg-slate-900/70 shadow-[0_0_50px_rgba(34,211,238,0.25)]"
          : "py-4 bg-white/5"
        }
      `}
      >
        {/* SPOTLIGHT GLOW */}
        <div
          className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-40
          [background:radial-gradient(circle_at_var(--x)_var(--y),rgba(34,211,238,0.25),transparent_40%)]
        "
        />

        <div className="flex justify-between items-center px-6">
          {/* LOGO / BRAND */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="text-xl font-display font-bold tracking-tight group"
          >
            <span className="gradient-text">D</span>
            <span className="text-white group-hover:text-cyan-400 transition duration-300">
              harshini
            </span>
          </a>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white text-2xl z-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* NAV LINKS */}
          <div
            className={`
            absolute md:static top-16 left-0 w-full md:w-auto
            bg-slate-900/95 md:bg-transparent
            backdrop-blur-xl md:backdrop-blur-none
            rounded-b-2xl md:rounded-none
            transition-all duration-500
            ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-6 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
            }
          `}
          >
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-0 items-center">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => scrollToSection(e, item)}
                  className={`relative text-sm font-medium transition duration-300
                  ${
                    active === item
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}

                  <span
                    className={`absolute -bottom-1 left-0 h-[2px]
                    bg-cyan-400 shadow-[0_0_12px_cyan]
                    transition-all duration-300
                    ${active === item ? "w-full" : "w-0"}
                  `}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
