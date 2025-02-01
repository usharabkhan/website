import Footer from './components/Footer';
import Header from './components/header/Header';
import ProjectSection from './components/projects/ProjectSection';
import ToolkitSection from './components/toolkit/ToolkitSection';
import AboutSection from './components/about/AboutCard';
import { useEffect, useState } from 'react';
import { Flex, ScrollArea } from '@radix-ui/themes';
import ContributionSection from './components/contributions/ContributionSection';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden ">
      <Header className={`fixed top-0 left-0 w-full z-10 bg-background`} />
      
      <div className="flex flex-col lg:flex-row h-screen items-center">
        
        {/* Fixed AboutSection */}
        <Flex width={{md: "40%"}} align="center" justify="end" className="p-10 lg:p-5 mt-5">
          <AboutSection />
        </Flex>

        {/* Scrollable Content */}
        <div 
          className="lg:w-[60%] min-h-full lg:h-full 
                      lg:overflow-y-auto 
                    bg-background lg:border-l-2">
          <div className="p-5">
            <hr className="mx-5 opacity-70" />
            <ProjectSection />
            <hr className="mx-5 opacity-70" />
            <ContributionSection />
            <hr className="mx-5 opacity-70" />
            <ToolkitSection />
            {/* <hr className="mx-10 opacity-70 mt-5" /> */}
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
