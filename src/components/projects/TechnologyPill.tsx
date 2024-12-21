import { Flex, Text } from "@radix-ui/themes"
import { baseUrl, ToolkitImages } from "../../constants/data"
interface TechnologyPillProps {
    text : string
}
export default function TechnologyPill ({text} : TechnologyPillProps ){
    const url = ToolkitImages[text] ? baseUrl + ToolkitImages[text] : "";
    return(
        <div className="bg-subContainer w-fit h-fit px-2 py-1 rounded-xl shadow-md">
            <Flex gap="2" className="items-center">    
                {url && <img src={url} height={20} width={20}/>}
                <Text size="2" className="text-background">{text}</Text>
            </Flex>
        </div>
    )
}