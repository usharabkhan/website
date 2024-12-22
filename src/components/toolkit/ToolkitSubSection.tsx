import { Box } from "@radix-ui/themes";
import TechnologyBox from "./TechnologyBox";
import MyHeading from "../common/heading";
interface ToolkitSubSectionProps {
    title: string,
    tools: string[], 
}
export default function ToolkitSubSection (props : ToolkitSubSectionProps){
    return(
        <Box as="div" className="gap-x-5">
            <MyHeading type="h3" title={props.title} customStyle="text-textPrimary self-center"/>
            <br></br>
            <div className="flex flex-row flex-wrap gap-7 justify-around">
                {props.tools.map((tool : string) => <TechnologyBox key={tool} text={tool}/>)}
            </div>
        </Box>
    )
}