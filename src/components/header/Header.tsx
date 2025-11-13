import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";
import { OtherLogos } from "../../data/data";
import { Flex } from "@radix-ui/themes";
import { MenuLinks } from "./links";
import { Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 bg-gradient-to-r from-accent/90 via-container/90 to-accent/90 backdrop-blur-md border-b border-borderColor shadow-lg">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-row justify-center h-full relative z-10">
        <Flex className="mr-6" align="center">
          {MenuLinks.slice(0, 2).map((link) => (
            <MenuItem key={link.title} title={link.title} scrollTo={link.scrollTo} />
          ))}
          <img src={OtherLogos["compsci"]} className="max-h-[32px] max-w-[32px] mx-4" />
          {MenuLinks.slice(2, 4).map((link) => (
            <MenuItem key={link.title} title={link.title} scrollTo={link.scrollTo} />
          ))}
        </Flex>
      </div>

      {/* Mobile Menu */}
      {/* <MobileMenu /> */}
      <div className="sm:hidden flex justify-center items-center p-4 text-text relative z-10">
        <img src={OtherLogos["compsci"]} className="max-h-[32px] max-w-[32px]" alt="Logo" />
      </div>
    </header>
  );
}
