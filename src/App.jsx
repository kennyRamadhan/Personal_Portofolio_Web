import React, { useEffect, useState, useCallback } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portofolio"
import Contact from "./components/Contact";
import Header from "./components/Header";
import Stats from "./components/Stats";
import CaseStudy from "./components/CaseStudy";
// TODO: Re-enable when at least 1 blog post is published. See AGENT.md.
// import Blog from "./components/Blog";
// Project component intentionally not rendered (see Project.jsx header comment).

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About />
      <Stats />
      <CaseStudy />
      <Portfolio />
      <Skills />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}
