// hooks/useProjectHover.js
import { useRef, useEffect } from "react";
import gsap from "gsap";

export const useProjectHover = () => {
  const previewRef = useRef(null);
  const imageRef = useRef(null);
  const quickX = useRef(null);
  const quickY = useRef(null);

  const isDesktop = () => window.innerWidth >= 768;

  useEffect(() => {
    if (!isDesktop()) return;

    // Overlay initial state
    gsap.set(".overlay", { y: "100%", autoAlpha: 0 });

    // Preview initial state
    gsap.set(previewRef.current, { autoAlpha: 0, xPercent: -50, yPercent: -50, visibility: "hidden" });

    // Quick setter for smooth movement
    quickX.current = gsap.quickTo(previewRef.current, "x", { duration: 0.12, ease: "power3.out" });
    quickY.current = gsap.quickTo(previewRef.current, "y", { duration: 0.12, ease: "power3.out" });
  }, []);

  const showPreview = (image) => {
    if (!isDesktop()) return;
    imageRef.current.src = image;
    gsap.killTweensOf(previewRef.current);
    gsap.set(previewRef.current, { visibility: "visible" });
    gsap.to(previewRef.current, { autoAlpha: 1, duration: 0.12, ease: "power3.out" });
  };

  const hidePreview = () => {
    if (!isDesktop()) return;
    gsap.killTweensOf(previewRef.current);
    gsap.to(previewRef.current, {
      autoAlpha: 0,
      duration: 0.12,
      ease: "power3.in",
      onComplete: () => gsap.set(previewRef.current, { visibility: "hidden" }),
    });
  };

  const movePreview = (e) => {
    if (!isDesktop()) return;
    quickX.current(e.clientX);
    quickY.current(e.clientY);
  };

  const hoverIn = (e) => {
    if (!isDesktop()) return;
    const overlay = e.currentTarget.querySelector(".overlay");
    const textEls = e.currentTarget.querySelectorAll("h2, span, svg");
    gsap.killTweensOf(overlay);
    gsap.to(overlay, { y: 0, autoAlpha: 1, duration: 0.22, ease: "power3.out" });
    gsap.to(textEls, { color: "#BBF7D0", duration: 0.15, ease: "power3.out" });
  };

  const hoverOut = (e) => {
    if (!isDesktop()) return;
    const overlay = e.currentTarget.querySelector(".overlay");
    const textEls = e.currentTarget.querySelectorAll("h2, span, svg");
    gsap.killTweensOf(overlay);
    gsap.to(overlay, { y: "100%", duration: 0.18, ease: "power3.in", onComplete: () => gsap.set(overlay, { autoAlpha: 0 }) });
    gsap.set(textEls, { color: "#000000" });
  };

  return { previewRef, imageRef, showPreview, hidePreview, movePreview, hoverIn, hoverOut };
};
