import { Flex, Text } from "@radix-ui/themes";
import { Contribution } from "../../data/type";
import { Card } from "../ui/card";
import TechnologyPill from "../projects/TechnologyPill";
import Title from "../common/title";
import { Link } from "react-router-dom";

export default function ContributionCard({ data }: { data: Contribution }) {
  return (
    <Link to={data.link}>
      <Card className="w-full max-w-sm p-5 rounded-2xl bg-accent border border-transparent hover:border-secondary transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <img src={data.logo} alt={data.title} className="h-10 w-10 rounded-full object-cover" />
          <div className="flex flex-col text-white">
            {/* <Title title={data.title} url={data.link} /> */}
            <p className="font-medium">{data.role}</p>
            <Text className="text-xs font-extralight">{data.title}</Text>
            <Text className="text-xs font-extralight">{data.date}</Text>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-4">
          {/* Description */}
          <Text className="text-white text-sm leading-relaxed">{data.description}</Text>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {data.technologies.map((tech, index) => (
              <TechnologyPill key={index} text={tech} />
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
