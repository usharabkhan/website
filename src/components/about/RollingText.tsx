import { Flex, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { roles } from '../../constants/data';
import { gsap } from 'gsap';

export default function RollingText() {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);
        return () => {
            clearInterval(interval); 
        }
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate the old value out
        tl.fromTo("#rolling-text", 
            { opacity: 1, yPercent: 0 }, 
            { duration: 0.5, opacity: 0, yPercent: -50, ease: "power1" }
        );

        // Update text content to new value
        tl.call(() => {
            document.querySelector("#rolling-text")!.textContent = roles[currentIndex];
        });

        // Animate the new value in
        tl.fromTo("#rolling-text", 
            { opacity: 0, yPercent: 50 }, 
            { duration: 0.5, opacity: 1, yPercent: 0, ease: "power1" }
        );
    }, [currentIndex, roles]);

    return (
        <Flex id="sub-heading" align="center"  className="flex-wrap">
            <Text as="span" weight="light" size={{initial: "4", md: "5"}}>I am Usharab, an aspiring&nbsp;</Text>
            <Text id="rolling-text" as="span" size={{initial: "4", md: "5"}} className="text-heading"/>
        </Flex>
    );
};
