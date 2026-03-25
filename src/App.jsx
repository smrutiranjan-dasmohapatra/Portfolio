import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import About from "./components/About";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // smoothness
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-screen min-h-screen bg-green-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Expertise />
      <Skills />
      <About />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
}

export default App;