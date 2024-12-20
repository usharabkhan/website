import { Heading } from "@radix-ui/themes";

export default function ToolkitSection(){
    return(
        <div className="flex flex-col min-h-fit p-4 mx-2 h-[100vh]">
            <Heading weight="bold" size="7" className="text-textPrimary self-center mb-3">My Toolkit</Heading>
            
        </div>
    )
}