import React, { useRef, useEffect } from "react";
import AnimatedHeaderSection from "../animated_components/AnimatedHeaderSection";
import { experience } from "../data/experienceData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const expRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    expRef.current.forEach((el) => {
      if (!el) return;

      const company = el.querySelector(".exp-company");
      const role = el.querySelector(".exp-role");
      const date = el.querySelector(".exp-date");

      gsap.set([company, role, date], { opacity: 0, y: 18 });
      gsap.set(el, { opacity: 0, y: 26 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: isMobile ? "top 95%" : "top 80%",
          once: true,
        },
      });

      tl.to(el, { opacity: 1, y: 0, duration: 0.5 })
        .to(company, { opacity: 1, y: 0 }, "-=0.3")
        .to(role, { opacity: 1, y: 0 }, "-=0.25")
        .to(date, { opacity: 1, y: 0 }, "-=0.3");
    });

    setTimeout(() => ScrollTrigger.refresh(), 300);
  }, []);

  return (
    <section id="experience" className="flex flex-col">
      <AnimatedHeaderSection
        title="EXPERIENCE"
        textColor="text-black"
        topSpacing="pt-28"
        minHeight="min-h-[10vh]"
      />

      <div className="flex flex-col mt-10">
        {experience.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (expRef.current[index] = el)}
            className="px-6 sm:px-10 py-4 border-b border-black/30"
          >
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              
              <div className="max-w-xl">
                <h2 className="exp-company text-xl font-semibold">
                  {item.place}
                </h2>

                <p className="exp-role text-sm">
                  {item.role}
                </p>
              </div>

              <span className="exp-date text-sm whitespace-nowrap">
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