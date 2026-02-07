import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeaderSection from "../animated_components/ok";
import AnimatedTextLines from "../animated_components/AnimatedTextLines";

import smrutiImg from "../assets/smruti.png";
import prustazLogo from "../assets/prustazLogo.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imgRef = useRef(null);

  const headerText = `Web and mobile developer with hands-on startup experience,
focused on building clean, responsive interfaces using React, Next.js, and Flutter,
with working knowledge of Python and Django.`;

  const aboutMe = `I’m a fourth-year B.Tech student and a web & mobile developer
with hands-on startup experience. I focus on building clean, user-friendly
interfaces using modern technologies.

I’ve been working in a startup environment for over eight months, contributing
to real products while collaborating closely with designers and developers.`;

  useGSAP(() => {
    // Section scale on scroll
    gsap.to("#about", {
      scale: 0.96,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 65%",
        end: "bottom 30%",
        scrub: true,
      },
    });

    // Image reveal
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      willChange: "clip-path",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-black rounded-b-sm overflow-x-hidden"
    >
      {/* HEADER */}
      <AnimatedHeaderSection
        title="About"
        text={headerText}
        textColor="text-green-200"
        withScrollTrigger
        showLine={false}
        topSpacing="pt-28"
        minHeight="min-h-[30vh]"
      />

      {/* MAIN CONTENT */}
      <div
        className="
          flex flex-col items-center justify-between
          gap-24 mt-24 px-10 pb-20
          font-light tracking-wide
          md:text-lg lg:flex-row lg:text-xl
          overflow-x-hidden
        "
      >
        {/* LEFT */}
        <div className="flex flex-col gap-6 items-center">
          <img
            ref={imgRef}
            src={smrutiImg}
            alt="Smrutiranjan Damohapatra"
            className="w-74 md:w-90 rounded-md object-cover"
          />

          <div className="text-center">
            <h3 className="text-xl font-medium text-green-200">
              Smrutiranjan Damohapatra
            </h3>
            <p className="text-sm text-green-100/70">
              Frontend & Mobile Developer
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-20 max-w-2xl">
          <AnimatedTextLines
            className="text-green-100/70 leading-relaxed"
            text={aboutMe}
          />

          {/* EXPERIENCE */}
          <div className="flex flex-col gap-6">
            <span className="text-xs tracking-widest font-normal text-green-200/80">
              EXPERIENCE
            </span>

            <div className="flex items-start gap-4 border-l border-white pl-6">
              {/* COMPANY LOGO */}
              <div className="w-20 aspect-square bg-white rounded-full overflow-hidden flex items-center justify-center shadow-md">
                <img
                  src={prustazLogo}
                  alt="Prustaz"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-medium text-green-200">
                  Frontend Developer Intern
                </h4>

                <p className="text-sm font-semibold text-white">
                  Prustaz · Startup Environment · Present
                </p>

                <p className="mt-2 text-sm text-green-100/70 leading-relaxed">
                  Building production-ready React and Flutter applications,
                  collaborating closely with designers and backend engineers to
                  deliver clean, scalable, and user-focused interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
