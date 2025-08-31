import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, ExternalLink, Github, Database } from 'lucide-react';
import projects from "../data/projects";

export default function Projects() {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => {
      // Close all other categories first
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      
      // Then open only the clicked category
      newState[category] = !prev[category];
      return newState;
    });
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of technical projects, from web development to machine learning solutions
          </p>
        </motion.div>

        {/* Fixed height container to prevent screen shaking */}
        <div className="max-w-6xl mx-auto h-[800px] overflow-y-auto pr-2 scrollbar-hide">
          <div className="space-y-6">
            {Object.entries(projects).map(([category, projectList], categoryIndex) => (
              <motion.div
                key={category}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => toggleCategory(category)}
                  className="w-full text-left p-6 rounded-t-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-between group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {category}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {projectList.length} project{projectList.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategories[category] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedCategories[category] ? (
                      <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                    )}
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedCategories[category] ? "auto" : 0,
                    opacity: expandedCategories[category] ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projectList.map((project, projectIndex) => (
                        <motion.div
                          key={projectIndex}
                          className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                              {project.title}
                            </h4>
                            <div className="flex gap-2">
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                {project.teamSize}
                              </span>
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                {project.duration}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="space-y-3 mb-4">
                            <div>
                              <h5 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-1">Problem</h5>
                              <p className="text-xs text-gray-600 dark:text-gray-400">{project.problem}</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-1">Key Considerations</h5>
                              <p className="text-xs text-gray-600 dark:text-gray-400">{project.keyConsiderations}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200"
                              >
                                <Github className="w-3 h-3 mr-1" />
                                GitHub
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Live Demo
                              </a>
                            )}
                            {project.kaggle && (
                              <a
                                href={project.kaggle}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                              >
                                <Database className="w-3 h-3 mr-1" />
                                Kaggle
                              </a>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
