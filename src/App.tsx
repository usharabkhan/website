import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-accent overflow-x-hidden">
      <Header />
      <div className="mt-16">
        <Routes>
          <Route path="/website/" element={<HomePage />} />
          <Route path="/website/projects" element={<ProjectsPage />} />
          <Route path="/website/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
