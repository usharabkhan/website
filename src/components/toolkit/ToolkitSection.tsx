import { toolkit } from "../../constants/data";
import ToolkitSubSection from "./ToolkitSubSection";
import MyHeading from "../common/heading";
function ToolkitSection () {
    return(
        <div id="skills" className="flex flex-col items-center justify-center my-2 min-h-fit">
            <MyHeading type="h2" title="My Toolkit" customStyle="text-textPrimary self-center"/>
            <div className="flex flex-col h-full w-full">
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