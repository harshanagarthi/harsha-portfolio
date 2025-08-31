import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Zap, 
  Star, 
  Trophy,
  Gamepad2,
  Sparkles,
  Eye,
  EyeOff,
  Grid3X3
} from "lucide-react";

const enc = encodeURIComponent;

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Footer() {
  const [gameActive, setGameActive] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [snake, setSnake] = useState([[0, 0]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState([1, 0]);
  const [gameOver, setGameOver] = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);
  const [hiddenMessage, setHiddenMessage] = useState(false);
  const [typingChallenge, setTypingChallenge] = useState("");
  const [challengeWord] = useState("PORTFOLIO");
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  
  // Contact form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  // Sudoku game states
  const [selectedGame, setSelectedGame] = useState('snake'); // 'snake' or 'sudoku'
  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [sudokuSolution, setSudokuSolution] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [sudokuCompleted, setSudokuCompleted] = useState(false);
  const [sudokuTimer, setSudokuTimer] = useState(0);

  // Generate a simple Sudoku puzzle
  const generateSudoku = () => {
    // Simple 4x4 Sudoku puzzle for footer
    const puzzle = [
      [1, 0, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 3, 0],
      [0, 0, 0, 4]
    ];
    
    const solution = [
      [1, 3, 4, 2],
      [4, 2, 1, 3],
      [2, 4, 3, 1],
      [3, 1, 2, 4]
    ];
    
    setSudokuBoard(puzzle.map(row => [...row]));
    setSudokuSolution(solution);
    setSudokuCompleted(false);
    setSudokuTimer(0);
  };

  // Initialize Sudoku on component mount
  useEffect(() => {
    generateSudoku();
  }, []);

  // Sudoku timer
  useEffect(() => {
    if (selectedGame === 'sudoku' && !sudokuCompleted) {
      const timer = setInterval(() => {
        setSudokuTimer(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [selectedGame, sudokuCompleted]);

  // Handle Sudoku cell click
  const handleCellClick = (row, col) => {
    if (sudokuBoard[row][col] === 0) { // Only allow editing empty cells
      setSelectedCell([row, col]);
    }
  };

  // Handle number input for Sudoku
  const handleNumberInput = (number) => {
    if (selectedCell) {
      const [row, col] = selectedCell;
      const newBoard = sudokuBoard.map(rowArr => [...rowArr]);
      newBoard[row][col] = number;
      setSudokuBoard(newBoard);
      
      // Check if puzzle is completed
      if (JSON.stringify(newBoard) === JSON.stringify(sudokuSolution)) {
        setSudokuCompleted(true);
      }
    }
  };

  // Check if Sudoku is valid
  const isSudokuValid = () => {
    // Check rows
    for (let row = 0; row < 4; row++) {
      const rowNums = sudokuBoard[row].filter(num => num !== 0);
      if (new Set(rowNums).size !== rowNums.length) return false;
    }
    
    // Check columns
    for (let col = 0; col < 4; col++) {
      const colNums = sudokuBoard.map(row => row[col]).filter(num => num !== 0);
      if (new Set(colNums).size !== colNums.length) return false;
    }
    
    // Check 2x2 boxes
    for (let boxRow = 0; boxRow < 2; boxRow++) {
      for (let boxCol = 0; boxCol < 2; boxCol++) {
        const boxNums = [];
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            const num = sudokuBoard[boxRow * 2 + i][boxCol * 2 + j];
            if (num !== 0) boxNums.push(num);
          }
        }
        if (new Set(boxNums).size !== boxNums.length) return false;
      }
    }
    
    return true;
  };

  // Snake game logic
  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = [...newSnake[0]];
      head[0] += direction[0];
      head[1] += direction[1];

      // Wrap around boundaries
      if (head[0] >= 20) head[0] = 0;
      if (head[0] < 0) head[0] = 19;
      if (head[1] >= 10) head[1] = 0;
      if (head[1] < 0) head[1] = 9;

      // Check collision with self
      if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
        setGameOver(true);
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check if food eaten
      if (head[0] === food[0] && head[1] === food[1]) {
        setGameScore(prev => prev + 10);
        setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 10)]);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver]);

  // Game controls
  useEffect(() => {
    if (!gameActive || selectedGame !== 'snake') return;

    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection([0, -1]);
          break;
        case 'ArrowDown':
          setDirection([0, 1]);
          break;
        case 'ArrowLeft':
          setDirection([-1, 0]);
          break;
        case 'ArrowRight':
          setDirection([1, 0]);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [gameActive, selectedGame]);

  // Game loop
  useEffect(() => {
    if (!gameActive || gameOver || selectedGame !== 'snake') return;

    const gameInterval = setInterval(moveSnake, 200);
    return () => clearInterval(gameInterval);
  }, [gameActive, gameOver, moveSnake, selectedGame]);

  // Start new game
  const startGame = () => {
    if (selectedGame === 'snake') {
      setSnake([[0, 0]]);
      setFood([5, 5]);
      setDirection([1, 0]);
      setGameScore(0);
      setGameOver(false);
      setGameActive(true);
    } else if (selectedGame === 'sudoku') {
      generateSudoku();
    }
  };

  // Reset game
  const resetGame = () => {
    if (selectedGame === 'snake') {
      setGameActive(false);
      setSnake([[0, 0]]);
      setFood([5, 5]);
      setDirection([1, 0]);
      setGameScore(0);
      setGameOver(false);
    } else if (selectedGame === 'sudoku') {
      generateSudoku();
    }
  };

  // Typing challenge
  const handleTypingChallenge = (e) => {
    const value = e.target.value.toUpperCase();
    setTypingChallenge(value);
    
    if (value === challengeWord) {
      setChallengeCompleted(true);
      setTimeout(() => {
        setChallengeCompleted(false);
        setTypingChallenge("");
      }, 2000);
    }
  };

  // Easter egg
  const triggerEasterEgg = () => {
    setEasterEgg(true);
    setTimeout(() => setEasterEgg(false), 3000);
  };

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Contact form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Trim inputs and validate
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim()
    };
    
    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    
    if (!isValidEmail(trimmedData.email)) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Try to open Gmail compose in new tab first
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mruharsha@gmail.com&su=${enc(`Portfolio Contact from ${trimmedData.name}`)}&body=${enc(`Name: ${trimmedData.name}\nEmail: ${trimmedData.email}\n\nMessage:\n${trimmedData.message}`)}`;
      
      const gmailWindow = window.open(gmailUrl, '_blank');
      
      // If popup was blocked or failed, fall back to mailto
      if (!gmailWindow || gmailWindow.closed || typeof gmailWindow.closed === 'undefined') {
        const mailtoLink = `mailto:nhrmywork@gmail.com?subject=${enc(`Portfolio Contact from ${trimmedData.name}`)}&body=${enc(`Name: ${trimmedData.name}\r\nEmail: ${trimmedData.email}\r\n\r\nMessage:\r\n${trimmedData.message}`)}`;
        window.location.href = mailtoLink;
      }
      
      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Section - Social Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              Connect With Me
            </h3>
            
            <div className="space-y-2">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/nhrmywork', color: 'from-gray-600 to-gray-800' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nagarthiharshavardhan/', color: 'from-blue-600 to-blue-800' },
                { icon: Mail, label: 'Email', href: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvvsMQlvjXXgjCwhFnQHBcrxWBWRHwWRqNrztHHLDhJrZPSFvTXzwdBXZXtnZbvxZnmSB', color: 'from-red-600 to-red-800' },
                // { icon: FileText, label: 'Resume', href: '#', color: 'from-green-600 to-green-800' }
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/10"
                  whileHover={{ x: 5, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-5 h-5" />
                  </div>
                  <span className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
                    {link.label}
                  </span>
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Center Section - 3D Contact Form */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6 text-green-400" />
              Get In Touch
            </h3>
            
            {/* 3D Contact Form */}
            <form onSubmit={handleFormSubmit} className="relative bg-black/30 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-6 overflow-hidden">
              {/* 3D Form Container with Depth */}
              <div className="relative z-10 space-y-6">
                {/* Name Field */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-white/80 text-sm font-medium mb-2 ml-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-white/80 text-sm font-medium mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-white/80 text-sm font-medium mb-2 ml-1">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-green-400/60 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm resize-none"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg relative overflow-hidden group transition-all duration-300 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:from-purple-700 hover:to-blue-700'
                    }`}
                    whileHover={!isSubmitting ? { 
                      scale: 1.02,
                      y: -2,
                    } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </span>
                    
                    {/* Button Glow Effect */}
                    {!isSubmitting && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                    
                    {/* Ripple Effect */}
                    {!isSubmitting && (
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-2xl"
                        initial={{ scale: 0, opacity: 0 }}
                        whileTap={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                </motion.div>

                {/* Success/Error Messages */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      className={`text-center p-3 rounded-2xl border ${
                        submitStatus === 'success'
                          ? 'bg-green-500/20 border-green-400/50 text-green-300'
                          : 'bg-red-500/20 border-red-400/50 text-red-300'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {submitStatus === 'success' ? (
                          <>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              ✓
                            </motion.div>
                            Message sent! I'll get back to you soon.
                          </>
                        ) : (
                          <>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              ⚠
                            </motion.div>
                            Please fill in all fields correctly.
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3D Depth Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl blur-sm" />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full opacity-60"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-green-400 rounded-full opacity-60"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </form>

            {/* Form Info */}
            <div className="text-center text-white/60 text-sm">
              <p>Ready to start a project together?</p>
              <p className="text-xs text-white/40 mt-1">I'll get back to you within 24 hours</p>
            </div>
          </motion.div>

          {/* Right Section - Typing Challenge & Easter Egg */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            
            
            {/* 3D Floating Cube */}
            <div className="relative h-80 bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-4 overflow-hidden">
              {/* 3D Cube Container */}
              <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                <motion.div
                  className="relative w-32 h-32"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                    rotateZ: [0, 180],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* Front Face */}
                  <motion.div
                    className="absolute w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white/20 rounded-lg shadow-2xl"
                    style={{
                      transform: 'translateZ(16px)',
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
                    <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full" />
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full" />
                  </motion.div>
                  
                  {/* Back Face */}
                  <motion.div
                    className="absolute w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 border-2 border-white/20 rounded-lg shadow-2xl"
                    style={{
                      transform: 'translateZ(-16px) rotateY(180deg)',
                      boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/40 rounded-full" />
                  </motion.div>
                  
                  {/* Right Face */}
                  <motion.div
                    className="absolute w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 border-2 border-white/20 rounded-lg shadow-2xl"
                    style={{
                      transform: 'translateX(16px) rotateY(90deg)',
                      boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white/30 rounded-full" />
                  </motion.div>
                  
                  {/* Left Face */}
                  <motion.div
                    className="absolute w-32 h-32 bg-gradient-to-br from-yellow-500 to-orange-600 border-2 border-white/20 rounded-lg shadow-2xl"
                    style={{
                      transform: 'translateX(-16px) rotateY(-90deg)',
                      boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
                    <div className="absolute top-3 left-3 w-2 h-2 bg-white/40 rounded-full" />
                    <div className="absolute bottom-3 right-3 w-3 h-3 bg-white/30 rounded-full" />
                  </motion.div>
                  
                  {/* Top Face */}
                  <motion.div
                    className="absolute w-32 h-32 bg-gradient-to-br from-red-500 to-pink-600 border-2 border-white/20 rounded-lg shadow-2xl"
                    style={{
                      transform: 'translateY(-16px) rotateX(90deg)',
                      boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full" />
                  </motion.div>
                  
                  {/* Bottom Face */}
                  <motion.div
                    className="absolute w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white/20 rounded-lg shadow-2xl"
                    style={{
                      transform: 'translateY(16px) rotateX(-90deg)',
                      boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
                    <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/30 rounded-full" />
                  </motion.div>
                </motion.div>
                
                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute top-8 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
              
              {/* Interactive Controls */}
              
              
              {/* Ambient Light Effect */}
              {/* <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent pointer-events-none" /> */}
            </div>
            
            {/* 3D Info */}
            
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-white/60 text-sm">
            Made with <span className="text-red-400">❤</span> and lots of <span className="text-purple-400">☕</span>
          </div>
          <div className="text-white/40 text-xs mt-2">
            © 2024 Harshavardhan Reddy Nagarthi. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
  