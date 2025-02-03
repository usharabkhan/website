import { Flex, Text, Link } from "@radix-ui/themes";
import { IoOpenOutline } from "react-icons/io5";

export default function ProjecTitle( { data } : any) {
    return(
        
        <Link href={data.url} className="" >
            <Flex direction="row" align="center" justify={{initial: "center", md: "start"}} 
                className="w-full text-subHeading hover:underline hover:cursor-pointer">
                {/* TITLE */}
                <Text size="4" as="div" weight="regular" align="center" className="flex items-center">
                    {data.title}&nbsp;
                    {/* GIT BUTTON */}
                    <span><IoOpenOutline/></span>
                </Text>
                      
            </Flex>
        </Link>
    )
}