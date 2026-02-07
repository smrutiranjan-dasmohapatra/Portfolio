import React from "react";
import AnimatedHeaderSection from "../animated_components/AnimatedHeaderSection";
import { projects } from "../data/projectsData";
import { Icon } from "@iconify/react";
import gsap from "gsap";

function Works() {
  const isDesktop = () => window.innerWidth >= 768;

  const text = `Projects built through hands-on startup experience,
focusing on real-world problems, clean UI/UX,
and scalable web & mobile solutions using modern technologies.`;

  const handleEnter = (id) => {
    if (!isDesktop()) return;

    const row = document.getElementById(`project-${id}`);
    const overlay = row.querySelector(".overlay");

    // Black reveal from left
    gsap.to(overlay, {
      scaleX: 1,
      duration: 0.45,
      ease: "expo.out",
      transformOrigin: "left center",
    });

    // Text → emerald-200
    gsap.to(row.querySelectorAll(".project-text"), {
      color: "#A7F3D0", // emerald-200
      duration: 0.35,
      ease: "expo.out",
    });
  };

  const handleLeave = (id) => {
    if (!isDesktop()) return;

    const row = document.getElementById(`project-${id}`);
    const overlay = row.querySelector(".overlay");

    // Hide black background
    gsap.to(overlay, {
      scaleX: 0,
      duration: 0.4,
      ease: "expo.inOut",
      transformOrigin: "left center",
    });

    // Reset text color
    gsap.to(row.querySelectorAll(".project-text"), {
      color: "#000",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section id="works" className="flex flex-col min-h-screen mb-30">
      {/* ===== HEADER ===== */}
      <AnimatedHeaderSection
        title="WORKS"
        textColor="text-black"
        withScrollTrigger
        showLine={false}
        topSpacing="pt-28"
        minHeight="min-h-[30vh]"
        text={text}
      />

      {/* ===== PROJECT LIST ===== */}
      <div className="relative flex flex-col font-light">
        {projects.map((project) => (
          <div
            key={project.id}
            id={`project-${project.id}`}
            onMouseEnter={() => handleEnter(project.id)}
            onMouseLeave={() => handleLeave(project.id)}
            className="relative overflow-hidden py-4 border-b border-black/50 cursor-pointer"
          >
            {/* BLACK OVERLAY (DESKTOP HOVER) */}
            <div className="overlay absolute inset-0 bg-black scale-x-0 origin-left z-0" />

            {/* CONTENT */}
            <div className="relative z-10 px-6 sm:px-10">
              <div className="flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl font-semibold project-text">
                  {project.title}
                </h2>

                <Icon
                  icon="iconamoon:arrow-top-right-1-light"
                  className="size-6 project-text"
                />
              </div>

              <div className="flex flex-wrap gap-3 mt-1 text-xs sm:text-sm project-text">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {/* MOBILE IMAGE ONLY */}
              <div className="md:hidden mt-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
