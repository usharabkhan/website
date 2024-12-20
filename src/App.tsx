import Footer from './components/Footer';
import Header from './components/header/Header';
import ProjectSection from './components/projects/ProjectSection';
import ToolkitSection from './components/toolkit/ToolkitSection';
import AboutSection from './components/about/AboutSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="flex-1">
        <AboutSection />
        <hr className="mx-5 opacity-70"></hr>
        <ProjectSection />
        <hr className="mx-5 opacity-70"></hr>
        <ToolkitSection />
      </div>
      <hr className="mx-5 opacity-70"></hr>
      <Footer />
    </div>
  );
}

export default App;
