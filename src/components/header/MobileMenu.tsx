import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "../ui/drawer";
import MenuItem from "./MenuItem";
import { OtherLogos } from "../../data/data";
import { MenuLinks } from "./links";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <div className="sm:hidden flex justify-between items-center p-4 text-white">
      {/* Logo */}
      <img src={OtherLogos["compsci"]} className="max-h-[30px] max-w-[30px]" alt="Logo" />

      {/* Drawer Trigger */}
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <button
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-full w-[300px] bg-black border-white/30 ml-auto">
          <DrawerHeader className="justify-end">
            <DrawerClose asChild>
              <button
                className="text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </DrawerClose>
          </DrawerHeader>

          {/* Navigation Menu */}
          <nav className="pb-4 space-y-2">
            {MenuLinks.map((link) => (
              <div
                className="hover:bg-slate-800 rounded-lg transition-colors duration-200"
                key={link.title}
              >
                <MenuItem 
                  title={link.title}
                  scrollTo={link.scrollTo} 
                  onPress={handleMenuItemClick}
                />
              </div>
            ))}
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
