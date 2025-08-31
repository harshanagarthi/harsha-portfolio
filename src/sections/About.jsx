import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          className="text-4xl font-bold mb-8 text-center text-black dark:text-white font-encode-sans-sc"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Curious to know about ME ?
        </motion.h3>
        
        <motion.div 
          ref={ref}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Background decoration */}
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.p 
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 relative z-10"
            variants={itemVariants}
          >
            I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Harshavardhan Reddy Nagarthi (Harsh_halcyon)</span>, a passionate developer having substantial knowledge in 
            Python, Machine Learning, and Web Development. I love opening up different boxes of technology and solve real-world 
            problems and create impactful solutions through technology.
          </motion.p>
          
          {/* Animated stats */}
          <motion.div 
            className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
            variants={itemVariants}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">7+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
  