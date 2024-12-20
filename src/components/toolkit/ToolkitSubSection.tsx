import { Box, Heading } from "@radix-ui/themes";
import TechnologyBox from "./TechnologyBox";

interface ToolkitSubSectionProps {
    title: string,
    tools: string[], 
}
export default function ToolkitSubSection (props : ToolkitSubSectionProps){
    return(
        <Box as="div" className="gap-x-5 mb-5">
            <Heading className="text-textPrimary" size="6" weight="regular">
                {props.title}
            </Heading>
            <br></br>
            <div className="flex flex-row flex-wrap gap-7 justify-around">
                
                {props.tools.map((tool : string) => <TechnologyBox text={tool}/>)}

            </div>
        </Box>
    )
}