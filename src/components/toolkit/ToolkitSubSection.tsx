import { Box } from "@radix-ui/themes";
import TechnologyBox from "./TechnologyBox";
import MyHeading from "../common/heading";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ToolkitSubSectionProps {
  title: string;
  tools: string[];
}

export default function ToolkitSubSection(props: ToolkitSubSectionProps) {
  const id = props.title.toLowerCase().replace(/ /g, "-") + "-sub";
  const [isOpen, setIsOpen] = useState(false); // State to control collapse/expand
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the collapsible content

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#" + id,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
      },
    });
    tl.fromTo(
      "#" + id,
      { opacity: 0, x: -50 },
      { duration: 1.5, opacity: 1, x: 0, ease: "back", stagger: 0.5 }
    );
    return () => {
      tl.kill();
    };
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box id={id} as="div" className="gap-x-5">
      {/* Header */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleOpen}
      >
        <MyHeading
          type="h3"
          title={props.title}
          customStyle="text-textPrimary self-center"
        />
        <div
            className={`w-6 h-6 text-textPrimary transition-transform duration-300 ease-in-out transform  ${
                isOpen ? "rotate-0" : "rotate-180"
            }`}>
            <ChevronUp className="hover:bg-container rounded-full transition-all duration-300 ease-linear"/>
        </div>
      </div>
      
      <hr className="border border-lg w-full opacity-30"/>
      <br />

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
        <div className="flex flex-row flex-wrap gap-7 justify-around">
          {props.tools.map((tool: string) => (
            <TechnologyBox key={tool} text={tool} />
          ))}
        </div>
      </div>
    </Box>
  );
}
