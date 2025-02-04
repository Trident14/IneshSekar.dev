import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useXP } from '../XPContext';  // Import the XP context hook

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [xpWidth, setXpWidth] = useState(0);
  const { earnXP } = useXP();  // Access the earnXP function

  const codeExamples = [
    { code: 'print("Hello World")', language: 'Python' },
    { code: 'console.log("Hello World");', language: 'JavaScript' },
    { code: 'System.out.println("Hello World");', language: 'Java' },
    { code: 'fmt.Println("Hello World")', language: 'Go' },
    { code: 'echo "Hello World";', language: 'PHP' },
  ];

  const greetingWords = ['Hello', 'Hola', 'Bonjour', 'こんにちは', '안녕하세요'];

  useEffect(() => {
    const codeInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % codeExamples.length);
    }, 3000);

    setTimeout(() => {
      setXpWidth(60); // Set XP width after a delay
    }, 500);

    return () => clearInterval(codeInterval);
  }, []);

  // Function to scroll to the projects section smoothly
  const scrollToProjects = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle "View Projects" button click and award XP
  const handleViewProjectsClick = () => {
    earnXP(100);  // Award 100 XP when the button is clicked
    scrollToProjects();  // Scroll to the projects section
  };

  return (
    <section
      id="hero"
      className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-neutral-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="xp-bar bg-neutral-200 w-48 h-2 rounded-full overflow-hidden">
                <div
                  className="xp-progress bg-blue-500 h-full"
                  style={{ width: `${xpWidth}%` }}
                ></div>
              </div>
              <div className="text-xs text-neutral-500">Level 1 Developer</div>
            </div>
          </div>

          <motion.div
            className="flex items-center justify-center flex-col space-x-0 space-y-2 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl font-bold tracking-tight text-neutral-900 animate__animated animate__fadeIn"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Typewriter
                words={greetingWords}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.h1>

            <motion.h2
              className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              I am <span className="highlight text-blue-600">Inesh Sekar</span>
            </motion.h2>
          </motion.div>

          <div className="mt-8 h-20">
            <div
              id="code-examples"
              className="text-lg sm:text-xl md:text-2xl font-mono text-neutral-700"
            >
            <div className="code-line animate__animated animate__fadeIn">
              {codeExamples[currentIndex].code}
              <span className="text-xs sm:text-sm text-blue-500 ml-2">
                //{codeExamples[currentIndex].language}
        </span>
    </div>
  </div>
</div>

          <div className="mt-8">
            <button
              onClick={handleViewProjectsClick}  // Call the handle function on click
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 animate__animated animate__pulse animate__infinite"
            >
              View Projects
              <div className="inline-block ml-2 text-xs bg-yellow-400 text-blue-900 px-2 py-1 rounded-full">
                +100 XP
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
