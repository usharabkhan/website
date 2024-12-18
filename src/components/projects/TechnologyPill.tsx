import { Flex, Text } from "@radix-ui/themes"
import { TechnologyImages } from "../../constants/data"
import { Technology } from "../../constants/type"
import React, { useEffect, useState } from "react";
interface TechnologyPillProps {
    text : string
}
export default function TechnologyPill ({text} : TechnologyPillProps ){
    const url =  TechnologyImages[text] || "";
    return(
        <div className="bg-gray-300 w-fit h-fit px-2 rounded-xl">
            <Flex gap="2" className="items-center">    
                {url && <img src={url} height={20} width={20}/>}
                <Text size="2" className="text-black">{text}</Text>
            </Flex>
        </div>
    )
}