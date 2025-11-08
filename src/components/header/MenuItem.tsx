import { Link, useLocation } from "react-router-dom";

interface MenuItemProps {
  title: string;
  scrollTo?: string;
  onPress?: () => void;
}

export default function MenuItem(props: MenuItemProps) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    // If we're on the home page and there's a scrollTo prop, scroll instead of navigate
    if (location.pathname === "/" && props.scrollTo) {
      e.preventDefault();
      const element = document.getElementById(props.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Always call onPress for any additional handling (like closing drawer)
    props.onPress?.();
  };

  return (
    <p
      className={`p-4 mx-2 cursor-pointer text-lg h-full w-full transition-all duration-300 ease-in-out hover:opacity-50 text-white`}
      onClick={handleClick}
    >
      {props.title}
    </p>
  );
}
