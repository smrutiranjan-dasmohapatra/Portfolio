import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import AnimatedHeaderSection from "../animated_components/AnimatedHeaderSection";

const barItems = [
  { id: "01", label: "CONCEPT" },
  { id: "02", label: "UIUX" },
  { id: "03", label: "CODE" },
  { id: "04", label: "ANIMATION" },
];

function Hero() {
  const barRef = useRef(null);
  const lastScroll = useRef(0);


  const text = `Building modern web & mobile apps with React, React Native, Flutter, Next.js, Tailwind, GSAP & Django.
Skilled in UI/UX design and Figma, with real-world internship experience.`;

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      gsap.to(barRef.current, {
        x: current > lastScroll.current ? -barRef.current.offsetWidth : 0,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
      });

      lastScroll.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-hidden pl-[36px] sm:pl-[56px] lg:pl-[80px]"
    >
      {/* LEFT BAR */}
      <div
        ref={barRef}
        className="absolute left-0 top-0 h-full w-[36px] sm:w-[56px] lg:w-[80px]
                   bg-black z-20 flex items-center justify-center overflow-hidden"
      >
        <div className="flex items-center rotate-90 whitespace-nowrap gap-12 font-medium text-xs tracking-[0.2em] text-green-200">
          {barItems.map((item) => (
            <span key={item.id} className="flex items-center gap-1">
              <span className="opacity-60">{item.id}</span>
              <span>{item.label}</span>
            </span>
          ))}
        </div>
      </div>

      <AnimatedHeaderSection
        subTitle="Hi, I'm Smruti — Frontend-focused full-stack developer."
        title="SMRUTI"
    
        text={text}
        textColor="text-black"
        topSpacing="pt-16 sm:pt-28 lg:pt-48"
      />
    </section>
  );
}

export default Hero;
