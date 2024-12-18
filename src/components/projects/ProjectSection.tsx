import ProjectCard from "./ProjectCard"
import { Heading, ScrollArea } from "@radix-ui/themes"
import { Flex } from "@radix-ui/themes"
import { projects } from "../../constants/data"

export default function ProjectSection(){
    return(
        <div className="border-t-2 border-t-slate-200 flex-1 p-4 ">
            <Heading weight="bold">Projects</Heading>
            
            <ScrollArea scrollbars="horizontal">
                <Flex gap="5" className="flex flex-row bg-[#f6f6f6] justify-center items-stretch">
                    {projects.map((project, index) => <ProjectCard key={index} data={project}/>)}
                </Flex>
            </ScrollArea>
        </div>
    )
}