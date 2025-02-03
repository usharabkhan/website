import Header from './components/header/Header';
import ProjectSection from './components/projects/ProjectSection';
import ToolkitSection from './components/toolkit/ToolkitSection';
import AboutCard from './components/about/AboutCard';
import { Flex } from '@radix-ui/themes';
import ContributionSection from './components/contributions/ContributionSection';
import AboutSection from './components/about/AboutSection';

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden ">
      <Header className={`fixed top-0 left-0 w-full z-10 
          bg-background border-b-2 border-b-regular border-opacity-30 
            transition-opacity duration-300`} />

      
      <div className="flex flex-col h-auto lg:flex-row lg:h-screen items-center">
        
        {/* Fixed AboutCard */}
        <Flex width={{md: "40%"}} align="center" justify="end" className="p-10 lg:p-5 mt-5">
          <AboutCard />
        </Flex>

        {/* Scrollable Content */}
        <div 
          className="bg-background min-h-full p-5 
                      lg:w-[60%] lg:h-full lg:overflow-y-auto 
                      lg:border-l-2 border-regular border-opacity-30">
            <hr className="mx-5 opacity-70 lg:mt-5" />
            <AboutSection />
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
  );
}

export default App;
