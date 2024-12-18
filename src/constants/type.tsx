export type Technology = "Java" | "JavaFX" | "TypeScript" | "React" | "React Native" | "Tailwind";

export interface ProjectDetail {
    title: string,
    description: string,
    technologies: Technology[],
    url: string,
}
