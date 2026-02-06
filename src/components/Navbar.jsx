import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { social } from "../data";
import gsap from "gsap";
import { scroller } from "react-scroll";

function Navbar() {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);

  const tl = useRef(null);
  const iconTl = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  /* ================= GSAP SETUP (NO FLASH) ================= */
  useLayoutEffect(() => {
    if (!navRef.current) return;

    // Hide menu BEFORE paint
    gsap.set(navRef.current, { xPercent: 100, autoAlpha: 0 });
    gsap.set([...linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    // Menu animation
    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
    })
      .to(navRef.current, {
        xPercent: 0,
        autoAlpha: 1,
        duration: 0.5,
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.06,
        },
        "-=0.25"
      )
      .to(
        contactRef.current,
        { autoAlpha: 1, x: 0, duration: 0.3 },
        "-=0.2"
      );

    // Hamburger animation
    iconTl.current = gsap.timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3,
        duration: 0.2,
        ease: "power2.out",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3,
          duration: 0.2,
          ease: "power2.out",
        },
        "<"
      );

    return () => {
      tl.current?.kill();
      iconTl.current?.kill();
    };
  }, []);

  /* ================= SCROLL SHOW / HIDE ================= */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      if (Math.abs(current - lastScrollY) < 10) return;

      setShowMenu(current < lastScrollY || current < 20);
      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= TOGGLE MENU ================= */
  const toggleMenu = () => {
    if (!tl.current || !iconTl.current) return;

    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }

    setIsOpen((prev) => !prev);
  };

  /* ================= SCROLL TO SECTION ================= */
  const handleScrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      smooth: "easeInOutCubic",
      offset: -80,
    });

    // Close menu AFTER scroll
    setTimeout(() => {
      if (isOpen) toggleMenu();
    }, 800);
  };

  /* ================= JSX ================= */
  return (
    <>
      {/* ===== MENU PANEL ===== */}
      <nav
        ref={navRef}
        className=" fixed inset-0 z-[1500] flex flex-col justify-start
    w-full min-h-screen px-6 py-8 uppercase bg-black text-green-200 gap-30
    md:flex-col md:justify-between md:w-1/2 md:left-1/2 md:px-10 md:py-10 md:gap-6
    overflow-y-auto md:overflow-y-hidden"
      >
        {/* Links */}
        <div className=" flex flex-col text-2xl gap-y-2 md:text-3xl lg:text-4xl">
          {["home", "about", "works", "skills", "contact"].map(
            (section, index) => (
              <div
                key={section}
                ref={(el) => (linksRef.current[index] = el)}
              >
                <div
                  onClick={() => handleScrollTo(section)}
                  className="cursor-pointer transition-all duration-200 hover:text-white"
                >
                  {section}
                </div>
              </div>
            )
          )}
        </div>

        {/* Contact + Social */}
       {/* Contact + Social */}
<div
  ref={contactRef}
  className="
    flex flex-wrap justify-between gap-4

  "
>

          <div className="font-light">
            <p className="tracking-wider text-green-100/70 ">E-mail</p>
            <p
  className="
     text-green-200
    hover:text-white
    lowercase
    transition-colors duration-200
    cursor-pointer
  "
>
  dmpsmrutiranjan@gmail.com
</p>

          </div>

          <div className="font-light">
            <p className=" text-green-100/70 tracking-wider ">Social Media</p>
            <div className="flex flex-wrap gap-3 mt-2 text-2xl">
              {social.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="w-5 h-5 text-green-200 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* ===== HAMBURGER BUTTON ===== */}
      <div
        role="button"
        aria-label="Toggle Menu"
        tabIndex={0}
        onClick={toggleMenu}
        onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
        className="fixed z-[3000] top-4 right-10 flex flex-col items-center justify-center gap-1 w-10 h-10 md:w-14 md:h-14 bg-black rounded-full cursor-pointer"
        style={{
          opacity: showMenu ? 1 : 0,
          pointerEvents: showMenu ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <span
          ref={topLineRef}
          className="block w-7 h-0.5 bg-white rounded-full"
        />
        <span
          ref={bottomLineRef}
          className="block w-7 h-0.5 bg-white rounded-full"
        />
      </div>
    </>
  );
}

export default Navbar;
