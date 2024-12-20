import { Flex, Text } from "@radix-ui/themes"
import { baseUrl, TechnologyImages, ToolkitImages } from "../../constants/data"
interface TechnologyBoxProps {
    text : string
}
export default function TechnologyBox ({text} : TechnologyBoxProps ){
    const url =  baseUrl + ToolkitImages[text] || "" ;
    return(
        <div className="bg-textPrimary min-w-[120px] min-h-[120px] px-2 py-1 rounded border-l-primary border-l-4">
            <Flex gap="2" className="items-center flex-col">    
                {url && <img src={url} height={70} width={70}/>}
                <Text size="3" className="text-background">{text}</Text>
            </Flex>
        </div>
    )
}