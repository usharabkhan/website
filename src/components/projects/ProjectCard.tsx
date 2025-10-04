import TechnologyPill from "./TechnologyPill";
import { Badge, Text } from "@radix-ui/themes";
import ProjectTitle from "../common/title";
import { ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../ui/card";

export default function ProjectCard({ data }: { data: any }) {
  return (
    <Link to={data.url} className="hover:no-underline">
      {/* <div
        className="bg-container border border-borderColor/20 rounded-xl shadow-md p-4 flex flex-col gap-4 hover:shadow-lg transition-shadow
                    w-full h-full max-w-sm mx-auto"
      > */}
      <Card className="size-full max-w-sm p-5 rounded-2xl bg-accent text-background space-y-3 border-[1px] hover:border-secondary transition-all duration-300">
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
          <p className="text-lg font-medium">{data.title}</p>

          {/* DESCRIPTION */}
          <Text weight="light" className="text-background text-justify">
            {data.description}
          </Text>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2">
            {data.technologies.map((tech: string) => (
              <TechnologyPill key={tech} text={tech} />
            ))}
          </div>
        </div>
        <div className="flex items-end justify-end w-full flex-grow">
          <Badge
            color={data.progress[0] === "I" ? "yellow" : "jade"}
            variant="solid"
            className="w-fit"
          >
            <Text weight="light">{data.progress}</Text>
          </Badge>
        </div>
      </Card>
      {/* </div> */}
    </Link>
  );
}
