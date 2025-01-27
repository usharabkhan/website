import { Flex, Text } from "@radix-ui/themes"
import { MdOutlineWavingHand  } from "react-icons/md";
import MyHeading from "../common/heading";
import Socials from "../common/socials";
import MyImage from "../../assets/image/me.png"
import RollingText from "./RollingText";
import TechnologyPill from "../projects/TechnologyPill";
import { bio, OtherLogos } from "../../constants/data";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function AboutSection() {

    // useEffect(() => {
    //     const tl = gsap.timeline();
    //     tl.fromTo("#my-image, #heading", {scale: 0.3}, {duration: 1, scale: 1, ease: "back"});
    //     tl.fromTo("#sub-heading", {opacity: 0, y: -50}, {duration: 1, opacity: 1, y: 0, ease: "back"});
    //     tl.fromTo("#about-me, #my-tags, #my-bio, #lets-connect", 
    //         {opacity: 0, x: -50}, 
    //         {duration: 1, opacity: 1, x: 0, ease: "power3.inOut", stagger: 1} );
    //     return () => {
            
    //         tl.kill();
    //         console.log("Killed");
    //     }
    // }, []);
    return(
        <div id="home" className="flex flex-col p-5 min-h-fit sm:flex-row sm:p-10 w-[450px] mt-10 border-2">
            <div className="flex flex-col flex-[2] items-center text-textPrimary  ">
                <Flex>
                    {/* MOBILE IMAGE */}
                    <img id="my-image" src={MyImage} className="h-[150px] "/>

                    <div id="heading" className="">
                        {/* HEADING */}
                        <MyHeading type="h2" title="Hi there!"> 
                            <MdOutlineWavingHand className="text-yellow-200 animate-wave"/>
                        </MyHeading>
                        {/* SUB HEADING */}
                        <RollingText />
                    </div>
                </Flex>

                {/* ABOUT ME */}
                <div className="flex flex-col text-sm sm:text-md xl:text-lg items-center sm:items-start">
                    <Text id="about-me" weight="bold" className="mb-4">About me</Text>
                    <Flex id="my-tags" gap="2" className="" wrap="wrap" align="center" >
                        <TechnologyPill text="University of Calgary" img={OtherLogos["uni"]}/>
                        <TechnologyPill text="Class of 2025" img={OtherLogos["class"]}/>
                        <TechnologyPill text="Computer Science" img={OtherLogos["compsci"]}/>
                        <TechnologyPill text="Microsoft Certified" img={OtherLogos["microsoft"]}/>
                    </Flex>
                    {/* <Text id="my-bio" className="text-justify sm:text-left whitespace-pre-line">
                        {bio}
                    </Text>
                    <br></br>
                    <Text id="lets-connect" className="text-justify text-heading font-bold">
                        Let's connect and discuss how I can be valuable for your team!
                    </Text> */}
                </div>
                
                {/* MY SOCIALS */}
                <div id="lets-connect">
                    <Socials/>
                </div>
            </div>
        </div>
    );
}
