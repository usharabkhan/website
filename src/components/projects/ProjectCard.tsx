import TechnologyPill from "./TechnologyPill";
import { Badge, Text } from "@radix-ui/themes";
import ProjectTitle from "../common/title";
import { ImageOff } from "lucide-react";

export default function ProjectCard({ data }: { data: any }) {
  return (
    <div className="bg-container border border-borderColor/20 rounded-xl shadow-md p-4 flex flex-col gap-4 hover:shadow-lg transition-shadow
                    w-full max-w-sm mx-auto">
      {/* PROJECT IMAGE */}
      <div className="w-full aspect-video bg-muted flex items-center justify-center rounded-lg overflow-hidden">
        {data.image ? (
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImageOff className="w-12 h-12 text-gray-400" />
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-3">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <ProjectTitle title={data.title} url={data.url} />
          <Badge
            color={data.progress[0] === "I" ? "yellow" : "jade"}
            variant="solid"
          >
            <Text weight="light">{data.progress}</Text>
          </Badge>
        </div>

        {/* DESCRIPTION */}
        <Text weight="light" className="text-regular text-justify">
          {data.description}
        </Text>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {data.technologies.map((tech: string) => (
            <TechnologyPill key={tech} text={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
