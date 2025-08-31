import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, Eye } from 'lucide-react';
import certifications from "../data/certifications";

export default function Certifications() {
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
      case 'Technical':
        return <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full" />;
      case 'Professional':
        return <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full" />;
      case 'Academic':
        return <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full" />;
      default:
        return <div className="w-6 h-6 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Technical':
        return 'from-blue-500 to-indigo-600';
      case 'Professional':
        return 'from-green-500 to-emerald-600';
      case 'Academic':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            My Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and academic achievements that validate my expertise
          </p>
        </motion.div>

        {/* Fixed height container to prevent screen shaking */}
        <div className="max-w-6xl mx-auto h-[800px] overflow-y-auto pr-2 scrollbar-hide">
          <div className="space-y-6">
            {Object.entries(certifications).map(([category, certList], categoryIndex) => (
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
                        {certList.length} certification{certList.length !== 1 ? 's' : ''}
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
                      {certList.map((cert, certIndex) => (
                        <motion.div
                          key={certIndex}
                          className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: certIndex * 0.1 }}
                        >
                          <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-lg mb-4 flex items-center justify-center">
                            {cert.certificateImage ? (
                              <img
                                src={cert.certificateImage}
                                alt={cert.title}
                                className="w-full h-full object-cover rounded-lg"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            <div className="hidden text-gray-500 dark:text-gray-400 text-center p-4">
                              <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <p className="text-sm">Certificate Preview</p>
                            </div>
                          </div>
                          
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                            {cert.title}
                          </h4>
                          
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-200"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Certificate
                          </a>
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
