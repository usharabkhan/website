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
    <Link to={data.url} className="hover:no-underline">
      <Card className="flex flex-col bg-accent size-full max-w-sm p-5 rounded-2xl text-background space-y-3 border border-transparent hover:border-secondary transition-all duration-300">
        {/* PROJECT IMAGE */}
        <div className="w-full aspect-video bg-muted flex items-center justify-center rounded-lg overflow-hidden">
          {data.image ? (
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          ) : (
            <ImageOff className="w-12 h-12 text-gray-400" />
          )}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-3">
          {/* TITLE */}
          <p className="text-lg font-medium text-secondary">{data.title}</p>

          {/* DESCRIPTION */}
          <Text weight="light" className="font-extralight text-sm">
            {data.description}
          </Text>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2">
            {data.technologies.map((tech: string) => (
              <TechnologyPill key={tech} text={tech} />
            ))}
          </div>
        </div>
        <div className="flex items-end justify-end w-full flex-grow ">
          <Badge
            color={data.progress[0] === "I" ? "yellow" : "jade"}
            variant="solid"
            className="w-fit"
          >
            <Text weight="light">{data.progress}</Text>
          </Badge>
        </div>
      </Card>
    </Link>
  );
}
