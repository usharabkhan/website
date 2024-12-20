interface MenuItemProps {
    title: string,
    scrollTo: () => void,
}
export default function MenuItem( props : MenuItemProps){
    return(
        <p className="p-4 mx-2 cursor-pointer text-lg h-full text-textPrimary 
                    transition-all duration-300 ease-in-out
                     hover:text-container hover:text-xl " onClick={props.scrollTo}>
            {props.title}
        </p>
    )
}