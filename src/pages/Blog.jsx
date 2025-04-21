import React from "react";
import PageWrapper from "../components/PageWrapper";

const Blog = () => {
  return (
    <PageWrapper>
      <h1>🚀 From Vite to Victory: Building the TechnoWizzard Portfolio</h1>
      <p>
        What started as a simple landing page built with Vite and React quickly grew
        into a fully-fledged developer portfolio featuring animated clouds, dynamic
        routing, and modular page organization. This post recaps the journey —
        including problems we hit and how we solved them.
      </p>

      <h2>🔁 Switching from Single to Multipage</h2>
      <p>
        Originally, the site used hardcoded anchor tags like <code>&lt;a href="#contact"&gt;</code>, which caused full page reloads and broke the single-page experience. Moving to <strong>React Router</strong> required a complete refactor:
      </p>
      <ul>
        <li>Converted all nav links to <code>&lt;Link /&gt;</code> from React Router</li>
        <li>Wrapped all dynamic content in a shared <code>&lt;Layout /&gt;</code> with <code>&lt;Outlet /&gt;</code></li>
      </ul>

      <h2>☁️ The Cloudy Problem</h2>
      <p>
        The animated cloud background using <code>vanta.js</code> looked great — but showed on every page! This created distractions and performance hits outside the landing screen.
      </p>
      <p>Solution: moved Vanta initialization into the <code>Home</code> component only.</p>

      <h2>🛠️ Tailwind Troubles</h2>
      <p>
        Tailwind sounded like a fast solution, but caused layout inconsistencies with Vanta.js, and dynamic classes didn’t purge correctly in Vite’s build. We switched to scoped CSS files like <code>App.css</code> and <code>Contact.css</code> for greater control.
      </p>

      <h2>🧭 Routing Gotchas</h2>
      <ul>
        <li><code>/HomeLab</code> didn’t load on production due to casing mismatch vs <code>/homelab</code></li>
        <li>Links using <code>href</code> broke local and prod — fixed using <code>&lt;Link to="/..." /&gt;</code></li>
      </ul>

      <h2>✅ Final Result</h2>
      <p>
        The end result: a modular, maintainable, and fully routed React site with a beautiful landing experience. All major issues were resolved through clear separation of concerns and thoughtful layout fixes.
      </p>
    </PageWrapper>
  );
};

export default Blog;
