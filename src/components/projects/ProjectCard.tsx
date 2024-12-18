import TechnologyPill from "./TechnologyPill"
import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes"
import { FaGithub } from "react-icons/fa"
import { Technology } from "../../constants/type";

export default function ProjectCard({...props}){
    const data = props.data;
    return(
        <Box 
            minWidth="400px" 
            // maxWidth="400px" 
            minHeight="200px" 
            maxHeight="200px" 
            className="hover:cursor-pointer flex flex-col justify-between">
            <Card className="">
                <Flex gap="3" align="center">
                    <Avatar
                        size="3"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        radius="full"
                        fallback="T"
                    />
                    <Box>
                        <Text as="div" size="2" weight="bold">
                            {data.title}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {data.description}
                        </Text>
                        <Flex gap="3" className="mt-2 flex-wrap items-center">
                            {data.technologies.map((tech: string) => <TechnologyPill key={tech} text={tech}/>
                            )}
                        </Flex>
                    </Box>
                    
                </Flex>
                <Flex justify="center" className="mt-2 pt-2 border-t-2 hover:cursor-pointer">
                    <a href={data.url} target="_blank" rel="noopener noreferrer">
                    <Button className="self-center hover:cursor-pointer">
                        <FaGithub></FaGithub>
                        View on GitHub
                    </Button>
                    </a>
                </Flex>
            </Card>
           
        </Box>
    )
} 