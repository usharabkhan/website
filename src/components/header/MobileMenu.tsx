import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose
} from "../ui/drawer";
import MenuItem from "./MenuItem";
import { OtherLogos } from "../../data/data";

export default function MobileMenu() {
  return (
    <div className="sm:hidden flex justify-between items-center p-4 text-white">
      {/* Logo */}
      <img 
        src={OtherLogos["compsci"]} 
        className="max-h-[30px] max-w-[30px]" 
        alt="Logo"
      />
      
      {/* Drawer Trigger */}
      <Drawer direction="right">
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
            <div className="hover:bg-slate-800 rounded-lg transition-colors duration-200">
              <DrawerClose asChild>
                <div>
                  <MenuItem title="About" to="/" />
                </div>
              </DrawerClose>
            </div>
            
            <div className="hover:bg-slate-800 rounded-lg transition-colors duration-200">
              <DrawerClose asChild>
                <div>
                  <MenuItem title="Projects" to="/" scrollTo="projects-section" />
                </div>
              </DrawerClose>
            </div>
            
            <div className="hover:bg-slate-800 rounded-lg transition-colors duration-200">
              <DrawerClose asChild>
                <div>
                  <MenuItem title="Contributions" to="/" scrollTo="contributions-section" />
                </div>
              </DrawerClose>
            </div>
            
            <div className="hover:bg-slate-800 rounded-lg transition-colors duration-200">
              <DrawerClose asChild>
                <div>
                  <MenuItem title="Toolkit" to="/" scrollTo="toolkit-section" />
                </div>
              </DrawerClose>
            </div>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
