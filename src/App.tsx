import React from 'react';
import Footer from './components/Footer';
import Header from './components/header/Header';
import ProjectSection from './components/projects/ProjectSection';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex  p-4 justify-center items-center flex-1 bg-white text-blue-500 text-3xl font-bold">
        
        Hi! I am Usharab, a fullstack developer
      </div>
      
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
