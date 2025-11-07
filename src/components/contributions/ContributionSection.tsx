import ContributionCard from "./ContributionCard";
import { Flex } from "@radix-ui/themes";
import { contributions } from "../../data/contributions";
import { Heading } from "../common/heading";

function ContributionSection() {
  return (
    <section className="">
      <div id="contributions" className="flex flex-col max-w-7xl w-full mx-auto p-5 items-center">
        <Heading>Contributions</Heading>
        <hr className="border-t border-gray-700 w-full " />
        {/* Contribution Cards */}
        <Flex direction="column" align="center" justify="center" gap="4" className="h-full w-full p-4">
          {contributions.map((contribution, index) => (
            <ContributionCard key={index} data={contribution} />
          ))}
        </Flex>
      </div>
    </section>
  );
}

export default ContributionSection;
