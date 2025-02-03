import { Text } from "@radix-ui/themes"

export function Title( {children} : {children? : React.ReactNode}){
    return(
        <Text
            size="7"
            className=" text-heading mb-6 text-center lg:text-left"
        >
        {children}
      </Text>
    )
}

export function SubTitle( {children} : {children? : React.ReactNode}){
    return(
        <Text
            size="5"
            className=" text-subHeading text-center lg:text-left"
        >
        {children}
      </Text>
    )
}