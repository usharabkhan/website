interface MenuItemProps {
    title: string,
    scrollTo: string,
    onPress?: () => void,
}
export default function MenuItem(props: MenuItemProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent instant jump
        const element = document.getElementById(props.scrollTo);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        props.onPress?.(); // Call optional onPress callback
    };

    return (
        <a 
            className="p-4 mx-2 cursor-pointer text-lg h-full w-full text-subHeading 
                        transition-all duration-300 ease-in-out hover:opacity-50"
            href={"#" + props.scrollTo}
            onClick={handleClick}
        >
            {props.title}
        </a>
    );
}
