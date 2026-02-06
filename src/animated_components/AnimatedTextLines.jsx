import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function AnimatedTextLines({ text, className = "" }) {
  const containerRef = useRef(null);

  const lines = typeof text === "string" ? text.split("\n") : text;

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-2 ${className}`}
    >
      {lines.map((line, index) => (
        <p
          key={index}
          className="
            text-base md:text-lg lg:text-xl
            leading-relaxed
            m-0
          "
        >
          {line}
        </p>
      ))}
    </div>
  );
}

export default AnimatedTextLines;
