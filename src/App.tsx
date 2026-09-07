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

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only rounded border border-line-strong bg-bg px-4 py-2 font-mono text-sm text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        {t.nav.skipToContent}
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
