import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import { LanguageSwitcher } from "@/components/language-switcher";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useLanguage } from "@/context/language-context";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />

      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
