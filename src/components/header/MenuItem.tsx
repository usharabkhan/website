import { Link, useLocation, useNavigate } from "react-router-dom";

interface MenuItemProps {
  title: string;
  scrollTo?: string;
  onPress?: () => void;
}

export default function MenuItem(props: MenuItemProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first, then scroll
    if (location.pathname !== "/" && location.pathname !== "") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        if (props.scrollTo) {
          const element = document.getElementById(props.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      if (props.scrollTo) {
        const element = document.getElementById(props.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
    
    // Always call onPress for any additional handling (like closing drawer)
    props.onPress?.();
  };

  return (
    <p
      className={`px-4 py-2 mx-1 cursor-pointer text-sm font-medium h-full flex items-center transition-all duration-300 ease-in-out text-regular hover:text-primary relative group`}
      onClick={handleClick}
    >
      {props.title}
      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
    </p>
  );
}
