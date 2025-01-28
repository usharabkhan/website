import { Text } from "@radix-ui/themes"

export function Title( {children} : {children? : React.ReactNode}){
    return(
        <Text
            size="7"
            weight="bold"
            className="text-white mb-6 text-center lg:text-left"
        >
        {children}
      </Text>
    )
}

export function SubTitle( {children} : {children? : React.ReactNode}){
    return(
        <Text
            size="5"
            className="text-white text-center lg:text-left"
        >
        {children}
      </Text>
    )
}