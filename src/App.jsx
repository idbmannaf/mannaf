import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen  text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Pricing />
      <Contact />
    </div>
  );
}
