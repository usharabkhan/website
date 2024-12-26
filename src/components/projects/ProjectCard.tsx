import TechnologyPill from "./TechnologyPill"
import { Flex, Text } from "@radix-ui/themes"
import { FaGithub } from "react-icons/fa"
import { LuView } from "react-icons/lu";
import Button from "../common/button";
import ProjectTitle from "./ProjectTitle";

export default function ProjectCard({...props}){
    const data = props.data;
    return(
        <div 
            className="flex flex-col justify-self-center p-5 gap-y-5 hover:cursor-pointer
                     bg-container border-l-4 border-l-textPrimary rounded-sm shadow-md
                        w-full lg:w-[80vw] 3xl:h-[50vh] 3xl:w-[60vw] justify-evenly
            "
            onMouseEnter={props.onEnter} 
            onMouseLeave={props.onLeave}
        >
            {/* SUB CONTAINER 1 */}
            <Flex gap="5" direction={{initial: "column", lg: "row"}}>

                {/* ITEM CONTAINER 1 */}
                <Flex align="center" justify="center" width={{initial: "100%", lg: "50%"}}>

                    {/* PROJECT IMAGE */}
                    <Flex direction="column" maxHeight="full" maxWidth="80%">
                        <img 
                            src={data.image} 
                            className="max-h-full max-w-full object-contain rounded" 
                        />
                    </Flex>
                </Flex>
                
                {/* ITEM CONTAINER 2 */}
                <Flex direction="column" width={{initial: "100%", lg: "50%"}}>

                    {/* HEADER */}
                    <ProjectTitle data={data}/>

                    {/* DESCRIPTION */}
                    <Flex direction="column" className="p-4 text-md sm:text-lg align-self-end">
                        <Text as="div" className="text-white" align="left">
                            {data.description}
                        </Text>
                        <br></br>
                        {/* FEATURES */}
                        <Flex direction="column">
                            {data.bullets.map((bullet : string) => 
                                <Text key={bullet} className="text-white">- {bullet}</Text>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            
            {/* SUB CONTAINER 2 */}
            <Flex gap="5" direction={{initial: "column", lg: "row"}}>

                {/* ITEM CONTAINER 3 */}
                <Flex gap="3" wrap="wrap" align="center" justify="center" width={{initial: "100%", lg: "50%"}}>

                    {/* TECHNOLOGIES */}
                    {data.technologies.map((tech: string) => 
                        <TechnologyPill key={tech} text={tech}/>
                    )}
                </Flex>
                
                {/* ITEM CONTAINER 4 */}
                <Flex gap="3" align="center" justify="center" width={{initial: "100%", lg: "50%"}}>

                    {/* GIT BUTTON */}
                    {data.url.length > 0 &&
                        <Button href={data.url}>
                            <FaGithub className="mr-1"/>
                            View on GitHub
                        </Button>
                    }

                    {/* DEMO BUTTON */}
                    {data.demoUrl.length > 0 &&
                        <Button href={data.demoUrl}>
                            <LuView className="mr-1"/>
                            Live Demo
                        </Button>
                    }
                </Flex>
            </Flex>
        </div> 
    )
} 