import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    document.body.style.overflow = isHome ? "hidden" : "auto";
  }, [isHome]);

  return (
    <div id="app" className={isHome ? "home-mode" : "scroll-mode"}>
      <div className="top-header">
        {!isHome && <Link className="home-link" to="/">Home</Link>}
      </div>
      <main className="content">
        <Outlet />
      </main>
      {!isHome && <footer className="footer">© 2025 TechnoWizzard</footer>}
    </div>
  );
}

export default Layout;
