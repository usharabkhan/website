import { Box, Heading } from "@radix-ui/themes";
import { toolkit } from "../../constants/data";
import ToolkitSubSection from "./ToolkitSubSection";

function ToolkitSection () {
    return(
        <div id="skills" className="flex flex-col p-4 mx-2 min-h-[100vh]">
            <Heading weight="regular" size="7" className="text-textPrimary self-center mb-3">My Toolkit</Heading>
            <div className="flex flex-col h-full">
                <ToolkitSubSection title="Front End" tools={toolkit[0]} />
                <br></br>
                <ToolkitSubSection title="Back End" tools={toolkit[1]} />
                <br></br>
                <ToolkitSubSection title="Frameworks & Tools" tools={toolkit[2]} />
                
            </div>
        </div>
    )
}

export default ToolkitSection