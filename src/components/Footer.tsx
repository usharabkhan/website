import { FaHandPointUp } from "react-icons/fa";
import Socials from "./common/socials";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Heading } from "./common/heading";

export default function Footer(): JSX.Element{
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hand",
                onEnter: () => tl.play(),
                onLeave: () => tl.pause(),
                onEnterBack: () => tl.play(),
                onLeaveBack: () => tl.pause(),
            }
        });
        tl.fromTo("#hand", 
            { y: -10 }, 
            { duration: 1, y: 0, repeat: -1, yoyo: true, ease: "power1-inOut" }
        );
        return () => {
            tl.kill();
        }
    }, []);
    return(
        <div className="flex flex-col items-center justify-center p-5 text-white w-full h-fit" >
            <Heading>Hire Me!</Heading>
            <Socials />
            <FaHandPointUp id="hand" size="50" className="text-yellow-400"/>
        </div>
    )
}