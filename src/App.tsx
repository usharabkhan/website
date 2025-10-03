import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden ">
      <Header
        className="fixed top-0 left-0 w-full h-16 z-10
               bg-background border-b-2 border-b-regular border-opacity-30"
      />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
