import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectMobile from "./components/ProjectMobile";
import Navbar from "./components/Navabar";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />

      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>

      <div id="projects" className="md:block hidden">
        <Projects />
      </div>
      <div id="projects-mobile" className="md:hidden block">
        <ProjectMobile />
      </div>

      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}
