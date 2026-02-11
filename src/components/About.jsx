import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedHeaderSection from "../animated_components/AnimatedHeaderSection";
import AnimatedTextLines from "../animated_components/AnimatedTextLines";

import smrutiImg from "../assets/smruti.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imgRef = useRef(null);

  const headerText = `Frontend-focused developer building clean and user-friendly
web and mobile applications using modern technologies.`;

  const aboutMe = `I’m SMRUTI, a B.Tech student and a web & mobile developer with hands-on startup experience, focused on building clean and user-friendly interfaces using modern technologies.

I’ve worked in a startup environment for over eight months, contributing to real products while collaborating closely with designers and developers.

My work mainly involves building responsive UIs, integrating APIs, improving performance, and paying close attention to UI/UX details. I enjoy learning new tools, refining my skills, and turning ideas into practical, real-world applications.`;

  useGSAP(() => {
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
        minHeight="min-h-[15vh]"
      />

      {/* MAIN CONTENT */}
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col
          gap-20
          px-6 sm:px-10 lg:px-20
          mt-20 pb-24
          lg:flex-row lg:items-start lg:justify-between
        "
      >
        {/* LEFT */}
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <img
            ref={imgRef}
            src={smrutiImg}
            alt="Smrutiranjan Dasmohapatra"
            className="w-72 sm:w-80 rounded-md object-cover"
          />

          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-light tracking-[0.25em] text-green-200">
              Smrutiranjan
            </h3>

            <p className="text-xs tracking-widest text-green-200 mt-1">
              Dasmohapatra
            </p>

            <p className="text-sm text-green-100/80 mt-3">
              Frontend-Focused Full-Stack Developer
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="max-w-xl">
          <AnimatedTextLines
            text={aboutMe}
            className="
              text-green-100/80
            
              text-sm sm:text-base
              leading-[1.65]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default About;
