import { Flex, Text } from "@radix-ui/themes";
import { Contribution } from "../../data/type";
import { Card } from "../ui/card";
import TechnologyPill from "../projects/TechnologyPill";
import Title from "../common/title";
import { Link } from "react-router-dom";

export default function ContributionCard({ data }: { data: Contribution }) {
  return (
    <Link to={data.link} className="group">
      <Card className="w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-container via-accent to-container border border-borderColor hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-1 relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-5 relative z-10">
          <img src={data.logo} alt={data.title} className="h-12 w-12 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
          <div className="flex flex-col text-text">
            <Text weight="medium" size={"4"} className="text-primary font-semibold">{data.role}</Text>
            <Text className="text-xs text-regular font-light">{data.title}</Text>
            <Text className="text-xs text-regular/70 font-light">{data.date}</Text>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-4 relative z-10">
          {/* Description */}
          <Text className="text-regular text-sm leading-relaxed">{data.description}</Text>

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
