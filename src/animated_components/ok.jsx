import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AnimatedHeaderSection({
  subTitle,
  title,
  text,
  textColor = "text-black",
  titleSize = "text-2xl sm:text-3xl md:text-4xl xl:text-[4.5rem]",
  minHeight = "min-h-[65vh]",
  topSpacing = "pt-32",
}) {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const bottomTextRefs = useRef([]);

  const lines =
    typeof text === "string" ? text.split("\n").filter(Boolean) : [];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      if (subtitleRef.current) {
        tl.to(subtitleRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      if (titleRef.current) {
        tl.to(
          titleRef.current.querySelectorAll(".char"),
          {
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.045,
          },
          "-=0.15",
        );
      }

      if (bottomTextRefs.current.length) {
        tl.to(
          bottomTextRefs.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.18,
          },
          "-=0.3",
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* TOP */}
      <div className={`relative ${minHeight} ${topSpacing}`}>
        <div className={`px-10 sm:px-16 ${textColor}`}>
          {subTitle && (
            <p
              ref={subtitleRef}
              style={{ opacity: 0, transform: "translateY(16px)" }}
              className="text-xs uppercase tracking-[0.4em] font-light mb-6"
            >
              {subTitle}
            </p>
          )}

          <h1
            ref={titleRef}
            className={`font-light uppercase ${titleSize} leading-[1] flex flex-wrap`}
          >
            {title.split("").map((char, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <span
                  className="inline-block char"
                  style={{
                    transform: "translateY(120px) rotateX(90deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      {text && (
        <div
          className={`px-10 sm:px-16 mt-6 ml-auto max-w-2xl text-right ${textColor}`}
        >
          {lines.map((line, i) => (
            <span
              key={i}
              ref={(el) => (bottomTextRefs.current[i] = el)}
              style={{ opacity: 0, transform: "translateX(28px)" }}
              className="block text-xs sm:text-sm font-light uppercase tracking-[0.2em] leading-relaxed"
            >
              {line}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

export default AnimatedHeaderSection;
