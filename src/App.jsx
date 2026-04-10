import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portofolio"
import Contact from "./components/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import Stats from "./components/Stats";
import CaseStudy from "./components/CaseStudy";
import Blog from "./components/Blog";
export default function App() {
  // Ubah default darkMode menjadi true
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 bg-bgDark dark:bg-bgDark">
      <Header />
      <Hero />
      <About/>
      <Stats />
      <Skills />
      <CaseStudy />
      <Portfolio />
      <Project />
      <Blog />
      <Contact />
    </div>
  );
}