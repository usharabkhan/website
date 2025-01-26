import  ContributionCard from "./ContributionCard";
import { Flex } from "@radix-ui/themes";
import { projects } from "../../constants/data";
import { useState } from "react";
import MyHeading from "../common/heading";

function ContributionSection() {
  const [activeContributionIndex, setActiveContributionIndex] = useState<number | null>(null);

  // Toggle the active contribution
  const handleToggle = (index: number) => {
    setActiveContributionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="contributions" className="flex flex-col items-center justify-center my-2 min-h-fit p-5 sm:p-10">
      <MyHeading type="h2" title="My Contributions" customStyle="text-textPrimary self-center mb-3" />
      <div className="flex flex-col items-center gap-x-3 h-[80%] w-full">
        {/* Contribution Cards */}
        <Flex direction="column" align="center" className="h-full w-full">
           <ContributionCard />
        </Flex>
      </div>
    </div>
  );
}

export default ContributionSection;
