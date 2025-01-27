import TechnologyPill from "./TechnologyPill"
import { Badge, Flex, Text } from "@radix-ui/themes"
import { FaGithub } from "react-icons/fa"
import { LuView } from "react-icons/lu";
import Button from "../common/button";
import ProjectTitle from "./ProjectTitle";

export default function ProjectCard({...props}){
    const data = props.data;

    return(
        <Flex className="w-full bg-container border-l-4 border-l-textPrimary">
            <Flex direction="column" className="w-full mr-2 p-2">
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
                    className="max-h-full max-w-full object-contain" 
                />
            </Flex>
        </Flex>
    )
} 