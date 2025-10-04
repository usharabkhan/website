import AboutCard from "../components/about/AboutCard";
import AboutSection from "../components/about/AboutSection";
import ProjectSection from "../components/projects/ProjectSection";
import ContributionSection from "../components/contributions/ContributionSection";
import ToolkitSection from "../components/toolkit/ToolkitSection";
import { Flex } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <section className="w-screen min-h-screen items-center">
      <AboutSection />
      <ProjectSection />
      <ContributionSection />
      <ToolkitSection />
    </section>
  );
}
