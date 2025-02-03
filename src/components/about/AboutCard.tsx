import { Flex, Text } from "@radix-ui/themes"
import { MdOutlineWavingHand  } from "react-icons/md";
import Socials from "../common/socials";
import MyImage from "../../assets/image/me.png"
import RollingText from "./RollingText";
import TechnologyPill from "../projects/TechnologyPill";
import { bio, OtherLogos } from "../../constants/data";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function AboutCard() {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo("#home", 
            {opacity: 0, x: -50}, 
            {duration: 1, opacity: 1, x: 0, ease: "power3.inOut"}
        );
        tl.fromTo("#heading, #my-image, #sub-heading, #my-tags, #lets-connect", 
            {opacity: 0, x: -50}, 
            {duration: 0.8, opacity: 1, x: 0, ease: "power3.inOut", stagger: 0.1, delay: -1} 
        );
        tl.fromTo("#about, #projects, #contributions, #skills", 
            {opacity: 0, x: +50}, 
            {duration: 0.8, opacity: 1, x: 0, ease: "power3.inOut", stagger: 0.1, delay: -1} 
        );
        return () => {
            tl.kill();
        }
    }, []);
    return(
        <div id="home" 
            className="bg-container border-l-2 border-borderColor 
                        p-5 mt-10 min-h-fit 
                        max-w-[350px] lg:max-w-[450px]"
        >
            <Flex direction="column" align="center" justify="center" gap="4" className="text-regular">
                <Flex gap="3" align="center">
                    {/* MY IMAGE */}
                    <img id="my-image" src={MyImage} className="h-[100px] lg:h-[150px] "/>

                    <div id="heading" className="">
                        {/* HEADING */}
                        <Text id="heading" as="div" size="6" className="flex flex-row items-center gap-x-2 text-subHeading"> 
                            Hi there!
                            <MdOutlineWavingHand className="text-yellow-200 animate-wave"/>
                        </Text>
                        {/* SUB HEADING */}
                        <RollingText />
                    </div>
                </Flex>

                {/* ABOUT ME */}
                <Flex id="my-tags" gap="2" className="" wrap="wrap" align="center" justify="center">
                    <TechnologyPill text="University of Calgary" img={OtherLogos["uni"]}/>
                    <TechnologyPill text="Class of 2025" img={OtherLogos["class"]}/>
                    <TechnologyPill text="Computer Science" img={OtherLogos["compsci"]}/>
                    <TechnologyPill text="Microsoft Certified" img={OtherLogos["microsoft"]}/>
                </Flex>
                
                {/* MY SOCIALS */}
                <div id="lets-connect" className="">
                    <Socials/>
                </div>
            </Flex>
        </div>
    );
}
