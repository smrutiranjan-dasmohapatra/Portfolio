import React, { useRef, useEffect } from "react";
import AnimatedHeaderSection from "../animated_components/AnimatedHeaderSection";
import { experience } from "../data/experienceData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const expRef = useRef([]);

  const text = `Experience gained through startups and academics,
focused on real-world development, collaboration,
and building strong technical foundations.`;

  useEffect(() => {
    const cards = expRef.current.filter(Boolean);

    cards.forEach((el) => {
      const company = el.querySelector(".exp-company");
      const role = el.querySelector(".exp-role");
      const date = el.querySelector(".exp-date");

      // Initial state
      gsap.set([company, role, date], {
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
          company,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
          },
          "-=0.3",
        )
        .to(
          role,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
          "-=0.25",
        )
        .to(
          date,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
          "-=0.3",
        );
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section id="experience" className="flex flex-col min-h-screen ">
      {/* HEADER */}
      <AnimatedHeaderSection
        title="EXPERIENCE"
        textColor="text-black"
        withScrollTrigger
        showLine={false}
        topSpacing="pt-28"
        minHeight="min-h-[30vh]"
      />

      {/* EXPERIENCE LIST */}
      <div className="flex flex-col font-light mt-10">
        {experience.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (expRef.current[index] = el)}
            className="px-6 sm:px-10 py-3 border-b border-black/30"
          >
            <div className="flex justify-between items-start gap-2">
              <div>
                {/* COMPANY */}
                <h2 className="exp-company text-xl sm:text-2xl font-semibold text-black">
                  {item.place}
                </h2>

                {/* ROLE */}
                <p className="exp-role mt-1 text-sm sm:text-base text-black/70">
                  {item.role}
                </p>
              </div>

              {/* DATE */}
              <span className="exp-date text-sm sm:text-base font-medium text-black whitespace-nowrap">
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
