import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import Loader from "@/components/layout/Loader";
import BackToTop from "@/components/ui/BackToTop";
import { useLenis } from "@/hooks/useLenis";

function App() {
  useLenis();

  return (
    <>
      <Loader />
      <ScrollProgress />
      <CustomCursor />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />

      <BackToTop />
    </>
  );
}

export default App;
