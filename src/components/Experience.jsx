import React, { useRef, useEffect } from "react";
import AnimatedHeaderSection from "../animated_components/AnimatedHeaderSection";
import { experience } from "../data/experienceData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const expRef = useRef([]);

  useEffect(() => {
    const cards = expRef.current.filter(Boolean);

    cards.forEach((el) => {
      const company = el.querySelector(".exp-company");
      const role = el.querySelector(".exp-role");
      const date = el.querySelector(".exp-date");

      gsap.set([company, role, date], { opacity: 0, y: 18 });
      gsap.set(el, { opacity: 0, y: 26 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        })
        .to(el, { opacity: 1, y: 0, duration: 0.45 })
        .to(company, { opacity: 1, y: 0, duration: 0.35 }, "-=0.3")
        .to(role, { opacity: 1, y: 0, duration: 0.3 }, "-=0.25")
        .to(date, { opacity: 1, y: 0, duration: 0.3 }, "-=0.3");
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section id="experience" className="flex flex-col min-h-screen">
      {/* HEADER */}
      <AnimatedHeaderSection
        title="EXPERIENCE"
        textColor="text-black"
        withScrollTrigger
        showLine={false}
        topSpacing="pt-28"
        minHeight="min-h-[10vh]"
      />

      {/* EXPERIENCE LIST */}
      <div className="flex flex-col mt-10">
        {experience.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (expRef.current[index] = el)}
            className="px-6 sm:px-10 py-4 border-b border-black/30"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6">
              {/* LEFT */}
              <div className="max-w-xl">
                <h2 className="exp-company text-lg sm:text-xl md:text-2xl font-semibold text-black leading-tight">
                  {item.place}
                </h2>

                <p className="exp-role mt-1 text-sm sm:text-base md:text-lg text-black/70 leading-relaxed">
                  {item.role}
                </p>
              </div>

              {/* DATE */}
              <span className="exp-date text-xs sm:text-sm md:text-base font-medium text-black whitespace-nowrap">
                {item.from} — {item.to}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
