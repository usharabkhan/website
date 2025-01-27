import TechnologyPill from "./TechnologyPill"
import { Badge, Flex, Text } from "@radix-ui/themes"
import { FaGithub } from "react-icons/fa"
import { LuView } from "react-icons/lu";
import Button from "../common/button";
import ProjectTitle from "./ProjectTitle";

export default function ProjectCard({...props}){
    const data = props.data;

    return(
        <Flex direction="column">
                <div 
                    // className="flex flex-row justify-self-center  gap-y-5 hover:cursor-pointer
                    //         bg-container border-l-4 border-l-textPrimary rounded-sm shadow-md
                    //             w-full lg:w-[80vw] 3xl:h-[50vh] 3xl:w-[60vw] justify-evenly
                    // "
                    className="flex flex-row bg-container "
                >
                    <Flex direction="column" className="w-full mr-2">
                        {/* HEADER */}
                        <Flex direction="row" justify="between" align="center" className="">
                            <ProjectTitle data={data}/>
                            {/* COMPLETION */}
                            <Badge color={`${data.progress[0] == 'I' ? 'yellow' : 'jade'}`} variant="solid">
                                {data.progress}
                            </Badge>
                            
                        </Flex>
                        {/* DESCRIPTION */}
                        <Flex>
                            <Text className="text-white">
                                {data.description}
                            </Text>
                        </Flex>
                        {/* TECH STACK */}
                        <Flex gap="2" wrap="wrap" className="">
                            {data.technologies.map((tech: string) => 
                                <TechnologyPill key={tech} text={tech}/>
                            )}
                        </Flex>
                    </Flex>
                    {/* PROJECT IMAGE */}
                    <Flex direction="column" maxHeight="300px" maxWidth="300px">
                        <img 
                            src={data.image} 
                            className="max-h-full max-w-full object-contain rounded" 
                        />
                    </Flex>
                </div> 
            <br/>
        </Flex>
    )
} 