interface MenuItemProps {
    title: string,
    scrollTo: string,
    onPress?: () => void,
}
export default function MenuItem( props : MenuItemProps){
    return(
        <p className="p-4 mx-2 cursor-pointer text-lg h-full text-textPrimary 
                    transition-all duration-300 ease-in-out
                    hover:text-container hover:scale-x-105 " onClick={props.onPress}>             
            <a href={"#" + props.scrollTo}>
                    {props.title}
            </a>
        </p>
    )
}