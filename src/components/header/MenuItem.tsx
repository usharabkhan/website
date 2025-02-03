interface MenuItemProps {
    title: string,
    scrollTo: string,
    onPress?: () => void,
}
export default function MenuItem( props : MenuItemProps){
    return(
        <a className=" p-4 mx-2 cursor-pointer text-lg h-full w-full text-subHeading 
                        transition-all duration-300 ease-in-out
                        hover:text-heading " 
            href={"#" + props.scrollTo}>
            <p onClick={props.onPress}>             
                {props.title}
            </p>
        </a>
    )
}