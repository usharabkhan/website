interface MenuItemProps {
    title: string
}
export default function MenuItem( { title } : MenuItemProps){
    return(
        <p className="p-4 mx-2 cursor-pointer text-lg h-full text-textPrimary 
                    transition-all duration-300 ease-in-out
                     hover:text-background hover:bg-textPrimary hover:text-xl">
            {title}
        </p>
    )
}