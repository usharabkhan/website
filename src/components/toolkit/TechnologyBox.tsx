import { Flex, Text } from "@radix-ui/themes"
import { baseUrl, ToolkitImages } from "../../constants/data"
interface TechnologyBoxProps {
    text : string
}
export default function TechnologyBox ({text} : TechnologyBoxProps ){
    const url =  ToolkitImages[text] ? baseUrl + ToolkitImages[text] : "";
    return(
        <div className="flex items-center bg-container min-w-[120px] min-h-[120px] p-2 rounded
         border-l-textPrimary border-l-4 justify-center">
            <Flex gap="2" className="items-center flex-col ">    
                {url && <img src={url} height={70} width={70}/>}
                <Text size="3" className="text-white">{text}</Text>
            </Flex>
        </div>
    )
}