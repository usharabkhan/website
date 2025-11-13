import TechnologyPill from "./TechnologyPill";
import { Badge, Text } from "@radix-ui/themes";
import ProjectTitle from "../common/title";
import { ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { ProjectType } from "../../data/projects";
import { ProjectDetail } from "../../data/type";

export default function ProjectCard(data: ProjectDetail) {
  return (
    <Link to={data.url} className="hover:no-underline group">
      <Card className="flex flex-col bg-gradient-to-br from-container via-accent to-container size-full max-w-sm p-6 rounded-2xl text-text space-y-4 border border-borderColor hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-1 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* PROJECT IMAGE */}
        <div className="w-full aspect-video bg-subContainer flex items-center justify-center rounded-xl overflow-hidden border border-borderColor">
          {data.image ? (
            <img src={data.image} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          ) : (
            <ImageOff className="w-12 h-12 text-regular" />
          )}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-3 flex-grow relative z-10">
          {/* TITLE */}
          <Text weight="medium" size={"4"} className="text-primary font-semibold">{data.title}</Text>

          {/* DESCRIPTION */}
          <Text weight="light" size={"2"} className="text-regular leading-relaxed">
            {data.description}
          </Text>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2">
            {data.technologies.map((tech: string) => (
              <TechnologyPill key={tech} text={tech} />
            ))}
          </div>
        </div>
        <div className="flex items-end justify-end w-full relative z-10">
          <Badge
            color={data.progress[0] === "I" ? "yellow" : "jade"}
            variant="solid"
            className="w-fit"
          >
            <Text weight="light" size="1">{data.progress}</Text>
          </Badge>
        </div>
      </Card>
    </Link>
  );
}
