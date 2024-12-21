import React from 'react';
import { Flex, Text } from '@radix-ui/themes';
interface HeadingProps {
    type: 'h1' | 'h2' | 'h3';
    children?: React.ReactNode;
    customStyle?: string;
    title: string;
}

const Heading: React.FC<HeadingProps> = ({type, customStyle, title, children}) => {
    let size = "";
    switch (type) {
        case 'h1':
            size = "text-4xl sm:text-6xl";
            break;
        case 'h2':
            size = "text-3xl sm:text-4xl";
            break;
        default:
            size = "text-2xl sm:text-3xl";
            break;
    }
    return (
        
        <Flex gap="4" align="center" className={size}>     
            <Text className={customStyle ? customStyle : ""}>
                {title}
            </Text>
            {children? children : null}
        </Flex>
    );
};

export default Heading;