import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";
import { OtherLogos } from "../../data/data";
import { Flex } from "@radix-ui/themes";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 z-10 bg-black border-b-[1px] border-b-white/30">
      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-row justify-center">
        <Flex className="mr-6" align="center">
          <MenuItem title="About" to="/" scrollTo="about-section"/>
          <MenuItem title="Projects" to="/" scrollTo="projects-section" />
          <img src={OtherLogos["compsci"]} className="max-h-[30px] max-w-[30px]" />
          <MenuItem title="Contributions" to="/" scrollTo="contributions-section" />
          <MenuItem title="Toolkit" to="/" scrollTo="toolkit-section" />
        </Flex>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
}
