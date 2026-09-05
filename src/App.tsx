import { MotionConfig } from "framer-motion";
import { AnimatedSection } from "./components/AnimatedSection";
import { Navbar } from "./components/Navbar";
import { useLanguage } from "./context/LanguageContext";
import { useTheme } from "./hooks/useTheme";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Stack } from "./sections/Stack";
import { Value } from "./sections/Value";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    // reducedMotion="user" makes every Framer Motion animation in the app
    // (entrances, expand/collapse, tab transitions) honor the OS-level
    // prefers-reduced-motion setting automatically.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-surface-0 transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only rounded-sm border border-line-strong bg-surface-1 px-4 py-2 font-mono text-sm text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          {t.nav.skipToContent}
        </a>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main id="main-content">
          <Hero />
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Value />
          </AnimatedSection>
          <AnimatedSection>
            <Experience />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Stack />
          </AnimatedSection>
          <AnimatedSection>
            <Education />
          </AnimatedSection>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default App;
