import AboutCard from "../components/about/AboutCard";
import AboutSection from "../components/about/AboutSection";
import ProjectSection from "../components/projects/ProjectSection";
import ContributionSection from "../components/contributions/ContributionSection";
import ToolkitSection from "../components/toolkit/ToolkitSection";
import { Flex } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <section className="w-screen min-h-screen items-center">
        <AboutSection/>
        <ProjectSection/>
        <ContributionSection/>
        <ToolkitSection/>
      {/* Fixed AboutCard */}
      {/* <div className="max-w-7xl mx-auto p-10">
        <div id="about">
          <AboutSection />
        </div>
        <hr className="mx-5 opacity-70" />
        <div id="projects">
          <ProjectSection />
        </div>
        <hr className="mx-5 opacity-70" />
        <div id="contributions">
          <ContributionSection />
        </div>
        <hr className="mx-5 opacity-70" />
        <div id="skills">
          <ToolkitSection />
        </div>
      </div> */}
    </section>
  );
}
