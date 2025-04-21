// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

// Pages
import Home from "./Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import HomeLab from "./pages/Homelab";
import RetroMetro from "./pages/Retrometro";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/homelab" element={<HomeLab />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/retrometro" element={<RetroMetro />} />
      </Route>
    </Routes>
  );
}

export default App;
