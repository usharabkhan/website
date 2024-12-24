import { Flex } from '@radix-ui/themes';
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
        <Flex id="sub-heading" align="center" justify="center" className="flex-wrap text-2xl sm:text-4xl">
            <span >
                I am Usharab, an aspiring&nbsp;
            </span>
            <span id="rolling-text" className="text-heading font-bold">
            </span>
        </Flex>
    );
};
