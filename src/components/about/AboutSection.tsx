import { Flex, Text } from "@radix-ui/themes"
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { MdOutlineMail, MdDownload, MdOutlineWavingHand  } from "react-icons/md";
import Button from "../common/button";
import MyHeading from "../common/heading";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import MyImage from "../../assets/image/me.png"


export default function AboutSection() {
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
        }, 3000);
    
        return () => clearInterval(interval); 
        }, []);
    return(
        <div id="home" className="flex flex-col p-5 min-h-fit sm:flex-row sm:p-10 sm:h-[100vh]">
            <div className="flex flex-col flex-[1.5] items-center sm:items-start text-textPrimary">
                {/* MOBILE IMAGE */}
                <img src={MyImage} className="max-h-[50%] max-w-[50%] sm:hidden"/>
                <br></br>

                {/* HEADING */}
                {/* <Text as="div" className="text-4xl sm:text-6xl"> */}
                <MyHeading type="h1" title="Hi there!"> 
                    <MdOutlineWavingHand className="text-yellow-200 animate-wave"/>
                </MyHeading>
                <br></br>
                
                {/* SUB HEADING */}
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
                <br></br>

                {/* ABOUT ME */}
                <div className="flex flex-col text-xl sm:text-2xl items-center sm:items-start">
                    <Text weight="bold" className="mb-5">About me</Text>
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
