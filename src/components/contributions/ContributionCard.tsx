import { Flex, Link, Text } from "@radix-ui/themes";
import { Contribution } from "../../constants/type";
import TechnologyPill from "../projects/TechnologyPill";
import Title from "../common/title";

export default function ContributionCard({data} : {data: Contribution}){
    return (
        <Flex className="w-full bg-container text-regular p-3 border-l-2 border-borderColor " gap={{initial: "0", md: "3"}}>
            {/* LOGO FOR DESKTOP */}
            <Flex>
                <img src={data.logo} className="h-[40px] rounded-full hidden lg:flex"/>
            </Flex>

            {/* OTHER DETAILS */}
            <Flex direction="column" gap="3" className="w-full">
                {/* HEADER */}
                <Flex justify="between" gap={{initial: "0", md: "2"}} direction={{initial: "column", md: "row"}} className="border-b-2">
                    {/* TITLE */}
                    <Flex align={{initial: "center", md: "start"}} justify="center" direction="column" >
                        <Flex className="w-full" align="center" justify="center" gap="2">
                            {/* MOBILE LOGO */}
                            <img src={data.logo} className="h-[40px] w-[40px] rounded-full lg:hidden"/>
                            <Title title={data.title} url={data.link}/>
                        </Flex>
                        <Text>
                            {data.role}
                        </Text>
                    </Flex>
                    {/* DATE */}
                    <Flex className="" justify={{initial: "center", md: "end"}}>
                        <Text weight="regular" className="text-subHeading">
                            {data.date}
                        </Text>
                    </Flex>
                </Flex>
                {/* BODY */}
                <Flex gap="3" justify="between" direction={{initial: "column", md: "row"}}>
                    {/* DESCRIPTION */}
                    <Flex>
                        <Text align={{initial: "center", md:"left"}}>
                            {data.description}
                        </Text>
                    </Flex>
                    {/* TECH STACK */}
                    <Flex gap="2" wrap="wrap" justify={{initial: "center", md:"end"}} >
                        {data.technologies.map((tech, index) => (
                            <TechnologyPill key={index} text={tech}/>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}