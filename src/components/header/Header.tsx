import { useState } from 'react';
import MenuItem from './MenuItem';
import { IoCloseOutline } from "react-icons/io5";

export default function Header({ className }: { className: string }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className={className}>
      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-row justify-center">
        <div className="flex flex-row mr-6">
          <MenuItem title="About" scrollTo="home" />
          <MenuItem title="Projects" scrollTo="projects" />
          <MenuItem title="Skills" scrollTo="skills" />
          <MenuItem title="Contributions" scrollTo='contributions' />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex justify-between items-center p-4">
        <h1 className="text-xl text-textPrimary">Portfolio.</h1>
        <button
          onClick={toggleDrawer}
          className="text-xl focus:outline-none text-white"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full bg-background border-b shadow-lg z-50 transform ${
          isDrawerOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleDrawer}
          className="text-xl focus:outline-none text-white mx-4 pt-4"
          aria-label="Close Menu"
        >
          <IoCloseOutline />
        </button>

        <nav className="flex flex-col items-start ">
          <MenuItem title="About" scrollTo="home" onPress={toggleDrawer}/>
          <MenuItem title="Projects" scrollTo="projects" onPress={toggleDrawer}/>
          <MenuItem title="Skills" scrollTo="skills" onPress={toggleDrawer}/>
          <MenuItem title="Contributions" scrollTo='contributions' onPress={toggleDrawer}/>
        </nav>
      </div>

        {/* Backdrop for Drawer */}
        {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
      
      <hr></hr>
    </header>
  );
}

