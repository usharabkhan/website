import TechnologyPill from "./TechnologyPill"
import { Badge, Flex, Heading, Text } from "@radix-ui/themes"
import { FaGithub } from "react-icons/fa"
import { LuView } from "react-icons/lu";
import Button from "../common/button";

export default function ProjectCard({...props}){
    const data = props.data;
    return(
        <div className="flex flex-col justify-between w-full h-full shadow-md
                        bg-container p-6 mt-2 rounded-sm hover:cursor-pointer
                         sm:p-10 sm:justify-self-center border-l-4 border-l-textPrimary
                        " onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>

            <div className="flex flex-col sm:flex-row">
                {/* PROJECT IMAGE */}
                <div className="flex flex-col max-h-[350px] max-w-[622px] justify-center items-center mb-5">
                    <img 
                        src={data.image} 
                        className="max-h-full max-w-full object-contain rounded" 
                    />
                </div>
                <div className="flex-1">
                    {/* HEADER */}
                    <Flex className="flex-col items-center">
                        {/* TITLE */}
                        <Heading size="7" className="text-white mb-4" align="center" weight="regular">
                            {data.title}
                            
                        </Heading>
                        
                        <Flex className="flex-row gap-2 items-center justify-center">
                            {/* PROGRESS */}
                            <Badge color={`${data.progress[0] == 'I' ? 'yellow' : 'jade'}`} variant="solid">
                                {data.progress}
                            </Badge>
                            {/* LOGO */}
                            {data.logo && <Badge variant="solid" color="sky">
                                <img src={data.logo} className="max-w-6 max-h-6" />
                                {data.logoName}
                            </Badge>}
                        </Flex>

                    </Flex>

                    {/* DESCRIPTION */}
                    <div className="flex flex-col h-full p-4">
                        <Text as="div" size="5" className="text-white" align="left">
                            {data.description}
                        </Text>
                        <br></br>
                        {/* FEATURES */}
                        <div className="flex flex-col">
                            {data.bullets.map((bullet : string) => 
                                <Text size="5" key={bullet} className="text-white">- {bullet}</Text>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row">
                {/* TECHNOLOGIES */}
                <Flex justify="center" gap="3" align="center" wrap="wrap" className="flex-1">
                    {data.technologies.map((tech: string) => <TechnologyPill key={tech} text={tech}/>
                    )}
                </Flex>

                {/* GIT AND DEMO BUTTON */}
                <div className="flex flex-[1.5] justify-center my-2 pt-2 gap-3">
                    <Button href={data.url}>
                        <FaGithub className="mr-1"/>
                        View on GitHub
                    </Button>
                    {data.demoUrl.length > 0 &&
                        <Button href={data.demoUrl}>
                            <LuView className="mr-1"/>
                            Live Demo
                        </Button>
                    }
                </div>
            </div>
        </div> 
    )
} 