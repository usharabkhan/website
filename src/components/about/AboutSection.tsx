import { Flex, Text } from "@radix-ui/themes";
import { Heading } from "../common/heading";
import { bio } from "../../constants/data";

export default function AboutSection(){
    return(
        <Flex id="about" direction="column" className="min-h-fit p-5 sm:p-10">
            <Heading>About Me</Heading>
            <Text weight="regular" className="text-regular text-justify">
                {bio}
            </Text>
        </Flex>
    )
}