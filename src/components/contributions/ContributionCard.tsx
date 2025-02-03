import { Flex, Link, Text } from "@radix-ui/themes";
import { Contribution } from "../../constants/type";
import TechnologyPill from "../projects/TechnologyPill";

export default function ContributionCard({data} : {data: Contribution}){
    return (
        <Flex className="w-full bg-container text-regular p-3 border-l-2 border-borderColor " gap="3">
            {/* LOGO */}
            <Flex>
                <img src={data.logo} className="h-[40px] rounded-full"/>
            </Flex>

            {/* OTHER DETAILS */}
            <Flex direction="column" gap="3" className="w-full">
                {/* HEADER */}
                <Flex justify="between" gap={{initial: "0", md: "2"}} direction={{initial: "column", md: "row"}} className="border-b-2">
                    {/* TITLE */}
                    <Flex className="" direction="column">
                        <Link href={data.link} target="_blank" >
                            <Text weight="regular" className="text-subHeading hover:underline">
                                {data.title}
                            </Text>
                        </Link>
                        <Text>
                            {data.role}
                        </Text>
                    </Flex>
                    {/* DATE */}
                    <Flex className="" justify={{initial: "start", md: "end"}}>
                        <Text weight="regular" className="text-subHeading">
                            {data.date}
                        </Text>
                    </Flex>
                    {/* <hr className="mt-1"/> */}
                </Flex>
                {/* BODY */}
                <Flex gap="3" justify="between" direction={{initial: "column", md: "row"}}>
                    {/* DESCRIPTION */}
                    <Flex>
                        {data.description}
                    </Flex>
                    {/* TECH STACK */}
                    <Flex gap="2" wrap="wrap" justify={{initial: "start", md:"end"}} >
                        {data.technologies.map((tech, index) => (
                            <TechnologyPill key={index} text={tech}/>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}