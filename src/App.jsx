import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import FounderSpotlight from "./components/FounderSpotlight";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <FounderSpotlight />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
