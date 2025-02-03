import { toolkit } from "../../constants/data";
import ToolkitSubSection from "./ToolkitSubSection";
import { Flex } from "@radix-ui/themes";
import { Heading } from "../common/heading";
import { useState } from "react";

function ToolkitSection() {
    const [openSection, setOpenSection] = useState(0); // First section open by default

    const toggleSection = (index: number) => {
        setOpenSection(prev => (prev === index ? -1 : index)); // Close if same, else open
    };

    return (
        <Flex 
            id="skills"
            direction="column"
            justify={{ initial: "center", lg: "start" }}
            className="my-2 min-h-fit p-5 sm:p-10 w-full"
        >
            <Heading>Toolkit</Heading>
            <Flex
                direction="column"
                className="h-full"
                gap="5"
                maxWidth={{ initial: "350px", md: "750px" }}
            >
                {["Front End", "Back End", "Frameworks", "Tools"].map((title, index) => (
                    <ToolkitSubSection 
                        key={index}
                        title={title} 
                        tools={toolkit[index]} 
                        isOpen={openSection === index} 
                        toggleOpen={() => toggleSection(index)}
                    />
                ))}
            </Flex>
        </Flex>
    );
}

export default ToolkitSection;
