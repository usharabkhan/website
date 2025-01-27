import Footer from './components/Footer';
import Header from './components/header/Header';
import ProjectSection from './components/projects/ProjectSection';
import ToolkitSection from './components/toolkit/ToolkitSection';
import AboutSection from './components/about/AboutSection';
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
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden overflow-y-hidden">
      <Header className={`fixed top-0 left-0 w-full z-10 bg-background transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`} />
      
      <div className="flex h-screen">
        {/* Fixed AboutSection */}
        <Flex width="40%" align="center" justify="end" className="p-5">
          <AboutSection />
        </Flex>

        {/* Scrollable Content */}
        <div className="w-[60%] h-full overflow-y-auto bg-black">
          <div className="p-5">
            <hr className="mx-5 opacity-70" />
            <ProjectSection />
            <br />
            <hr className="mx-5 opacity-70" />
            <ContributionSection />
            <br />
            <hr className="mx-5 opacity-70" />
            <ToolkitSection />
            <hr className="mx-10 opacity-70 mt-5" />
          </div>
          
          <Footer />
        </div>
      </div>


    </div>
  );
}

export default App;
