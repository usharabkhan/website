import { Flex, Text, Link } from "@radix-ui/themes";
import { IoOpenOutline } from "react-icons/io5";

export default function Title( { title, url } : 
{   
    title: string,
    url: string
}) {
    return(
        <Link href={url} className="hover:no-underline">
            <Flex 
                direction="row" 
                align="center" 
                justify={{ initial: "center", md: "start" }} 
                className="w-full text-subHeading border-b-[1px] border-transparent hover:border-subHeading hover:cursor-pointer transition-all duration-300 ease-in-out"
            >
                {/* TITLE */}
                <Text size="4" as="div" weight="regular" align="center" >
                    {title}&nbsp;
                    {/* GIT BUTTON */}
                    <span className="inline-block">
                        <IoOpenOutline />
                    </span>
                </Text>
            </Flex>
        </Link>
    )
}