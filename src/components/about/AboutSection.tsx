import { Flex, Heading, Text } from "@radix-ui/themes"
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { MdOutlineMail, MdDownload, MdOutlineWavingHand  } from "react-icons/md";
import Button from "../common/button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutSection(){
    const imgUrl = "https://static.vecteezy.com/system/resources/previews/011/961/865/non_2x/programmer-icon-line-color-illustration-vector.jpg"
    const roles = ["Fullstack Developer", "Cloud Architect", "Cloud Developer"]
    const [currentIndex, setCurrentIndex] = useState(0);
    const bio = `
                I am fourth year Computer Science student at the University of Calgary, Canada.
                As an award winning student on the dean's honor list, I have immense curiosity to  
                constantly learn new technologies and skills. 
                `
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000); // Change every 3 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
        }, [roles.length]);
    return(
        <div className="flex flex-col min-h-[100vh] p-6 sm:max-h-[100vh] sm:flex-row sm:p-10 ">
            <div className="flex-[1.5] text-textPrimary text-3xl mb-4">
                <img src={imgUrl} className="max-h-[50%] max-w-[50%] sm:hidden justify-self-center mb-5 rounded-3xl"/>
                <Flex gap="4" align="center">  
                    <Heading  size="9" weight="regular">
                        Hi there!
                    </Heading>
                    <MdOutlineWavingHand className="text-yellow-200 animate-wave"/>
                </Flex>
                
                <br></br>
                <p>I am Usharab, an aspiring{" "} 
                    <span className="text-secondary font-bold">
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
                </p>
                <br></br>
                <Text size="5" weight="bold" as="div" className="mb-4">About me</Text>
                <Text size="4">{bio}</Text>
            </div>
            <div className="flex flex-col flex-1 items-center">
                <div className="flex-1 max-h-[50%]">
                    <img src={imgUrl} className="max-h-full hidden sm:flex rounded-3xl"/>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                    <Flex justify="center" align="center" gap="6" className="my-5" >
                        <Button customStyle="rounded-3xl text-2xl">
                            <AiOutlineLinkedin/>
                        </Button>
                        <Button customStyle="rounded-3xl text-2xl">
                            <AiOutlineGithub/>
                        </Button>
                        <Button customStyle="rounded-3xl text-2xl">
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
    )
}