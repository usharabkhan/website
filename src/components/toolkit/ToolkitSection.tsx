import { toolkit } from "../../data/data";
import { Flex, Text } from "@radix-ui/themes";
import { Heading } from "../common/heading";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TechnologyBox from "./TechnologyBox";
import { Code2, Server, Box, Wrench } from "lucide-react";

function ToolkitSection() {
  const sections = ["Front End", "Back End", "Frameworks", "Tools"];
  const sectionIcons = [Code2, Server, Box, Wrench];
  return (
    <section id="toolkit-section" className="max-w-7xl w-full mx-auto p-5 flex flex-col items-center py-10 relative">
      {/* Diagonal gradient lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rotate-45" />
        <div className="absolute top-1/2 right-0 w-96 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent -rotate-45" />
        <div className="absolute bottom-0 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rotate-45" />
      </div>

      <Heading>Toolkit</Heading>
      {/* Grid with all 4 sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">
        {sections.map((section, index) => {
          const Icon = sectionIcons[index];
          return (
            <div key={section} className="flex flex-col items-center p-6 gap-5 bg-gradient-to-br from-container/50 via-accent/50 to-container/50 rounded-2xl border border-borderColor hover:border-primary/30 transition-colors duration-300 relative overflow-hidden group">
              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <Icon className="w-6 h-6 text-primary" />
                <Text size={"5"} weight="medium" className="text-primary font-semibold">{section}</Text>
              </div>
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              {Object.entries(toolkit[sections.indexOf(section)]).map(([key, val]) => (
                <TechnologyBox key={key} text={key} experience={val ? val : ""} />
              ))}
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}

export default ToolkitSection;
