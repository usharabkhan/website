import { Flex, Badge } from "@radix-ui/themes";
import MyHeading from "../common/heading";
export default function ProjecTitle( { data } : any) {
    return(
        <Flex direction="column" align="center" className="border-2">
            {/* TITLE */}
            <MyHeading type="h3" title={data.title} customStyle="text-white text-center" />
            
            <Flex gap="2" align="center">
                {/* PROGRESS */}
                <Badge color={`${data.progress[0] == 'I' ? 'yellow' : 'jade'}`} variant="solid">
                    {data.progress}
                </Badge>
                {/* LOGO */}
                {data.logo && <Badge variant="solid" color="sky">
                    <img src={data.logo} className="max-w-6 max-h-6" />
                    {data.logoName}
                </Badge>}
            </Flex>

        </Flex>
    )
}