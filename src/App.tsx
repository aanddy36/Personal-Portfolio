import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { ProjectsSection } from "./sections/ProjectsSection";
import { TechStack } from "./sections/TechStack";
import { Footer } from "./sections/Footer";

function App() {

  return (
    <div
      className="relative bg-stone-200 before:content-[''] before:absolute before:w-full before:h-full
    before:bg-[url('./utils/background.png')] before:bg-custom before:top-0 before:left-0 before:-z-1 
    before:grayscale before:opacity-10  bg-transparent before:bg-repeat
     bg-mask"
    >
      <Navbar/>
      <div id="hero">
        <Hero />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="techs">
        <TechStack />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
