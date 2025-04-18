import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import Homelab from "./Homelab";
import RetroMetro from "./Retrometro";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/homelab" element={<Homelab />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/retrometro" element={<RetroMetro />} />
      </Route>
    </Routes>
  );
}

export default App;
