import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeaderSection from "../animated_components/ok";
import { social } from "../data";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const colRefs = useRef([]);
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade-in
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

      // Column fade-in stagger
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-black py-28 overflow-x-hidden"
    >
      {/* HEADER */}
      <AnimatedHeaderSection
        title="Contact"
        textColor="text-green-200"
        showLine={false}
        withScrollTrigger
        topSpacing="pt-28"
        minHeight="min-h-[30vh]"
      />

      {/* HERO LINE */}
      <div className="max-w-7xl mx-auto mt-10 px-10">
        <h2
          ref={heroRef}
          className="
            max-w-4xl
            text-2xl sm:text-3xl md:text-2xl lg:text-4xl
            font-light
            uppercase
            tracking-[0.35em]
            leading-relaxed
            text-green-200/80
          "
        >
          Frontend-focused full-stack developer helping turn ideas into modern
          web and mobile applications.
        </h2>
      </div>

      {/* CONTACT GRID */}
      <div className="max-w-7xl mx-auto px-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* ADDRESS */}
        <div ref={(el) => (colRefs.current[0] = el)}>
          <p className="uppercase text-sm tracking-widest text-green-100/70 mb-6">
            Address
          </p>
          <p className="text-lg leading-relaxed text-green-200 hover:text-white">
            India, Odisha <br /> Balasore, Bhograi
          </p>
        </div>

        {/* GET IN TOUCH */}
        <div ref={(el) => (colRefs.current[1] = el)}>
          <p className="uppercase text-sm tracking-widest text-green-100/70 mb-6">
            Get in Touch
          </p>
          <a
            href="mailto:ssmrutiranjandmp@gmail.com"
            className="block text-lg text-green-200 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            ssmrutiranjandmp@gmail.com
          </a>
          <a
            href="https://wa.me/918249172250"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg text-green-200 hover:text-white transition-colors duration-200 mt-1"
          >
            +91 82491 72250 (WhatsApp)
          </a>
        </div>

        {/* SOCIALS */}
        <div ref={(el) => (colRefs.current[2] = el)}>
          <p className="uppercase text-sm tracking-widest text-green-100/70 mb-6">
            Socials
          </p>
          <div className="space-y-2">
            {social.map((item) => (
              <a
                key={item.id} // unique key
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-green-200 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-sm text-white px-9 mt-20">
        © 2026 Smrutiranjan Damohapatra.
      </div>
    </section>
  );
};

export default Contact;
