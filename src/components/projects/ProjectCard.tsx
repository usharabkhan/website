import TechnologyPill from "./TechnologyPill"
import { Badge, Flex, Heading, Text } from "@radix-ui/themes"
import { FaGithub } from "react-icons/fa"
import Button from "../common/button";

export default function ProjectCard({...props}){
    const data = props.data;
    return(
        <div className="flex flex-col justify-between w-full h-full shadow-md
                        bg-container p-6 mt-2 rounded-sm hover:cursor-pointer
                         sm:p-10 sm:justify-self-center border-l-4 border-l-textPrimary
                        " onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col flex-1 justify-center items-center">
                    <img src={data.image} className="max-w-[100%] max-h-[90%] mb-6 sm:mr-6 rounded"/>
                </div>
                <div className="flex-[1.5]">
                    <Flex className="flex-col items-center">
                        <Heading size="7" className="text-white mb-4" align="center" weight="regular">
                            {data.title}
                            
                        </Heading>
                        <Badge color={`${data.progress[0] == 'I' ? 'yellow' : 'jade'}`} variant="solid" className="max-w-fit">
                            {data.progress}
                        </Badge>
                    </Flex>
                    <div className=" rounded-sm h-full p-4">
                        <Text as="div" size="5" className="text-white" align="left">
                            {data.description}
                        </Text>
                        <br></br>
                        <div className="flex flex-col h-full">
                            {data.bullets.map((bullet : string) => 
                                <Text size="5" key={bullet} className="text-white">- {bullet}</Text>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <Flex justify="center" gap="3" align="center" wrap="wrap" className="flex-1 mt-2">
                    {data.technologies.map((tech: string) => <TechnologyPill key={tech} text={tech}/>
                    )}
                </Flex>
                <div className="flex flex-[1.5] justify-center my-2 pt-2 gap-3">
                    <Button href={data.url}>
                        <FaGithub className="mr-1"/>
                        View on GitHub
                    </Button>
                    {data.demoUrl.length > 0 &&
                        <Button href={data.demoUrl}>
                            Live Demo
                        </Button>
                    }
                </div>
            </div>
        </div> 
    )
} 