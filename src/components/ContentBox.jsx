import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContentBox = ({ selectedItem }) => {
  if (!selectedItem) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 min-h-[400px] max-h-[600px] overflow-y-auto flex items-center justify-center">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-lg">Select an item from the sidebar to view content</p>
        </div>
      </div>
    );
  }

  const renderSkillsContent = () => (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        {selectedItem.subcategory}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedItem.data.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-black dark:bg-black border border-white dark:border-white rounded-xl p-4 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
              {skill.name}
            </h4>
            <p className="text-sm text-white dark:text-white leading-relaxed">
              {skill.message}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderProjectsContent = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        {selectedItem.subcategory}
      </h3>
      <div className="space-y-6">
        {selectedItem.data.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-200 font-encode-sans-sc">
                {project.title}
              </h4>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                {project.teamSize}
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {project.duration}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Problem</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.problem}</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Considerations</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.keyConsiderations}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.kaggle && (
                <a
                  href={project.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Kaggle
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCertificationsContent = () => (
    <div className="space-y-6 ">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        {selectedItem.subcategory} Certifications
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedItem.data.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-200 h-90"
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
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
            
            <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3 font-bodoni-moda">
              {cert.title}
            </h4>
            
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white outline outline-2 outline-green-600 rounded-lg hover:bg-black transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (selectedItem.type) {
      case 'skills':
        return renderSkillsContent();
      case 'projects':
        return renderProjectsContent();
      case 'certifications':
        return renderCertificationsContent();
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 min-h-[400px] max-h-[600px] overflow-y-auto transition-all duration-300 scrollbar-hide mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedItem?.type}-${selectedItem?.category}-${selectedItem?.subcategory}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ContentBox;
