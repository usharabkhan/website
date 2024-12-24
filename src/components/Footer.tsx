import MyHeading from "./common/heading";
import { FaHandPointUp } from "react-icons/fa";
import Socials from "./common/socials";

export default function Footer(): JSX.Element{
    return(
        <div className="flex flex-col items-center justify-center p-5 text-white w-full h-fit" >
            <MyHeading type="h2" title="Hire Me!" />
            <Socials />
            <FaHandPointUp size="50" className="text-yellow-400"/>
        </div>
    )
}