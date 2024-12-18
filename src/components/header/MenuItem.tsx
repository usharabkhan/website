interface MenuItemProps {
    title: string
}
export default function MenuItem( { title } : MenuItemProps): JSX.Element{
    return(
        <p className="p-2 mx-2 cursor-pointer text-lg font-default h-full transition-bg duration-300 ease-in-out
                    hover:bg-white
                    text-white  hover:text-blue-700">
            {title}
        </p>
    )
}