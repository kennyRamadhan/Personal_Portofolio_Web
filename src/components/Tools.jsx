import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("/data/tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data))
      .catch(console.error);
  }, []);

  return (
    <motion.section
      id="portfolio"
      className="p-8 md:p-16 bg-gray-900 text-gray-300 animate-fadeInUp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >


      {/* Certification */}
      <h2 className="text-3xl font-bold mb-6 text-primary">Frameworks Or Tools</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg shadow-lg bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform"
          >
               <h3 className="font-semibold text-accent">{tool.name}</h3>
               <p className="text-gray-400 mb-2">{tool.level}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
