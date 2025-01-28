import { Flex, Text } from "@radix-ui/themes"
import { MdOutlineWavingHand  } from "react-icons/md";
import Socials from "../common/socials";
import MyImage from "../../assets/image/me.png"
import RollingText from "./RollingText";
import TechnologyPill from "../projects/TechnologyPill";
import { bio, OtherLogos } from "../../constants/data";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function AboutSection() {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo("#my-image", 
            {opacity: 0, x: -50}, 
            {duration: 1, opacity: 1, x: 0, ease: "power3.inOut"}
        );
        tl.fromTo("#heading, #sub-heading, #my-tags, #lets-connect", 
            {opacity: 0, x: +50}, 
            {duration: 0.8, opacity: 1, x: 0, ease: "power3.inOut", stagger: 0.4, delay: -1} 
        );
        return () => {
            
            tl.kill();
            console.log("Killed");
        }
    }, []);
    return(
        <div id="home" className="p-5 min-h-fit sm:p-10 w-[450px] mt-10 border-2 bg-black rounded-xl">
            <div className="flex flex-col items-center justify-center text-textPrimary gap-4">
                <Flex gap="3" align="center">
                    {/* MOBILE IMAGE */}
                    <img id="my-image" src={MyImage} className="h-[150px] "/>

                    <div id="heading" className="">
                        {/* HEADING */}
                        <Text id="heading" as="div" size="6" weight="bold" className="flex flex-row items-center gap-x-2"> 
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
            </div>
        </div>
    );
}
