import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMain from "./components/navbar/NavbarMain";
import Home_Page from "./Home_Page";
import Project_Page from "./page/project/Project_Page";
import CertificatePage from "./page/certificate/CertificatePage";

function App() {
  return (
    <Router>
      <main className="font-body">
        <NavbarMain />
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/projects" element={<Project_Page />} />
          <Route path="/certificates" element={<CertificatePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
