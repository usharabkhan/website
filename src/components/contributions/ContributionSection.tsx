import  ContributionCard from "./ContributionCard";
import { Flex } from "@radix-ui/themes";
import { contributions } from "../../constants/data";
import { Title } from "../common/title";

function ContributionSection() {
  return (
    <Flex 
      id="contributions" 
      direction="column" 
      align={{initial: "center", md: "start"}} 
      className="gap-x-3 p-5 sm:p-10 w-full "
    >

      <Title>Contributions</Title>
      {/* <div className="h-[80%] w-full "> */}
        {/* Contribution Cards */}
      <Flex direction="column" 
            align="center" justify="center" 
            gap="4" 
            className="h-full w-full"            
            maxWidth={{initial: "350px", md: "750px"}}
      >
        {contributions.map((contribution, index) => (
          <ContributionCard key={index} data={contribution}/>
        ))}
          
      </Flex>
      {/* </div> */}

    </Flex>
  );
}

export default ContributionSection;
