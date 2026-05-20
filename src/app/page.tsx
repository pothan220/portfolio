import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatAssistant from "../components/ChatAssistant";
import CursorEffects from "../components/CursorEffects";
import ScrollEffects from "../components/ScrollEffects";

export default function Home() {
  return (
    <>
      <CursorEffects />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <ChatAssistant />
      <ScrollEffects />
    </>
  );
}
