import { Flex, Text } from "@radix-ui/themes"
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { MdOutlineMail, MdDownload, MdOutlineWavingHand  } from "react-icons/md";
import Button from "../common/button";
import MyHeading from "../common/heading";
import MyImage from "../../assets/image/me.png"
import RollingText from "./RollingText";
import TechnologyPill from "../projects/TechnologyPill";
import { OtherLogos } from "../../constants/data";


export default function AboutSection() {
    const bio = `
    
    `;
    return(
        <div id="home" className="flex flex-col p-5 min-h-fit sm:flex-row sm:p-10 sm:min-h-[100vh]">
            <div className="flex flex-col flex-[1.5] items-center sm:items-start text-textPrimary">
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
                <div className="flex flex-col text-xl sm:text-2xl items-center sm:items-start">
                    <Text weight="bold" className="mb-4">About me</Text>
                    <Flex gap="5" className="mb-5" wrap="wrap" align="center" justify="center">
                        <TechnologyPill text="University of Calgary" img={OtherLogos["uni"]}/>
                        <TechnologyPill text="Class of 2025" img={OtherLogos["class"]}/>
                        <TechnologyPill text="Computer Science" img={OtherLogos["compsci"]}/>
                        <TechnologyPill text="Microsoft Certified" img={OtherLogos["microsoft"]}/>
                    </Flex>
                    <Text className="text-justify">{bio}</Text>
                </div>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center gap-y-5">
                {/* DESKTOP IMAGE */}
                <div className="flex-1 max-h-[50%] hidden sm:flex">
                    <img src={MyImage} className="max-h-full"/>
                </div>

                {/* MY SOCIALS */}
                <div className="flex flex-col justify-center items-center gap-5 py-5">
                    <Flex justify="center" align="center" gap="6" >
                        <Button customStyle="rounded-full text-2xl" href="https://www.linkedin.com/in/usharabkhan/">
                            <AiOutlineLinkedin/>
                        </Button>
                        <Button customStyle="rounded-full text-2xl" href="https://github.com/usharabkhan/" >
                            <AiOutlineGithub/>
                        </Button>
                        <Button customStyle="rounded-full text-2xl" href="mailto:usharabkhan@gmail.com">
                            <MdOutlineMail/>
                        </Button>
                    </Flex>
                    <Flex justify="center">
                        <Button customStyle="text-xl">
                            <MdDownload />
                            My Resume
                        </Button>
                    </Flex>
                </div>
            </div>
        </div>
    );
}
