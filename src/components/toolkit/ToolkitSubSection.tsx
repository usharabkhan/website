import { Box } from "@radix-ui/themes";
import TechnologyBox from "./TechnologyBox";
import MyHeading from "../common/heading";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ToolkitSubSectionProps {
    title: string,
    tools: string[], 
}
export default function ToolkitSubSection (props : ToolkitSubSectionProps){
    const id = props.title.toLowerCase().replace(/ /g, '-') + "-sub";
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline(
            {scrollTrigger: {
                trigger: "#" + id,
                start: "top 80%",
                end: "bottom bottom",
                toggleActions: "play none none none",
            }}
        );
        tl.fromTo("#" + id, 
            {opacity: 0, x: -50}, 
            {duration: 1.5, opacity: 1, x: 0, ease: "back", stagger: 0.5});
        return () => {
            tl.kill();
        }
    }, [])
    
    return(
        <Box id={id} as="div" className="gap-x-5">
            <MyHeading type="h3" title={props.title} customStyle="text-textPrimary self-center"/>
            <br></br>
            <div className="flex flex-row flex-wrap gap-7 justify-around">
                {props.tools.map((tool : string) => <TechnologyBox key={tool} text={tool}/>)}
            </div>
        </Box>
    )
}