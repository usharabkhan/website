import { Flex, Text } from "@radix-ui/themes"
import { MdOutlineWavingHand  } from "react-icons/md";
import MyHeading from "../common/heading";
import Socials from "../common/socials";
import MyImage from "../../assets/image/me.png"
import RollingText from "./RollingText";
import TechnologyPill from "../projects/TechnologyPill";
import { bio, OtherLogos } from "../../constants/data";


export default function AboutSection() {
    return(
        <div id="home" className="flex flex-col p-5 min-h-fit sm:flex-row sm:p-10">
            <div className="flex flex-col flex-[2] items-center sm:items-start text-textPrimary">
                {/* MOBILE IMAGE */}
                <img src={MyImage} className="max-h-[50%] max-w-[50%] sm:hidden"/>
                <br></br>

                {/* HEADING */}
                <MyHeading type="h1" title="Hi there!"> 
                    <MdOutlineWavingHand className="text-yellow-200 animate-wave"/>
                </MyHeading>
                <br></br>
                
                {/* SUB HEADING */}
                <RollingText />
                <br></br>

                {/* ABOUT ME */}
                <div className="flex flex-col text-xl items-center sm:items-start">
                    <Text weight="bold" className="mb-4">About me</Text>
                    <Flex gap="5" className="mb-5" wrap="wrap" align="center" justify="center">
                        <TechnologyPill text="University of Calgary" img={OtherLogos["uni"]}/>
                        <TechnologyPill text="Class of 2025" img={OtherLogos["class"]}/>
                        <TechnologyPill text="Computer Science" img={OtherLogos["compsci"]}/>
                        <TechnologyPill text="Microsoft Certified" img={OtherLogos["microsoft"]}/>
                    </Flex>
                    <Text className="text-justify sm:text-left whitespace-pre-line">{bio}</Text>
                    <br></br>
                    <Text className="text-heading font-bold">
                        Let's connect and discuss how I can be valuable for your team!
                    </Text>
                </div>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center gap-y-5">
                {/* DESKTOP IMAGE */}
                <div className="flex-1 max-h-[50%] hidden sm:flex">
                    <img src={MyImage} className="max-h-full"/>
                </div>

                {/* MY SOCIALS */}
                <Socials/>
            </div>
        </div>
    );
}
