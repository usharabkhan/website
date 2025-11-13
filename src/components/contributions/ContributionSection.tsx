import ContributionCard from "./ContributionCard";
import { Flex } from "@radix-ui/themes";
import { contributions } from "../../data/contributions";
import { Heading } from "../common/heading";
import { Award } from "lucide-react";

function ContributionSection() {
  return (
    <section id="contributions-section" className="py-10 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div id="contributions" className="flex flex-col max-w-7xl w-full mx-auto p-5 items-center relative z-10">
        <div className="relative">
          <Award className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 text-primary/30 hidden md:block" />
          <Heading>Contributions</Heading>
          <Award className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 text-secondary/30 hidden md:block" />
        </div>
        {/* Contribution Cards */}
        <Flex direction="column" align="center" justify="center" gap="6" className="h-full w-full p-4">
          {contributions.map((contribution, index) => (
            <ContributionCard key={index} data={contribution} />
          ))}
        </Flex>
      </div>
    </section>
  );
}

export default ContributionSection;
