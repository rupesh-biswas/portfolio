import AboutMe from "@/components/about-me";
import HeroSection from "@/components/hero";
import Projects from "@/components/projects";
import ResumeSection from "@/components/resume";
import Talent from "@/components/talent";
import TopSkills from "@/components/top-skills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <TopSkills />
      <ResumeSection />
      <Talent />
      <Projects />
      {/* <div>Work In Progress</div> */}
    </div>
  );
}
