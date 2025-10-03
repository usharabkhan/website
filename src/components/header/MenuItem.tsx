import { Link, useLocation } from 'react-router-dom';

interface MenuItemProps {
    title: string,
    to: string,
    scrollTo?: string,
    onPress?: () => void,
}

export default function MenuItem(props: MenuItemProps) {
    const location = useLocation();
    const isActive = location.pathname === props.to;

    const handleClick = (e: React.MouseEvent) => {
        // If we're on the home page and there's a scrollTo prop, scroll instead of navigate
        if (location.pathname === '/' && props.scrollTo && props.to === '/') {
            e.preventDefault();
            const element = document.getElementById(props.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
        props.onPress?.(); // Call optional onPress callback
    };

    return (
        <Link 
            to={props.to}
            className={`p-4 mx-2 cursor-pointer text-lg h-full w-full transition-all duration-300 ease-in-out hover:opacity-50 ${
                isActive ? 'text-heading' : 'text-subHeading'
            }`}
            onClick={handleClick}
        >
            {props.title}
        </Link>
    );
}
