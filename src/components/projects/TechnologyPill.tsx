import { Flex, Text } from "@radix-ui/themes";
import { baseUrl, OtherLogos, ToolkitImages } from "../../data/data";
interface TechnologyPillProps {
  text: string;
  img?: string;
}
export default function TechnologyPill({ text, img }: TechnologyPillProps) {
  var url = "";

  if (ToolkitImages[text]) {
    url = baseUrl + ToolkitImages[text];
  } else if (OtherLogos[text]) {
    url = OtherLogos[text];
  }

  return (
    <div className="bg-accent w-fit h-fit px-3 py-1.5 rounded-full border-white/30 border">
      <Flex gap="2" className="items-center">
        {url && <img src={url} height={15} width={15} />}
        {img && <img src={img} className="h-4 w-4" />}
        <Text weight="light" size="1" className="text-white">
          {text}
        </Text>
      </Flex>
    </div>
  );
}
