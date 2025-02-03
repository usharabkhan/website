import { Flex, Text } from "@radix-ui/themes";
import { Heading } from "../common/heading";
import { bio } from "../../constants/data";

export default function AboutSection(){
    return(
        <Flex className="w-full p-5 sm:p-10" justify={{ initial: "center", lg: "start" }}>
            <Flex id="about" 
                direction="column" 
                className="min-h-fit"
                maxWidth={{initial: "350px", md: "750px"}}
            >
                <Heading>About Me</Heading>
                <Text weight="regular" className="text-regular text-justify whitespace-pre-line">
                    {bio}
                </Text>
            </Flex>
        </Flex>
    )
}