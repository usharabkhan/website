import { toolkit } from "../../constants/data";
import ToolkitSubSection from "./ToolkitSubSection";
import { Flex } from "@radix-ui/themes";
import { Title } from "../common/title";

function ToolkitSection () {
    return(
        <Flex 
            id="skills"
            direction="column"
            justify={{ initial: "center", lg: "start" }}
            className="my-2 min-h-fit p-5 sm:p-10"
        >
            <Title>Toolkit</Title>
            <div className="flex flex-col h-full w-full">
                <ToolkitSubSection title="Front End" tools={toolkit[0]} />
                <br></br>
                <ToolkitSubSection title="Back End" tools={toolkit[1]} />
                <br></br>
                <ToolkitSubSection title="Frameworks" tools={toolkit[2]} />
                <br></br>
                <ToolkitSubSection title="Tools" tools={toolkit[3]} />
            </div>
        </Flex>
    )
}

export default ToolkitSection