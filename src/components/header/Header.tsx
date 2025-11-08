import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";
import { OtherLogos } from "../../data/data";
import { Flex } from "@radix-ui/themes";
import { MenuLinks } from "./links";
import { Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 z-10 bg-black border-b-[1px] border-b-white/30">
      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-row justify-center">
        <Flex className="mr-6" align="center">
          {MenuLinks.slice(0, 2).map((link) => (
            <MenuItem key={link.title} title={link.title} scrollTo={link.scrollTo} />
          ))}
          <img src={OtherLogos["compsci"]} className="max-h-[30px] max-w-[30px]" />
          {MenuLinks.slice(2, 4).map((link) => (
            <MenuItem key={link.title} title={link.title} scrollTo={link.scrollTo} />
          ))}
        </Flex>
      </div>

      {/* Mobile Menu */}
      {/* <MobileMenu /> */}
      <div className="sm:hidden flex justify-center items-center p-4 text-white">
        <img src={OtherLogos["compsci"]} className="max-h-[30px] max-w-[30px]" alt="Logo" />
      </div>
    </header>
  );
}
