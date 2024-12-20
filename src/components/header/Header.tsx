import { useState } from 'react';
import MenuItem from './MenuItem';

interface MenuProps{
  AboutView: () => void,
  ProjectsView: () => void,
  SkillsView: () => void,
}
export default function Header(props : MenuProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="">
      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-row justify-center">
        <div className="flex flex-row mr-6">
          <MenuItem title="About" scrollTo={props.AboutView}/>
          <MenuItem title="Projects" scrollTo={props.ProjectsView}/>
          <MenuItem title="Skills" scrollTo={props.SkillsView}/>
          {/* <MenuItem title="Contact" /> */}
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
        className={`fixed top-0 left-0 h-full bg-background border-r shadow-lg z-50 transform ${
            isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-64`}
        >
        <button
            onClick={toggleDrawer}
            className="text-xl p-4 focus:outline-none text-white"
            aria-label="Close Menu"
        >
            ✕
        </button>
        <nav className="flex flex-col items-start p-4">
            
          <MenuItem title="About" scrollTo={props.AboutView}/>
          <MenuItem title="Projects" scrollTo={props.ProjectsView}/>
          <MenuItem title="Skills" scrollTo={props.SkillsView}/>
          {/* <MenuItem title="Contact" /> */}
        </nav>
        </div>

        {/* Backdrop for Drawer */}
        {isDrawerOpen && (
        <div
            className="fixed inset-0 bg-container opacity-50 z-40"
            onClick={toggleDrawer}
        ></div>
        )}

    </header>
  );
}

