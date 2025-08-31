import React, { useState } from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills';
import projectsData from '../data/projects';
import certificationsData from '../data/certifications';
import { AnimatePresence } from 'framer-motion';

const Sidebar = ({ onItemSelect, selectedCategory, selectedSubcategory }) => {
  const [expandedCategories, setExpandedCategories] = useState({
    'Technical Skills': true,
    'Soft Skills': false,
    'Projects': false,
    'Certifications': false
  });

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

  const handleItemClick = (type, category, subcategory) => {
    onItemSelect(type, category, subcategory);
  };

  const renderSkillsSection = () => (
    <>
      {Object.entries(skillsData).map(([category, subcategories]) => (
        <div key={category} className="mb-6">
          <motion.button
            onClick={() => toggleCategory(category)}
            className={`w-full text-left px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between group ${
              selectedCategory === category
                ? ' text-white shadow-lg shadow-blue-500/25'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-800'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium">{category}</span>
            <motion.svg
              className={`w-5 h-5 transition-transform duration-300 ${
                expandedCategories[category] ? 'rotate-0' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: expandedCategories[category] ? 180 : 0 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>
          
          <AnimatePresence>
            {expandedCategories[category] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="ml-4 mt-3 space-y-2 overflow-hidden"
              >
                {Object.keys(subcategories).map((subcategory, index) => (
                  <motion.button
                    key={subcategory}
                    onClick={() => handleItemClick('skills', category, subcategory)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                      selectedCategory === category && selectedSubcategory === subcategory
                        ? ' border-l-4 border-blue-500 shadow-md'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    whileHover={{ scale: 1.01, x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    {subcategory}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );

  const renderProjectsSection = () => (
    <div className="mb-6">
      <motion.button
        onClick={() => toggleCategory('Projects')}
        className={`w-full text-left px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between group ${
          selectedCategory === 'Projects'
            ? 'text-white shadow-lg shadow-green-500/25'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-800'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-medium">Projects</span>
        <motion.svg
          className={`w-5 h-5 transition-transform duration-300 ${
            expandedCategories['Projects'] ? 'rotate-0' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: expandedCategories['Projects'] ? 180 : 0 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>
      
      <AnimatePresence>
        {expandedCategories['Projects'] && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="ml-4 mt-3 space-y-2 overflow-hidden"
          >
            {Object.keys(projectsData).map((projectType, index) => (
              <motion.button
                key={projectType}
                onClick={() => handleItemClick('projects', 'Projects', projectType)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                  selectedCategory === 'Projects' && selectedSubcategory === projectType
                    ? ' border-l-4 border-green-500 shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                }`}
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                {projectType}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderCertificationsSection = () => (
    <div className="mb-6">
      <motion.button
        onClick={() => toggleCategory('Certifications')}
        className={`w-full text-left px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between group ${
          selectedCategory === 'Certifications'
            ? 'text-white shadow-lg shadow-purple-500/25'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-800'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-medium">Certifications</span>
        <motion.svg
          className={`w-5 h-5 transition-transform duration-300 ${
            expandedCategories['Certifications'] ? 'rotate-0' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: expandedCategories['Certifications'] ? 180 : 0 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>
      
      <AnimatePresence>
        {expandedCategories['Certifications'] && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="ml-4 mt-3 space-y-2 overflow-hidden"
          >
            {Object.keys(certificationsData).map((certType, index) => (
              <motion.button
                key={certType}
                onClick={() => handleItemClick('certifications', 'Certifications', certType)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                  selectedCategory === 'Certifications' && selectedSubcategory === certType
                    ? 'border-l-4 border-purple-500 shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                }`}
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                {certType}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.div 
      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sticky top-8 border border-gray-200/50 dark:border-gray-700/50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 font-encode-sans-sc">
          Categories
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto"></div>
      </div>
      
      <div className="space-y-2">
        {renderSkillsSection()}
        {renderProjectsSection()}
        {renderCertificationsSection()}
      </div>
    </motion.div>
  );
};

export default Sidebar;
