import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, Code, Users, Lightbulb } from 'lucide-react';
import skills from "../data/skills";

export default function Skills() {
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

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Technical Skills':
        return <Code className="w-6 h-6" />;
      case 'Soft Skills':
        return <Users className="w-6 h-6" />;
      default:
        return <Lightbulb className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Technical Skills':
        return 'from-blue-500 to-indigo-600';
      case 'Soft Skills':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-purple-500 to-pink-600';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional competencies
          </p>
        </motion.div>

        {/* Fixed height container to prevent screen shaking */}
        <div className="max-w-6xl mx-auto h-[800px] overflow-y-auto pr-2 scrollbar-hide">
          <div className="space-y-6">
            {Object.entries(skills).map(([category, subcategories], categoryIndex) => (
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
                  className={`w-full text-left p-6 rounded-t-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-between group`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(category)} rounded-xl flex items-center justify-center text-white`}>
                      {getCategoryIcon(category)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {category}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {Object.keys(subcategories).length} subcategor{Object.keys(subcategories).length !== 1 ? 'ies' : 'y'}
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
                      {Object.entries(subcategories).map(([subcategory, skillList], subcategoryIndex) => (
                        <motion.div
                          key={subcategory}
                          className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: subcategoryIndex * 0.1 }}
                        >
                          <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                            {subcategory}
                          </h4>
                          
                          <div className="flex flex-wrap gap-2">
                            {skillList.map((skill, skillIndex) => (
                              <motion.div
                                key={skillIndex}
                                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-lg hover:shadow-md transition-all duration-200 group cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                title={skill.name}
                              >
                                {(() => {
                                  const IconComponent = skill.icon;
                                  return <IconComponent className={`w-4 h-4 ${skill.color}`} />;
                                })()}
                                <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                                  {skill.name}
                                </span>
                              </motion.div>
                            ))}
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
