import { Flex, Text } from "@radix-ui/themes";
import { baseUrl, OtherLogos, ToolkitImages } from "../../data/data";
interface TechnologyBoxProps {
  text: string;
  experience: string;
}
export default function TechnologyBox({ text, experience }: TechnologyBoxProps) {
  var url = "";

  if (ToolkitImages[text]) {
    url = baseUrl + ToolkitImages[text];
  } else if (OtherLogos[text]) {
    url = OtherLogos[text];
  }
  return (
    <Flex align="center" gap="3" className="bg-gradient-to-br from-container to-accent rounded-xl p-4 border border-borderColor hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/10 group">
      {url && <img src={url} height={32} width={32} className="rounded-lg group-hover:scale-110 transition-transform duration-300"/>}
      <Flex direction="column">
        <Text size={"3"} className="text-text font-medium">{text}</Text>
      </Flex>
    </Flex>
  );
}
