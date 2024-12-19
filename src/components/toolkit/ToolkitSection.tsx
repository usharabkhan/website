import { Heading } from "@radix-ui/themes";

export default function ToolkitSection(){
    return(
        <div className="flex flex-col min-h-fit border-t-2 border-t-container p-4 mx-2">
            <Heading weight="regular" className="text-textPrimary self-center">
                My Toolkit
            </Heading>
        </div>
    )
}