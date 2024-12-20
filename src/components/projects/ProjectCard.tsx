import TechnologyPill from "./TechnologyPill"
import { Badge, Flex, Text } from "@radix-ui/themes"
import { FaGithub } from "react-icons/fa"
import Button from "../common/button";

export default function ProjectCard({...props}){
    const data = props.data;
    return(
        <div className="flex flex-col justify-between w-full h-full 
                        bg-secondary p-3 my-2 rounded-sm hover:cursor-pointer
                        sm:w-[80%] sm:p-10 sm:justify-self-center
                        " onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col flex-1 justify-center items-center">
                    <img src={data.image} className="max-w-[100%] max-h-[90%]  shadow-sm shadow-gray-500 rounded-lg"/>
                </div>
                <div className="flex-[1.5]">
                    <Text as="div" size="6" className="text-white mb-4" align="center" weight="bold">
                        {data.title}
                        <Badge color={`${data.progress[0] == 'I' ? 'yellow' : 'jade'}`} variant="solid">
                            {data.progress}
                        </Badge>
                    </Text>
                    <div className=" rounded-sm h-full p-4">
                        <Text as="div" size="3" className="text-white" align="left">
                            {data.description}
                        </Text>
                        <br></br>
                        <div className="flex flex-col h-full">
                            {data.bullets.map((bullet : string) => 
                                <p key={bullet} className="text-white">- {bullet}</p>
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
                    <a href={data.url} target="_blank" rel="noopener noreferrer">
                        <Button>
                            <FaGithub className="mr-1"/>
                            View on GitHub
                        </Button>
                    </a>
                    {data.demoUrl.length > 0 &&
                        <a>
                            <Button>
                                Live Demo
                            </Button>
                        </a>
                    }
                </div>
            </div>
        </div> 
    )
} 