import { Flex } from '@radix-ui/themes';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { roles } from '../../constants/data';
export default function RollingText() {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);
    
        return () => clearInterval(interval); 
    }, []);
    return (
        <Flex align="center" justify="center" className="flex-wrap text-2xl sm:text-4xl">
            <span >
                I am Usharab, an aspiring&nbsp;
            </span>
            <span className="text-heading font-bold">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentIndex} // Key ensures Framer Motion detects a change
                        initial={{ y: "50%", opacity: 0 }} // Start below the view
                        animate={{ y: "0%", opacity: 1 }} // Roll into view
                        exit={{ y: "-50%", opacity: 0 }} // Roll out of view
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="inline-block"
                    >
                        {roles[currentIndex]}.
                    </motion.span>
                </AnimatePresence>
            </span>
        </Flex>
    );
};
