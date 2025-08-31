import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Users, 
  Code, 
  Award, 
  Star, 
  Zap, 
  Target, 
  Rocket,
  Calendar,
  MapPin
} from "lucide-react";
import experience from "../data/experience";
import ResumeModal from "../components/ResumeModal";

export default function Experience() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Function to get appropriate icon based on experience title
  const getExperienceIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('coordinator') || lowerTitle.includes('organize')) return <Users className="w-6 h-6" />;
    if (lowerTitle.includes('hackathon') || lowerTitle.includes('ml') || lowerTitle.includes('code')) return <Code className="w-6 h-6" />;
    if (lowerTitle.includes('winner') || lowerTitle.includes('place') || lowerTitle.includes('2nd')) return <Trophy className="w-6 h-6" />;
    if (lowerTitle.includes('achievement') || lowerTitle.includes('accomplish')) return <Award className="w-6 h-6" />;
    if (lowerTitle.includes('lead') || lowerTitle.includes('manage')) return <Target className="w-6 h-6" />;
    if (lowerTitle.includes('innovate') || lowerTitle.includes('create')) return <Rocket className="w-6 h-6" />;
    if (lowerTitle.includes('excellence') || lowerTitle.includes('outstanding')) return <Star className="w-6 h-6" />;
    return <Zap className="w-6 h-6" />; // Default icon
  };

  // Function to get category and color based on experience
  const getExperienceCategory = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('coordinator') || lowerTitle.includes('organize')) return { category: 'Leadership', color: 'from-emerald-500 to-teal-600' };
    if (lowerTitle.includes('hackathon') || lowerTitle.includes('ml') || lowerTitle.includes('code')) return { category: 'Technical', color: 'from-blue-500 to-indigo-600' };
    if (lowerTitle.includes('winner') || lowerTitle.includes('place') || lowerTitle.includes('2nd')) return { category: 'Achievement', color: 'from-yellow-500 to-orange-600' };
    if (lowerTitle.includes('achievement') || lowerTitle.includes('accomplish')) return { category: 'Recognition', color: 'from-purple-500 to-pink-600' };
    if (lowerTitle.includes('lead') || lowerTitle.includes('manage')) return { category: 'Management', color: 'from-red-500 to-pink-600' };
    if (lowerTitle.includes('innovate') || lowerTitle.includes('create')) return { category: 'Innovation', color: 'from-cyan-500 to-blue-600' };
    if (lowerTitle.includes('excellence') || lowerTitle.includes('outstanding')) return { category: 'Excellence', color: 'from-green-500 to-emerald-600' };
    return { category: 'Experience', color: 'from-gray-500 to-gray-600' };
  };

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <>
      <section id="experience" className="py-20 bg-black dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
              My Career Progression
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Key milestones and achievements that shaped my professional path
            </p>
          </motion.div>

          {/* Mobile/Tablet: Simple Card Grid */}
          <div className="lg:hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experience.map((exp, index) => {
                  const { category, color } = getExperienceCategory(exp.title);
                  
                  return (
                    <motion.div
                      key={index}
                      className="group relative"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Main Card */}
                      <motion.div
                        className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                        whileHover={{ 
                          y: -5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transform translate-x-12 -translate-y-12"></div>
                        </div>

                        {/* Category Badge */}
                        <div className="relative z-10 mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${color}`}>
                            {category}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="relative z-10 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {getExperienceIcon(exp.title)}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                            {exp.details}
                          </p>
                          
                          {/* Decorative Elements */}
                          <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{exp.date}</span>
                            </div>
                            {/* <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>University</span>
                            </div> */}
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop: Vertical Timeline with Curved Dispersions */}
          <div className="hidden lg:block">
            <div className="max-w-6xl mx-auto relative">
              {/* Central Timeline Line */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              />

              {/* Timeline Items */}
              <div className="relative">
                {experience.map((exp, index) => {
                  const { category, color } = getExperienceCategory(exp.title);
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={index}
                      className={`relative mb-16 flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                        <motion.div
                          className={`w-8 h-8 rounded-full bg-gradient-to-r ${color} shadow-lg shadow-blue-500/30 flex items-center justify-center text-white`}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          {getExperienceIcon(exp.title)}
                        </motion.div>
                        
                        {/* Curved Connection Line */}
                        <svg
                          className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} w-32 h-16`}
                          viewBox="0 0 128 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {isEven ? (
                            <path
                              d="M0 32 Q32 0 64 32 Q96 64 128 32"
                              stroke="url(#gradient)"
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="5,5"
                              className="animate-pulse"
                            />
                          ) : (
                            <path
                              d="M0 32 Q32 64 64 32 Q96 0 128 32"
                              stroke="url(#gradient)"
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="5,5"
                              className="animate-pulse"
                            />
                          )}
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="50%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      {/* Content Card */}
                      <motion.div
                        className={`w-5/12 ${isEven ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                        whileHover={{ 
                          scale: 1.02,
                          y: -5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden group">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-5">
                            <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transform ${isEven ? 'translate-x-12 -translate-y-12' : '-translate-x-12 -translate-y-12'}`}></div>
                          </div>

                          {/* Category Badge */}
                          <div className="relative z-10 mb-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${color}`}>
                              {category}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="relative z-10">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                              {exp.details}
                            </p>
                            
                            {/* Decorative Elements */}
                            <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{exp.date}</span>
                              </div>
                              {/* <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>University</span>
                              </div> */}
                            </div>
                          </div>

                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={openResumeModal}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold">View Full Resume</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <ResumeModal onClose={closeResumeModal} />
      )}
    </>
  );
}
