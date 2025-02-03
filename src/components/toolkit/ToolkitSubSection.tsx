import { Box, Flex } from "@radix-ui/themes";
import TechnologyBox from "./TechnologyBox";
import { useState, useRef } from "react";
import ChevronButton from "../common/chevron";
import { SubTitle, Title } from "../common/title";

interface ToolkitSubSectionProps {
  title: string;
  tools: string[];
}

export default function ToolkitSubSection(props: ToolkitSubSectionProps) {
  const id = props.title.toLowerCase().replace(/ /g, "-") + "-sub";
  const [isOpen, setIsOpen] = useState(false); // State to control collapse/expand
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the collapsible content

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box id={id} as="div" className="gap-x-5">
      {/* Header */}
      <Flex
        onClick={toggleOpen}
        className="cursor-pointer p-2 bg-container border-l-2 border-borderColor "
        align="center"
        justify="between"
      >
        <SubTitle>{props.title}</SubTitle>
        <ChevronButton isOpen={isOpen} />
      </Flex>

      {/* Collapsible Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
        }}
      >
        <br />
        <Flex
          gap="4"
          wrap="wrap"
        >
          {props.tools.map((tool: string) => (
            <TechnologyBox key={tool} text={tool} />
          ))}
        </Flex>
      </div>
    </Box>
  );
}
