import { motion } from "framer-motion";
import ResumeModal from "../components/ResumeModal";
import { useState } from "react";
// import {Button} from '@/components/ui/button';
// import SceneSelector from '../components/SceneSelector';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* 3D Background Scene */}
      {/* <SceneSelector /> */}

      {/* Background floating elements (now layered with 3D) */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-16 h-16 bg-green-500/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl md:text-7xl font-extrabold text-black dark:text-white mb-6 drop-shadow-lg font-encode-sans-sc"
          variants={itemVariants}
        >
          <div>
            <span className="font-train-one text-fuchsia-700">Hi</span>,
          </div>
          {/* <div></div> */}
          <div>
            <span className="text-4xl font-bold">I'm </span> <span className="text-3xl font-bold text-fuchsia-700">...</span>
            <span className="font-trade-winds text-stone-200"> Harsha</span> 👋
          </div>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl drop-shadow-lg"
          variants={itemVariants}
        >
          Python Developer | Machine Learning Enthusiast | Web Developer
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => setIsOpen(true)}
            className="mt-6 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold shadow-lg relative overflow-hidden group backdrop-blur-sm bg-black/80 dark:bg-white/80"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Resume</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {isOpen && <ResumeModal onClose={() => setIsOpen(false)} />}

          {/* <motion.a 
            href="/resume.pdf" 
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold shadow-lg relative overflow-hidden group backdrop-blur-sm bg-black/80 dark:bg-white/80"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Resume</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a> */}

          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-semibold relative overflow-hidden group backdrop-blur-sm bg-white/80 dark:bg-black/80"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get In Touch</span>
            <motion.div
              className="absolute inset-0 bg-black dark:bg-white"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "left" }}
            />
            <motion.span
              className="absolute inset-0 flex items-center justify-center text-white dark:text-black"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Get In Touch
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center backdrop-blur-sm bg-white/20 dark:bg-black/20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
