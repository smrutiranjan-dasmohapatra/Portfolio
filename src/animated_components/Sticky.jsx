import React from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

// Helper to detect desktop
const isDesktop = () => window.innerWidth >= 768;

const Sticky = ({ title, tech = [], image, id }) => {
  const handleEnter = () => {
    if (!isDesktop()) return;

    const row = document.getElementById(`sticky-${id}`);
    const overlay = row.querySelector(".overlay");

    gsap.to(overlay, {
      scaleX: 1,
      duration: 0.45,
      ease: "expo.out",
      transformOrigin: "left center",
    });

    gsap.to(row.querySelectorAll(".sticky-text"), {
      color: "#A7F3D0", // emerald-200
      duration: 0.35,
      ease: "expo.out",
    });
  };

  const handleLeave = () => {
    if (!isDesktop()) return;

    const row = document.getElementById(`sticky-${id}`);
    const overlay = row.querySelector(".overlay");

    gsap.to(overlay, {
      scaleX: 0,
      duration: 0.4,
      ease: "expo.inOut",
      transformOrigin: "left center",
    });

    gsap.to(row.querySelectorAll(".sticky-text"), {
      color: "#000",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      id={`sticky-${id}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative overflow-hidden py-3 sm:py-3 border-b border-black/40 cursor-pointer"
    >
      {/* BLACK OVERLAY */}
      <div className="overlay absolute inset-0 bg-black scale-x-0 origin-left z-0" />

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-xl font-medium sticky-text">{title}</h2>

          {tech.length > 0 && (
            <Icon
              icon="iconamoon:arrow-top-right-1-light"
              className="size-5 sticky-text"
            />
          )}
        </div>

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-0.5 text-sm sticky-text">
            {tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}

        {image && (
          <div className="md:hidden mt-2">
            <img
              src={image}
              alt={title}
              className="w-full h-[200px] object-contain rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sticky;
