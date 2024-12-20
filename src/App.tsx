import Footer from './components/Footer';
import Header from './components/header/Header';
import ProjectSection from './components/projects/ProjectSection';
import ToolkitSection from './components/toolkit/ToolkitSection';
import AboutSection from './components/about/AboutSection';
import { Ref, useRef } from 'react';

function App() {
  const AboutView = useRef<HTMLDivElement>(null)
  const ProjectsView = useRef<HTMLDivElement>(null)
  const SkillsView = useRef<HTMLDivElement>(null)

  function scrollTo(ref: React.RefObject<HTMLDivElement>) {
    if (ref.current) {
      ref.current.scrollIntoView( {behavior: "smooth"})
    }
  }
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header  
        AboutView={() => scrollTo(AboutView)}
        ProjectsView={() => scrollTo(ProjectsView)}
        SkillsView={() => scrollTo(SkillsView)}
      />
      <hr></hr>
      <div className="flex-1 p-5">
        <AboutSection ref={AboutView}/>
        <hr className="mx-5 opacity-70"></hr>
        <ProjectSection ref={ProjectsView} />
        <hr className="mx-5 opacity-70"></hr>
        <ToolkitSection ref={SkillsView}/>
      </div>
      <hr className="mx-5 opacity-70"></hr>
      <Footer />
    </div>
  );
}

export default App;
