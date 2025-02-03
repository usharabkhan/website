import { Box, Flex } from "@radix-ui/themes";
import TechnologyBox from "./TechnologyBox";
import { useState, useRef, useEffect } from "react";
import ChevronButton from "../common/chevron";
import { SubHeading, Heading } from "../common/heading";

interface ToolkitSubSectionProps {
  title: string;
  tools: Record<string, string | undefined>;
  isOpen: boolean;
  toggleOpen: () => void;
}

export default function ToolkitSubSection({ title, tools, isOpen, toggleOpen }: ToolkitSubSectionProps) {
  const id = title.toLowerCase().replace(/ /g, "-") + "-sub";
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the collapsible content
  const [maxHeight, setMaxHeight] = useState(isOpen ? "auto" : "0px");
  
  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);
  
  return (
    <Box id={id} as="div" className="gap-x-5">
      {/* Header */}
      <Flex
        onClick={toggleOpen}
        className="cursor-pointer p-2 bg-container border-l-2 border-borderColor "
        align="center"
        justify="between"
      >
        <SubHeading>{title}</SubHeading>
        <ChevronButton isOpen={isOpen} />
      </Flex>

      {/* Collapsible Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
        style={{maxHeight}}
      >
        <br />
        <Flex
          gap="4"
          wrap="wrap"
          justify={{initial: "center", md: "start"}}
        >
          {Object.entries(tools).map(([key, val]) => (
            <TechnologyBox key={key} text={key} experience={val? val : ""}/>
          ))}
        </Flex>
      </div>
    </Box>
  );
}
