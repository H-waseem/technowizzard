import { Link, Outlet, useLocation } from "react-router-dom";
import "./App.css";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div id="app">
      {!isHome && (
        <>
          <header className="top-header">
            <Link to="/" className="home-link">Home</Link>
          </header>

          <nav className="button-row">
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </>
      )}

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">© 2025 TechnoWizzard</footer>
    </div>
  );
}

export default Layout;
