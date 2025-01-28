import  ContributionCard from "./ContributionCard";
import { Flex } from "@radix-ui/themes";
import { contributions } from "../../constants/data";
import { Title } from "../common/title";

function ContributionSection() {
  return (
    <Flex 
      id="contributions" 
      direction="column" 
      justify="center" 
      className="gap-x-3 p-5 sm:p-10"
    >

      <Title>Contributions</Title>
      <div className="flex flex-col items-center gap-x-3 h-[80%] w-full">
        {/* Contribution Cards */}
        <Flex direction="column" align="center" gap="4" className="h-full w-full">
          {contributions.map((contribution, index) => (
            <ContributionCard key={index} data={contribution}/>
          ))}
           
        </Flex>
      </div>

    </Flex>
  );
}

export default ContributionSection;
