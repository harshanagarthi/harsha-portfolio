import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TwoColumnLayout from "./components/TwoColumnLayout";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (

      <motion.div
        className="min-h-screen bg-white dark:bg-black flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center">
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/icons/HarshaLogo.png"
              alt="Harsha Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="flex gap-2 justify-center">
            <motion.div
              className="w-2 h-2 bg-gray-800 dark:bg-gray-200 rounded-full"
              animate={{ y: [-5, 0, -5] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0
              }}
            />
            <motion.div 
              className="w-2 h-2 bg-gray-800 dark:bg-gray-200 rounded-full"
              animate={{ y: [-5, 0, -5] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.2
              }}
            />
            <motion.div
              className="w-2 h-2 bg-gray-800 dark:bg-gray-200 rounded-full" 
              animate={{ y: [-5, 0, -5] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.4
              }}
            />
          </div>
        </div>
      </motion.div>

      // <motion.div
      //   className="min-h-screen bg-white dark:bg-black flex items-center justify-center perspective-1000"
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      // >
      //   <div className="text-center">
      //     <motion.div 
      //       className="relative w-32 h-32 mx-auto mb-8"
      //       animate={{ 
      //         rotateY: 360,
      //         rotateX: 360,
      //         scale: [1, 1.2, 1]
      //       }}
      //       transition={{
      //         duration: 3,
      //         repeat: Infinity,
      //         ease: "easeInOut"
      //       }}
      //     >
      //       <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-xl transform-style-3d" />
      //       <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-xl transform translate-z-12 opacity-75" />
      //     </motion.div>

      //     <motion.h1
      //       className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
      //       initial={{ opacity: 0, y: 20 }}
      //       animate={{ 
      //         opacity: 1, 
      //         y: 0,
      //         scale: [1, 1.1, 1],
      //       }}
      //       transition={{ 
      //         duration: 1.5,
      //         repeat: Infinity,
      //         repeatType: "reverse"
      //       }}
      //     >
      //       Harsha
      //     </motion.h1>

      //     <motion.div
      //       className="flex items-center justify-center gap-2"
      //       initial={{ opacity: 0 }}
      //       animate={{ opacity: 1 }}
      //       transition={{ duration: 0.6, delay: 0.3 }}
      //     >
      //       <motion.span
      //         className="inline-block w-2 h-2 bg-blue-500 rounded-full"
      //         animate={{ scale: [1, 1.5, 1] }}
      //         transition={{ duration: 1, repeat: Infinity, delay: 0 }}
      //       />
      //       <motion.span
      //         className="inline-block w-2 h-2 bg-purple-500 rounded-full"
      //         animate={{ scale: [1, 1.5, 1] }}
      //         transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      //       />
      //       <motion.span
      //         className="inline-block w-2 h-2 bg-pink-500 rounded-full"
      //         animate={{ scale: [1, 1.5, 1] }}
      //         transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      //       />
      //       <span className="text-lg text-gray-600 dark:text-gray-400 ml-2">
      //         Loading Portfolio...
      //       </span>
      //     </motion.div>
      //   </div>
      // </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen bg-white dark:bg-black text-black dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main className="pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Hero />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <About />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <TwoColumnLayout />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Experience />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Contact />
          </motion.div>
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
