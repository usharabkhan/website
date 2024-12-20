import ProjectCard from "./ProjectCard";
import { Heading } from "@radix-ui/themes";
import { Flex } from "@radix-ui/themes";
import { projects } from "../../constants/data";
import { useEffect, useRef, useState } from "react";
import { ProjectDetail } from "../../constants/type";
import Button from "../common/button";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectSection() {
    const totalProjects = projects.length;
    const [projectIndex, setProjectIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(projectIndex);
    const [currProject, setCurrProject] = useState<ProjectDetail>(projects[0]);
    const [progress, setProgress] = useState(0);

    const timerRef = useRef<number | null>(null);
    const progressRef = useRef<number | null>(null);

    useEffect(() => {
        setCurrProject(projects[projectIndex]);
    }, [projectIndex]);

    const startTimer = () => {
        if (!timerRef.current) {
            timerRef.current = window.setInterval(() => {
                setProjectIndex((prev) => (prev + 1) % totalProjects);
            }, 5000);
        }

        if (!progressRef.current) {
            progressRef.current = window.setInterval(() => {
                setProgress((prev) => (prev < 100 ? prev + 1 : 0));
            }, 50); // Increment progress every 100ms
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
        }
    };

    useEffect(() => {
        startTimer();
        return () => pauseTimer();
    }, []);

    useEffect(() => {
        setProgress(0); // Reset progress on project change
    }, [projectIndex]);

    return (
        <div className="flex flex-col p-4 mx-2 min-h-[100vh]">
            <Heading weight="regular" size="8" className="text-textPrimary self-center mb-3">
                My Projects
            </Heading>
            <div className="gap-x-3 h-[80%]">
                <Flex justify="center" className="h-full justify-center items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={projectIndex}
                            initial={{
                                opacity: 0,
                                x: projectIndex > prevIndex ? 100 : -100,
                                y: 0,
                            }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            exit={{
                                opacity: 0,
                                x: projectIndex > prevIndex ? 100 : -100,
                                y: 0,
                            }}
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
                
                <div className="w-[30%] relative h-2 bg-primary rounded mt-6 justify-self-center">
                    <div
                        className="absolute h-full bg-textPrimary rounded"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <Flex gap="5" align="center" justify="center" className="mt-6">
                    <Button
                        disabled={projectIndex === 0}
                        onPress={() => {
                            setPrevIndex(projectIndex);
                            setProjectIndex((prev) => prev - 1);
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
                            setPrevIndex(projectIndex);
                            setProjectIndex((prev) => prev + 1);
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
