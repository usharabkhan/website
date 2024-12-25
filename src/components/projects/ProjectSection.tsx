import ProjectCard from "./ProjectCard";
import { Heading, Progress } from "@radix-ui/themes";
import { Flex } from "@radix-ui/themes";
import { projects } from "../../constants/data";
import { useEffect, useRef, useState, useCallback } from "react";
import { ProjectDetail } from "../../constants/type";
import Button from "../common/button";
import MyHeading from "../common/heading";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegCirclePause } from "react-icons/fa6";

function ProjectSection() {
    const totalProjects = projects.length;
    const [projectIndex, setProjectIndex] = useState(3);
    const [currProject, setCurrProject] = useState<ProjectDetail>(projects[0]);
    const [progress, setProgress] = useState(1);

    const timerRef = useRef<number | null>(null);
    const progressRef = useRef<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            startTimer();
        } else {
            pauseTimer();
        }
    }, []);

    const startTimer = () => {
        if (!timerRef.current) {
            // timerRef.current = window.setInterval(() => {
            //     setProjectIndex((prev) => (prev + 1) % totalProjects);
            // }, 5000);
        }

        if (!progressRef.current) {
            progressRef.current = window.setInterval(() => {
                setProgress((prev) => (prev < 100 ? prev + 1 : 1));
            }, 50); // Increment progress every 50ms
        }
    };

    const pauseTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        if (progressRef.current) {
            clearInterval(progressRef.current);
            progressRef.current = null;
            setProgress(0);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [handleIntersection]);

    useEffect(() => {
        setCurrProject(projects[projectIndex]);
        setProgress(0);
    }, [projectIndex]);
    
    useEffect(() => {
        startTimer();
        return () => pauseTimer();
    }, []);

    return (
        <div ref={sectionRef} id="projects" className="flex flex-col items-center justify-center my-2 min-h-fit ">
            <MyHeading type="h2" title="My Projects" customStyle="text-textPrimary self-center mb-3"/>
            <div className="flex flex-col items-center gap-x-3 h-[80%] w-full">

                {/* PROJECT CARD */}
                <Flex justify="center" className="h-full w-full justify-center items-center sm:p-5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={projectIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full h-full"
                        >
                            <ProjectCard
                                data={currProject}
                                onEnter={pauseTimer}
                                onLeave={startTimer}
                            />
                        </motion.div>
                    </AnimatePresence>
                </Flex>
                
                {/* PROGRESS BAR */}
                <div className="w-[30%] relative h-2 mt-6">
                    {timerRef.current ? (
                        <Progress value={progress} max={100} color="sky" variant="soft"/>
                    ):( 
                        <div className="flex justify-center w-full text-textPrimary text-xl">
                            <FaRegCirclePause/>
                        </div>

                    )}
                </div>
                
                {/* PROJECT NAVIGATION */}
                <Flex gap="5" align="center" justify="center" className="mt-6">
                    <Button
                        disabled={projectIndex === 0}
                        onPress={() => {
                            setProjectIndex((prev) => prev - 1);
                            pauseTimer();
                            startTimer();
                        }}
                    >
                        <GrPrevious />
                        Previous
                    </Button>
                    <Heading weight="regular" size="3" className="text-textPrimary self-center">
                        {projectIndex + 1}/{totalProjects}
                    </Heading>
                    <Button
                        disabled={projectIndex === totalProjects - 1}
                        onPress={() => {
                            setProjectIndex((prev) => prev + 1);
                            pauseTimer();
                            startTimer();
                        }}
                    >
                        Next
                        <GrNext />
                    </Button>
                </Flex>
            </div>
        </div>
    );
}

export default ProjectSection