import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeaderSection from "../animated_components/AnimatedHeaderSection";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const colRefs = useRef([]);
  const heroRef = useRef(null);
  const [message, setMessage] = useState("");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 32,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
        },
      });

      colRefs.current.forEach((col, i) => {
        if (!col) return;
        gsap.from(col, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: col,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppSend = () => {
    if (!message.trim()) return;
    const encodedMsg = encodeURIComponent(message);
    window.open(
      `https://wa.me/918249172250?text=${encodedMsg}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-black py-14 overflow-x-hidden"
    >
      {/* HEADER */}
      <AnimatedHeaderSection
        title="Contact"
        textColor="text-green-200"
        showLine={false}
        withScrollTrigger
        minHeight="min-h-[30vh]"
      />

      {/* HERO */}
      <div className="max-w-7xl mx-auto mt-10 px-6 md:px-10">
        <h2
          ref={heroRef}
          className="
            max-w-4xl
            text-2xl sm:text-3xl lg:text-4xl
            font-light uppercase
            tracking-[0.35em]
            leading-relaxed
            text-green-200/80
          "
        >
          Frontend-focused full-stack developer helping turn ideas
          into modern web and mobile applications.
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24 grid grid-cols-1 md:grid-cols-4 gap-16 text-green-200">
        
        {/* BRAND */}
        <div ref={(el) => (colRefs.current[0] = el)}>
          <h3 className="text-3xl font-normal tracking-wide mb-6">
            SMRUTI
          </h3>
          <p className="text-green-100/90 leading-relaxed">
            Frontend-focused full-stack developer building clean,
            modern, scalable web and mobile experiences.
          </p>
        </div>

        {/* LINKS */}
        <div ref={(el) => (colRefs.current[1] = el)}>
          <p className="uppercase tracking-widest text-sm text-green-100/60 mb-6">
            My Links
          </p>
          <ul className="space-y-3">
            <li>
              <a href="mailto:ssmrutiranjandmp@gmail.com" className="hover:text-white">
                Email
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/smrutiranjan-dasmohapatra" target="_blank" rel="noreferrer" className="hover:text-white">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* DOWNLOADS */}
        <div ref={(el) => (colRefs.current[2] = el)}>
          <p className="uppercase tracking-widest text-sm text-green-100/60 mb-6">
            Downloads
          </p>
          <ul className="space-y-3">
            <li>
              <a href="/resume.pdf" download className="hover:text-white">
                Resume (PDF)
              </a>
            </li>
            <li>
              <a href="/portfolio.pdf" download className="hover:text-white">
                Portfolio (PDF)
              </a>
            </li>
          </ul>
        </div>

        {/* LET’S TALK */}
        <div ref={(el) => (colRefs.current[3] = el)}>
          <p className="uppercase tracking-widest text-sm text-green-100/60 mb-6">
            Let’s Talk
          </p>
          <p className="text-green-100/90 mb-4">
            Have feedback, a question, or an opportunity?
            Send a quick message — I’ll reply personally.
          </p>

          <textarea
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="
              w-full bg-white/10
              px-4 py-3 text-sm
              text-white outline-none
              resize-none mb-3
            "
          />

          <button
            onClick={handleWhatsAppSend}
            className="
              w-full bg-green-300 text-black
              px-6 py-3 text-sm font-medium
              hover:bg-green-400 transition
            "
          >
            Send to WhatsApp
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
          max-w-7xl mx-auto px-6 md:px-10 mt-20
          flex flex-col md:flex-row
          justify-between items-center
          text-sm text-green-100/80
          gap-4
        "
      >
        <p>© 2026 Smrutiranjan Damohapatra</p>
        <p className="flex items-center gap-2 text-green-100/80 text-sm">
  <Icon icon="mdi:map-marker-outline" className="text-green-200 text-lg" />
  Based in Odisha , India
</p>
      </div>
    </section>
  );
};

export default Contact;
