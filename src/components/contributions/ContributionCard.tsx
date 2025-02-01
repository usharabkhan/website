import { Flex, Link, Text } from "@radix-ui/themes";
import { Contribution } from "../../constants/type";
import TechnologyPill from "../projects/TechnologyPill";

export default function ContributionCard({data} : {data: Contribution}){
    return (
        <Flex className="w-full bg-container text-textPrimary p-3 border-l-4 border-l-textPrimary rounded-lg" gap="3">
            {/* LOGO */}
            <Flex>
                <img src={data.logo} className="h-[40px] rounded-full"/>
            </Flex>

            {/* OTHER DETAILS */}
            <Flex direction="column" gap="3" className="w-full">
                {/* HEADER */}
                <Flex justify="between" gap="3">
                    {/* TITLE */}
                    <Flex className="" direction="column">
                        <Link href={data.link} target="_blank" >
                            <Text weight="bold" className="text-textPrimary hover:underline">
                                {data.title}
                            </Text>
                        </Link>
                        <Text>
                            {data.role}
                        </Text>
                        <hr className="mt-1"/>
                    </Flex>
                    {/* DATE */}
                    <Flex className="" justify="end">
                        <Text  weight="bold">
                            {data.date}
                        </Text>
                    </Flex>
                </Flex>
                {/* BODY */}
                <Flex gap="3" justify="between">
                    {/* DESCRIPTION */}
                    <Flex>
                        {data.description}
                    </Flex>
                    {/* TECH STACK */}
                    <Flex gap="2" wrap="wrap" justify="end" >
                        {data.technologies.map((tech, index) => (
                            <TechnologyPill key={index} text={tech}/>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}