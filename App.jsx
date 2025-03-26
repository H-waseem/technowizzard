import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div className="p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
    <p className="text-lg mt-2">I'm a DevOps Engineer passionate about automation and infrastructure.</p>
    <Link to="/projects">View Projects</Link>
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <nav className="p-5 bg-gray-900 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
