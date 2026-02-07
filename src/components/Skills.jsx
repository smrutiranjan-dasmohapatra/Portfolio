import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillsData } from "../data/SkilsData";
import AnimatedHeaderSection from "../animated_components/ok";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef([]);

  useEffect(() => {
    const cards = skillsRef.current.filter(Boolean);

    cards.forEach((el) => {
      const title = el.querySelector("h2");
      const desc = el.querySelector("p");
      const items = el.querySelectorAll(".skill-item");

      // Initial state (soft + smooth)
      gsap.set([title, desc, items], {
        opacity: 0,
        y: 18,
      });

      gsap.set(el, {
        opacity: 0,
        y: 26,
        willChange: "transform, opacity",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
      })
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
          },
          "-=0.3",
        )
        .to(
          desc,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
          },
          "-=0.25",
        )
        .to(
          items,
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.3,
          },
          "-=0.2",
        );
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section id="skills" className="bg-black">
      {/* HEADER */}
      <AnimatedHeaderSection
        title="Skills & Tools"
        textColor="text-green-200"
        withScrollTrigger
        showLine={false}
        topSpacing="pt-28"
        minHeight="min-h-[30vh]"
      />

      {/* SKILLS */}
      <div className="flex flex-col gap-16 px-8 sm:px-12 pt-6 pb-20">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className="border-t border-green-200/25 pt-10"
          >
            <div className="max-w-4xl flex flex-col gap-6">
              {/* TITLE */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-green-200">
                {skill.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-green-100/70 text-lg sm:text-xl font-light leading-relaxed">
                {skill.description}
              </p>

              {/* ITEMS */}
              <div className="flex flex-col gap-3">
                {skill.items.map((item, i) => (
                  <div
                    key={i}
                    className="
                      skill-item
                      flex gap-4
                      text-green-200
                      
                      transition-colors duration-200
                    "
                  >
                    <span className="text-green-200/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
