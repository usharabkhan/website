import { Flex, Text } from "@radix-ui/themes"
import { baseUrl, OtherLogos, ToolkitImages } from "../../constants/data"
interface TechnologyBoxProps {
    text : string
}
export default function TechnologyBox ({text} : TechnologyBoxProps ){
    var url = "" 
        
    if (ToolkitImages[text]) {
        url = baseUrl + ToolkitImages[text];
    } else if (OtherLogos[text]) {
        url = OtherLogos[text]; 
    }
    return(
        <Flex 
            align="center" 
            gap="2"
            className="bg-container border-l-textPrimary border-l-4 rounded p-2"
        >

            {url && <img src={url} height={40} width={40}/>}
            <Flex direction="column" className="text-textPrimary">    
                <Text size="2">{text}</Text>
                <Text size="2">2 years</Text>
            </Flex>
        </Flex>
    )
}