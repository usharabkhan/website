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
    <Flex align="center" gap="2" className="bg-black rounded-2xl p-3">
      {url && <img src={url} height={30} width={30} className="rounded-lg"/>}
      <Flex direction="column" className="text-regular">
        <Text size={"3"}className="text-white">{text}</Text>
      </Flex>
    </Flex>
  );
}
