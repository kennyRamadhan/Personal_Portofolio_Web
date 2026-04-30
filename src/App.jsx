import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portofolio"
import Contact from "./components/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import Stats from "./components/Stats";
import CaseStudy from "./components/CaseStudy";
// TODO: Re-enable when at least 1 blog post is published. See AGENT.md.
// import Blog from "./components/Blog";
export default function App() {
  // Ubah default darkMode menjadi true
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

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
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}