import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Expertise() {
  const sectionRef = useRef(null);
  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const title4 = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(title1.current, { y: 24, opacity: 0, duration: 0.6 })
        .from(title2.current, { x: -32, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(title3.current, { x: 32, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(title4.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.35");
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="mt-20 px-4 sm:px-6 overflow-hidden text-center text-black"
    >
      {/* SECTION TITLE */}
      <div ref={title1} className="mb-6">
        <p
          className="
          text-xs sm:text-sm md:text-base
          uppercase font-medium
          tracking-[0.25em] sm:tracking-[0.4em]
          text-neutral-900
        "
        >
          Work Overview
        </p>
      </div>

      {/* DESIGN / DEVELOPMENT / DEPLOYMENT */}
      <div
        ref={title2}
        className="
          flex flex-wrap items-center justify-center
          gap-2 sm:gap-4 mb-6 sm:mb-8
          text-base sm:text-xl md:text-2xl
          font-light tracking-normal sm:tracking-wide
          text-neutral-800
        "
      >
        <p>Design</p>
        <span className="w-4 sm:w-6 h-[3px] bg-yellow-300 rounded-full" />
        <p>Development</p>
        <span className="w-4 sm:w-6 h-[3px] bg-yellow-300 rounded-full" />
        <p>Deployment</p>
      </div>

      {/* WEB / MOBILE */}
      <div
        ref={title3}
        className="
          flex flex-wrap items-center justify-center
          gap-2 sm:gap-4 mb-6 sm:mb-8
          text-base sm:text-xl md:text-2xl
          font-light tracking-normal sm:tracking-wide
          text-neutral-800
        "
      >
        <p className="font-normal">Web Development</p>
        <span className="w-4 sm:w-6 h-[3px] bg-yellow-300 rounded-full" />
        <p>Mobile Development</p>
      </div>

      {/* DESCRIPTION */}
      <div ref={title4} className="max-w-xl sm:max-w-2xl mx-auto px-2">
        <p
          className="
          text-sm sm:text-base md:text-lg
          font-light leading-relaxed sm:leading-loose
          text-neutral-700
        "
        >
          Hands-on experience through real-world projects and an ongoing startup
          internship.
        </p>
      </div>
    </section>
  );
}

export default Expertise;
