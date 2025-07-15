import { Flex, Text } from "@radix-ui/themes"
import { baseUrl, OtherLogos, ToolkitImages } from "../../constants/data"
interface TechnologyBoxProps {
    text : string
    experience: string
}
export default function TechnologyBox ({text, experience} : TechnologyBoxProps ){
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
            className="bg-container border-borderColor border-l-2 p-2"
        >

            {url && <img src={url} height={40} width={40}/>}
            <Flex direction="column" className="text-regular">    
                <Text weight="light" size="2">{text}</Text>
                {/* <Text weight="light" size="2">{experience}</Text> */}
            </Flex>
        </Flex>
    )
}