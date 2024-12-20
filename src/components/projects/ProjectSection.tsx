import ProjectCard from "./ProjectCard"
import { Heading, ScrollArea } from "@radix-ui/themes"
import { Flex } from "@radix-ui/themes"
import { projects } from "../../constants/data"
import { useEffect, useState } from "react"
import { ProjectDetail } from "../../constants/type"
import Button from "../common/button"
import { GrNext, GrPrevious } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion"
export default function ProjectSection(){
    const totalProjects = projects.length
    const [projectIndex, setProjectIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(projectIndex);
    const [currProject, setCurrProject] = useState<ProjectDetail>(projects[0]);
    useEffect(() => {
        setCurrProject(projects[projectIndex]);
    }, [projectIndex])

    return(
        <div className="flex flex-col min-h-fit p-4 mx-2 h-[100vh]">
            <Heading weight="regular" size="7" className="text-textPrimary self-center mb-3">My Projects</Heading>
            <div className="gap-x-3 h-[80%]">
                <Flex justify="center" className="h-full justify-center items-center">
                    <AnimatePresence mode="wait"> 
                        <motion.div
                            key={projectIndex}
                            initial={{ opacity: 0, x: projectIndex > prevIndex ? 100 : -100, y: 0  }} // Slide in from the right/left
                            animate={{ opacity: 1, x: 0, y: 0  }} // Set position to default
                            exit={{ opacity: 0, x: projectIndex > prevIndex ? 100 : -100, y: 0  }} // Slide out to the left/right
                            transition={{ duration: 0.3, ease: "easeInOut" }} // Duration of the animation
                            className="w-full h-full"
                        >
                            <ProjectCard data={currProject} />
                        </motion.div>
                    </AnimatePresence>
                </Flex>
                <Flex gap="5" align='center' justify='center' className="mt-6">
                    <Button 
                        disabled={projectIndex == 0}
                        onPress={() => {
                            setPrevIndex(projectIndex);
                            setProjectIndex((prev) => prev - 1);
                        }}
                    >
                        <GrPrevious/>
                        Previous
                    </Button>
                    <Heading weight="regular" size='3' className="text-textPrimary self-center">
                        { (projectIndex + 1) + "/" + totalProjects}
                    </Heading>
                    <Button 
                        disabled={projectIndex == (totalProjects-1)}
                        onPress={() => {
                            setPrevIndex(projectIndex);
                            setProjectIndex((prev) => prev + 1);
                        }}
                    >
                        Next
                        <GrNext/>
                    </Button>
                </Flex>
            </div>
        </div>
    )
}