import { Github, Linkedin, Mail, Heart } from "lucide-react";

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

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/DharshiniAT",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/dharshini35/",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:atdharshini709@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900/80 border-t border-slate-800">
      {/* GLOW LINE */}
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* BRAND */}
          <div>
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-2xl font-display font-bold mb-4 inline-block"
            >
              <span className="gradient-text">D</span>
              <span className="text-white">harshini</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              MCA Graduate & MERN Stack Developer building modern, scalable web
              applications with passion and precision.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => scrollToSection(e, item)}
                  className="text-gray-400 text-sm hover:text-cyan-400 transition duration-300 py-1"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10
                    flex items-center justify-center text-gray-400
                    hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5
                    transition-all duration-300 hover:scale-110
                    hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Feel free to reach out for collaborations or opportunities!
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Dharshini A T. Made with
            <Heart className="w-4 h-4 text-pink-500 inline" />
          </p>
          <p className="text-gray-600 text-xs">
            MERN Stack Developer • React • Node.js • MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
}
