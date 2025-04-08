import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";

const navStyle = "bg-cyan-700 text-white px-6 py-4 flex gap-6 shadow-md sticky top-0 z-50";
const linkStyle = "hover:text-yellow-300 transition-colors duration-300 font-semibold";

const Home = () => (
  <motion.div className="p-10 max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-5xl font-bold text-cyan-800 mb-4">Hey, I'm a DevOps Engineer 👨‍💻</h1>
    <p className="text-lg text-gray-700 mb-6">Crafting scalable, automated infrastructure and CI/CD pipelines.</p>
    <Link to="/projects" className="text-white bg-cyan-700 px-4 py-2 rounded shadow hover:bg-cyan-800">Explore Projects</Link>
  </motion.div>
);

const Projects = () => (
  <motion.div className="p-10 max-w-5xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold text-cyan-800 mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-cyan-700">Project {i}</h3>
          <p className="text-gray-600 mt-2">Short description of project {i} goes here. Tech stack, goals, outcome, etc.</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const About = () => (
  <motion.div className="p-10 max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold text-cyan-800 mb-4">About Me</h2>
    <p className="text-gray-700 leading-relaxed">
      I'm a DevOps engineer with a passion for building robust, automated, and scalable systems.
      I love working with cloud platforms, CI/CD pipelines, and infrastructure as code. Let's automate all the things!
    </p>
  </motion.div>
);

const Contact = () => (
  <motion.div className="p-10 max-w-xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold text-cyan-800 mb-4">Contact</h2>
    <p className="text-gray-700 mb-4">You can reach out to me via:</p>
    <ul className="list-disc pl-5 space-y-2 text-gray-600">
      <li>Email: <a className="text-cyan-700 hover:underline" href="mailto:you@example.com">you@example.com</a></li>
      <li>LinkedIn: <a className="text-cyan-700 hover:underline" href="https://linkedin.com" target="_blank">linkedin.com/in/yourname</a></li>
      <li>GitHub: <a className="text-cyan-700 hover:underline" href="https://github.com" target="_blank">github.com/yourusername</a></li>
    </ul>
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <nav className={navStyle}>
        <Link to="/" className={linkStyle}>Home</Link>
        <Link to="/projects" className={linkStyle}>Projects</Link>
        <Link to="/about" className={linkStyle}>About</Link>
        <Link to="/contact" className={linkStyle}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
