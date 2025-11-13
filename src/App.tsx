import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
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
    </div>
  );
}

export default App;
