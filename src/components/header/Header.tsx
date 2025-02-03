import { useState } from 'react';
import MenuItem from './MenuItem';
import { IoCloseOutline } from "react-icons/io5";
import { OtherLogos } from '../../constants/data';
import { Flex } from '@radix-ui/themes';

export default function Header({ className }: { className: string }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className={className}>
      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-row justify-center">
          <Flex className="mr-6" align="center">
            <MenuItem title="About" scrollTo="about" />
            <MenuItem title="Projects" scrollTo="projects" />
            <img src={OtherLogos['compsci']}  className="max-h-[30px] max-w-[30px]"/>
            <MenuItem title="Contributions" scrollTo='contributions' />
            <MenuItem title="Skills" scrollTo="skills" />
          </Flex>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex justify-between items-center p-4 text-heading">
        <h1 className="text-xl">Portfolio.</h1>
        <button
          onClick={toggleDrawer}
          className="text-xl focus:outline-none "
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
          className="text-xl focus:outline-none text-heading mx-4 pt-4"
          aria-label="Close Menu"
        >
          <IoCloseOutline />
        </button>

        <nav className="flex flex-col items-start ">
          <MenuItem title="About" scrollTo="about" onPress={toggleDrawer}/>
          <MenuItem title="Projects" scrollTo="projects" onPress={toggleDrawer}/>
          <MenuItem title="Contributions" scrollTo='contributions' onPress={toggleDrawer}/>
          <MenuItem title="Skills" scrollTo="skills" onPress={toggleDrawer}/>
        </nav>
      </div>

        {/* Backdrop for Drawer */}
        {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </header>
  );
}

