import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/projects.json")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then(data => setProjects(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <motion.section
      id="projects"
      className="p-8 md:p-16 bg-gray-900 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-primary">Portofolio</h2>

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg shadow-lg bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform"
            >
              <h3 className="font-semibold text-accent mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-2">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
