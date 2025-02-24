import { ChevronUp } from "lucide-react";

export default function ChevronButton( { isOpen } : { isOpen: boolean }) {
    return (
        <div
            className={`w-6 h-6 text-subHeading transition-transform duration-300 ease-in-out transform  ${
                isOpen ? "rotate-180" : "rotate-90"
            }`}>
            <ChevronUp className="hover:bg-background rounded-full transition-all duration-300 ease-linear"/>
        </div>
    )
}