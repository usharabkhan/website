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
    <Flex align="center" gap="2" className="bg-accent rounded-xl p-2">
      {url && <img src={url} height={40} width={40} className="rounded-lg"/>}
      <Flex direction="column" className="text-regular">
        <p className="text-white">{text}</p>
        {/* <Text weight="light" size="2">{experience}</Text> */}
      </Flex>
    </Flex>
  );
}
