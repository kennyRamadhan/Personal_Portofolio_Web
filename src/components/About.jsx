import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="p-8 md:p-16 bg-gray-900 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    ><h2 className="text-3xl font-bold mb-6 text-primary">About</h2>

      {/* Card Konten */}
      <motion.div
        className="relative bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10 text-left leading-relaxed
                   transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Border gradient glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500
                     bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-[2px] pointer-events-none"
        ></div>

        <div className="relative z-10 space-y-6">
          <p className="text-lg text-gray-300">
            Hi, I’m <span className="text-primary font-semibold">Kenny Ramadhan</span>, a <span className="text-primary font-semibold">Software Quality Assurance Engineer</span> passionate about building reliable, high-quality software and helping teams deliver their best work.
          </p>

          <p className="text-lg text-gray-300">
            My journey into QA started unexpectedly during a <span className="text-primary font-semibold">Java Programming Bootcamp</span> at Whiteopen Teknologi. I was originally assigned as a Java Developer, but the team needed someone to handle testing, so I stepped in as a QA. That moment became the start of my QA career.
          </p>

          <p className="text-lg text-gray-300">
            Having a programming background gave me a huge advantage. It allows me to understand how things work behind the scenes from APIs to automation frameworks and design automation testing efficiently using tools like <span className="text-accent font-semibold">Selenium, Katalon,</span> and <span className="text-accent font-semibold">Cypress</span>.
          </p>

          <p className="text-lg text-gray-300">
            As a QA Lead Engineer, I guide and support other QAs to look beyond just bugs focusing on consistency, performance, and user experience. Great QA isn’t only about finding issues, but also understanding why they happen and preventing them.
          </p>

          <p className="text-lg text-gray-300">
            What sets me apart is that I care not only about business logic, but also about how an application is built its structure, flow, and behavior. I even create side projects, building APIs with <span className="text-accent font-semibold">Spring Boot (Java)</span> and <span className="text-accent font-semibold">Node.js</span>, to explore and understand application architecture.
          </p>

          <p className="text-lg text-gray-300">
            For me, QA isn’t just a job it’s a mindset. It’s about curiosity, collaboration, and turning complex systems into reliable, meaningful, and enjoyable experiences for users.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
