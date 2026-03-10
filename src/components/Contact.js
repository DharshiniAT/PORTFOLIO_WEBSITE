import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const form = useRef();

  const [launch, setLaunch] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "" });

  /* ✅ REGEX */
  const nameRegex = /^[A-Za-z ]{2,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;

    let newErrors = { name: "", email: "" };

    if (!nameRegex.test(name))
      newErrors.name = "Only letters allowed (2–30 characters)";

    if (!emailRegex.test(email)) newErrors.email = "Enter valid email address";

    setErrors(newErrors);
    if (newErrors.name || newErrors.email) return;

    /* 🚀 START CINEMA */
    setLaunch(true);

    setTimeout(() => {
      emailjs.sendForm(
        "service_ku649oa",
        "template_qwt2oht",
        form.current,
        "mZlLvUhYlfHoZP41o"
      );

      form.current.reset();
      setShowPopup(true);
    }, 2600);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "atdharshini709@gmail.com",
      href: "mailto:atdharshini709@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "India",
      href: null,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Availability",
      value: "Open to opportunities",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-slate-950 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl text-center font-display font-bold gradient-text mb-6"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-center mb-16 max-w-xl mx-auto"
      >
        Have a project in mind? Let's work together to make it happen!
      </motion.p>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-12">
        {/* LEFT — CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-6"
        >
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-cyan-400/30 hover:bg-cyan-400/5
                transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-200 text-sm hover:text-cyan-400 transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-200 text-sm">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5 bg-white/5 backdrop-blur-lg
              border border-white/10 p-8 rounded-2xl shadow-xl
              hover:border-cyan-400/20 transition-colors duration-500"
          >
            {/* NAME */}
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Name</label>
              <input
                name="user_name"
                placeholder="Your name"
                className="w-full p-3 rounded-xl bg-slate-900/80 border border-slate-700
                  focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                  outline-none transition-all duration-300
                  placeholder:text-gray-600"
                required
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">
                Email
              </label>
              <input
                name="user_email"
                placeholder="your@email.com"
                className="w-full p-3 rounded-xl bg-slate-900/80 border border-slate-700
                  focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                  outline-none transition-all duration-300
                  placeholder:text-gray-600"
                required
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                required
                className="w-full p-3 rounded-xl bg-slate-900/80 border border-slate-700
                  focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                  outline-none transition-all duration-300 resize-none
                  placeholder:text-gray-600"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="relative w-full py-3 rounded-xl
                bg-gradient-to-r from-cyan-500 to-purple-600
                hover:from-cyan-400 hover:to-purple-500
                transition-all duration-300 font-semibold
                flex justify-center items-center gap-3
                shadow-[0_0_25px_rgba(34,211,238,0.3)]
                hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
                hover:scale-[1.02]"
            >
              Send Message
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </motion.div>
      </div>

      {/* ================= CINEMATIC ROCKET ================= */}
      {launch && (
        <>
          <div className="rocket">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="w-16 h-16 rotate-45"
            >
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </div>

          <div className="blast" />
          <div className="wave" />
        </>
      )}

      {/* ================= SUCCESS POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-md">
          <div
            className="relative px-12 py-10 rounded-3xl
            bg-slate-900 border border-cyan-400/30
            shadow-[0_0_60px_rgba(34,211,238,0.4)]
            animate-popup text-center"
          >
            <button
              onClick={() => {
                setShowPopup(false);
                setLaunch(false);
              }}
              className="absolute right-5 top-4 text-gray-400 hover:text-white text-xl transition"
            >
              ✕
            </button>

            {/* SUCCESS ICON */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mb-2">
              Message Sent!
            </h3>

            <p className="text-gray-300 glowText">
              Thank you for contacting me 🚀
            </p>

            <button
              onClick={() => {
                setShowPopup(false);
                setLaunch(false);
              }}
              className="mt-6 px-6 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/30
                text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= CINEMA ANIMATIONS ================= */}
      <style>{`
      .rocket{
        position:absolute;
        bottom:110px;
        left:50%;
        transform:translateX(-50%);
        animation:cinemaFly 2.6s cubic-bezier(.22,1,.36,1) forwards;
      }

      @keyframes cinemaFly{
        0%{ transform:translate(-50%,0) rotate(-25deg) scale(1);}
        15%{ transform:translate(-60%,-40px) rotate(-5deg);}
        35%{ transform:translate(-30%,-160px) rotate(15deg);}
        60%{ transform:translate(-50%,-260px) rotate(5deg);}
        85%{ transform:translate(-50%,-320px) scale(.7);}
        100%{ transform:translate(-50%,-360px) scale(.4); opacity:0;}
      }

      .blast{
        position:fixed;
        inset:0;
        background:white;
        opacity:0;
        animation:blastFlash .45s ease forwards;
        z-index:99;
      }

      @keyframes blastFlash{
        0%{opacity:0;}
        40%{opacity:.95;}
        100%{opacity:0;}
      }

      .wave{
        position:absolute;
        left:50%;
        top:40%;
        width:60px;
        height:60px;
        border-radius:50%;
        border:3px solid cyan;
        transform:translate(-50%,-50%);
        animation:waveExpand 1.4s ease-out forwards;
      }

      @keyframes waveExpand{
        from{opacity:1; transform:translate(-50%,-50%) scale(.2);}
        to{opacity:0; transform:translate(-50%,-50%) scale(12);}
      }

      @keyframes popup{
        from{opacity:0; transform:scale(.7);}
        to{opacity:1; transform:scale(1);}
      }
      .animate-popup{ animation:popup .5s ease; }

      .glowText{
        animation:glow 2s infinite alternate;
      }

      @keyframes glow{
        from{text-shadow:0 0 5px cyan;}
        to{text-shadow:0 0 20px cyan;}
      }
      `}</style>
    </section>
  );
}
