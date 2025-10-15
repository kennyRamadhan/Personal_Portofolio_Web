import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(console.error);
  }, []);

  return (
    <motion.section
      id="skills"
      className="p-8 md:p-16 bg-gray-900 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-primary">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg shadow-lg bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform"
          >
            <h3 className="font-semibold text-accent">{skill.name}</h3>
            <p className="text-gray-400">{skill.level}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
