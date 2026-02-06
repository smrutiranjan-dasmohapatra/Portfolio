import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "../data/experienceData";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="mt-32 max-w-3xl"
    >
      <span className="text-xs tracking-widest text-green-200/80">
        EXPERIENCE
      </span>

      <div className="mt-10 flex flex-col gap-10">
        {experienceData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="
              border-l border-green-200/30 pl-6
              flex flex-col gap-2
            "
          >
            <h4 className="text-lg font-medium text-green-200">
              {item.role}
            </h4>

            <p className="text-sm text-green-100/60">
              {item.company} · {item.period}
            </p>

            <p className="mt-2 text-sm text-green-100/70 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1 rounded-full
                    border border-green-200/30
                    text-green-200/80
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
