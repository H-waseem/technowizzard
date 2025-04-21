# TechnoWizzard Portfolio Project: Build Summary & Lessons Learned

## Overview

This document outlines the full journey of building the **TechnoWizzard Portfolio Website**, including problems encountered, solutions applied, and lessons learned along the way.

---

## Phase 1: Project Setup

- **Objective:** Create a modern portfolio with React, showcasing skills and projects.
- **Tech Chosen:**
  - React + Vite
  - Vanta.js (cloud background)
  - React Router DOM for SPA routing

### Issues

- Vanta.js was applied globally, affecting all pages.
- Used `#` anchors instead of SPA routing.

### Fixes

- Integrated React Router properly.
- Moved Vanta.js logic to Home page only.

---

## Phase 2: Navigation System

- **Objective:** Add multiple pages (Home, Blog, Contact, Projects).

### Issues

- Navigation broke due to mixing `<a href>` and `<Link to>`.
- Navigation bar appeared on all pages, even the Home landing page (undesirable).

### Fixes

- Replaced all `<a>` with `<Link>` from React Router DOM.
- Used `useLocation` to hide navigation on the Home page.

---

## Phase 3: Vanta.js Isolation

- **Objective:** Keep animated clouds strictly on the Home page.

### Issues

- Clouds rendered on every page.
- Memory leak due to Vanta not being destroyed.

### Fixes

- Moved Vanta logic inside `Home.jsx`.
- Used `useRef` and `useEffect` to ensure `.destroy()` is called on unmount.

---

## Phase 4: Page Structure and Styling

- **Objective:** Enhance layout and visual aesthetics.

### Issues

- Home content was vertically centered but looked too low.
- Styling was duplicated across files.

### Fixes

- Tweaked margins to push content slightly above center.
- Consolidated all CSS into `App.css` and removed redundant rules.

---

## Phase 5: Subpages and Projects

- **Objective:** Showcase various projects, including Homelab and RetroMetro.

### Issues

- Links in Projects page pointed to live URLs, breaking in dev mode.
- Import paths became confusing due to flat folder structure.

### Fixes

- Refactored file structure under `src/pages`.
- Updated routing in `App.jsx` and links in `Projects.jsx` to use `<Link>` when possible.

---

## Final Structure

```
src/
├── pages/
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Homelab.jsx
│   ├── Projects.jsx
│   └── Retrometro.jsx
├── components/
│   └── Layout.jsx
├── App.jsx
├── Home.jsx
├── App.css
├── index.css
├── main.jsx
```

---

## Lessons Learned

- Keep effects like Vanta.js isolated.
- Use React Router properly for SPA experience.
- Use `useLocation` for layout conditionality.
- Clean and modular folder structure helps scalability.
- Always destroy canvas/webGL-based animations on unmount to prevent leaks.

---

## Status

✅ Site is live at [https://technowizzard.com](https://technowizzard.com) ✅ Fully working routing, page styling, Vanta.js cloud background ✅ Project sections now point to internal pages for local and deployed compatibility

