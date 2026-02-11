import ReactLenis from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/contact";
import { StrictMode } from "react";
import Experience from "./components/Experience";

function App() {
  return (
    <ReactLenis root>
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
    </ReactLenis>
  );
}

export default App;
