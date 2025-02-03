import { toolkit } from "../../constants/data";
import ToolkitSubSection from "./ToolkitSubSection";
import { Flex } from "@radix-ui/themes";
import { Heading } from "../common/heading";

function ToolkitSection () {
    return(
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
                maxWidth={{initial: "350px", md: "750px"}}
            >
                <ToolkitSubSection title="Front End" tools={toolkit[0]} />
                <br></br>
                <ToolkitSubSection title="Back End" tools={toolkit[1]} />
                <br></br>
                <ToolkitSubSection title="Frameworks" tools={toolkit[2]} />
                <br></br>
                <ToolkitSubSection title="Tools" tools={toolkit[3]} />
            </Flex>
        </Flex>
    )
}

export default ToolkitSection