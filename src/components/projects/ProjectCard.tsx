import TechnologyPill from "./TechnologyPill"
import { Badge, Flex, Text } from "@radix-ui/themes"
import ProjectTitle from "./ProjectTitle"

export default function ProjectCard({...props}){
    const data = props.data;

    return(
        <Flex 
            direction={{ initial: "column-reverse", md: "row" }}
            className="w-full bg-container border-l-2 border-borderColor "
            maxHeight={{ initial: "auto", md: "200px" }}
            width="100%"
        >

            <Flex direction="column" justify="between" className="w-full mr-2 p-2" gap="2">
                <Flex direction="column" className="w-full" gap="2">

                    {/* HEADER */}
                    <Flex direction={{initial: "column", md: "row" }} justify="between" align="center" className="">
                        <ProjectTitle data={data}/>
                        {/* COMPLETION */}
                        <Badge color={`${data.progress[0] == 'I' ? 'yellow' : 'jade'}`} variant="solid" >
                            <Text weight="light">
                                {data.progress}
                            </Text>
                        </Badge>
                        
                    </Flex>
                    
                    {/* DESCRIPTION */}
                    <Flex className="">
                        <Text weight="light" className="text-regular">
                            {data.description}
                        </Text>
                    </Flex>
                </Flex>

                {/* TECH STACK */}
                <Flex gap="2" wrap="wrap" justify={{initial: "center", md: "start"}} className="">
                    {data.technologies.map((tech: string) => 
                        <TechnologyPill key={tech} text={tech}/>
                    )}
                </Flex>
            </Flex>

            {/* PROJECT IMAGE */}
            <Flex direction="column" >
                <img 
                    src={data.image} 
                    className="max-h-[100%] max-w-[100%] lg:max-w-[300px] object-contain " 
                />
            </Flex>
        </Flex>
    )
} 