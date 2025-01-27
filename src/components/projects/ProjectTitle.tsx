import { Flex, Badge, Text } from "@radix-ui/themes";
import Button from "../common/button";
import { FaGithub } from "react-icons/fa";
import { LuView } from "react-icons/lu";

export default function ProjecTitle( { data } : any) {
    return(
        <Flex gap="2" direction="row" align="center" className="w-full text-white font-bold">
            {/* TITLE */}
            <Text size="4" className="">{data.title}</Text>
            <Flex direction="row" gap="3">

                {/* GIT BUTTON */}
                {data.url.length > 0 &&
                    <Button href={data.url} customStyle="hover:bg-button hover:text-black text-xs rounded-full">
                        <FaGithub className="mr-1"/>
                    </Button>
                }

                {/* DEMO BUTTON */}
                {data.demoUrl.length > 0 &&
                    <Button href={data.demoUrl} customStyle="hover:bg-button hover:text-black text-xs rounded-full">
                        <LuView className="mr-1"/>
                        {/* Live Demo */}
                    </Button>
                }
            </Flex>
                
                {/* LOGO */}
                {/* {data.logo && 
                    <Badge variant="solid" color="sky">
                        <img src={data.logo} className="max-w-6 max-h-6" />
                        {data.logoName}
                    </Badge>
                } */}

        </Flex>
    )
}