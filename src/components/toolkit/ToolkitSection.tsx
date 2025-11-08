import { toolkit } from "../../data/data";
import { Flex, Text } from "@radix-ui/themes";
import { Heading } from "../common/heading";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TechnologyBox from "./TechnologyBox";

function ToolkitSection() {
  const sections = ["Front End", "Back End", "Frameworks", "Tools"];
  return (
    <section id="toolkit-section" className="max-w-7xl w-full mx-auto p-5 flex flex-col items-center">
      <Heading>Toolkit</Heading>
      {/* Grid with all 4 sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <div key={section} className="flex flex-col items-center p-4 gap-4">
            <Text size={"4"} weight="medium" className="text-secondary">{section}</Text>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(toolkit[sections.indexOf(section)]).map(([key, val]) => (
                <TechnologyBox key={key} text={key} experience={val ? val : ""} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToolkitSection;
