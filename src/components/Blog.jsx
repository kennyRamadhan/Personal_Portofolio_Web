import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/blog.json")
      .then((r) => r.json())
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  const isId = i18n.language === "id";

  return (
    <motion.section
      id="insights"
      className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-primary">
        {t("blog.heading")}
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {posts.map((post, idx) => {
          const comingSoon = !post.url || post.url === "#";
          return (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-purple-500/50 transition-colors flex flex-col h-full"
              variants={cardVariants}
            >
              <h3 className="text-lg font-semibold text-white">
                {isId ? post.titleId : post.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed line-clamp-3">
                {isId ? post.summaryId : post.summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-500/20 text-purple-300 rounded-full px-2 py-0.5 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.date}</span>
                {comingSoon ? (
                  <span className="bg-amber-500/20 text-amber-300 text-xs rounded-full px-2 py-0.5">
                    Coming Soon
                  </span>
                ) : (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 transition-colors"
                  >
                    Read More
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      </div>
    </motion.section>
  );
}
