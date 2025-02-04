import React, { useState, useEffect } from 'react';
import lanternquestImage from '../assets/lanternquest.png'; 
import LQ1 from '../assets/LQ1.png';
import LQ2 from '../assets/LQ2.png';  
import isPay1 from '../assets/isPay1.png'
import isPay2 from '../assets/isPay2.png'
import isPay from '../assets/isPayPrimary.png'
import { FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useXP } from '../XPContext';

const ProjectCard = ({ title, cardDescription, popupDescription, techStack, previewImages, deploymentLink, youtubeLink, badgeName, xp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { earnXP } = useXP();

  // Function to handle opening the popup and earning XP
  const openPopup = () => {
    setIsOpen(true);
    earnXP(xp); // Earn XP when the popup opens
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      // You can do additional things when popup opens, like logging or tracking
    }
  }, [isOpen]);

  return (
    <>
      <div 
        className="relative project-card group cursor-pointer h-[500px] flex flex-col justify-between bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2"
        onClick={openPopup}
      >
        {/* Badge and XP Display */}
        {badgeName && xp && (
          <div className="absolute -top-3 -right-3 flex gap-2">
            <span className="badge bg-yellow-400 text-yellow-900">{badgeName}</span>
            <span className="badge bg-purple-400 text-purple-900">+{xp} XP</span>
          </div>
        )}

        <div className="mockup-window bg-neutral-100 rounded-lg p-4 mb-4">
          <img 
            src={previewImages[0]} 
            alt="Project Preview" 
            className="h-40 w-full rounded-md"
          />
        </div>

        <h3 className="text-xl font-bold text-neutral-900 text-center mb-2">{title}</h3>
        <p className="text-neutral-600 text-center mb-4">{cardDescription.slice(0, 90)}...</p>

        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded-md text-sm">{tech}</span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto justify-center">
          {deploymentLink && (
            <a href={deploymentLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-700">
              <FaExternalLinkAlt /> <span>Live Demo</span>
            </a>
          )}
          {youtubeLink && (
            <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red-500 hover:text-red-700">
              <FaYoutube /> <span>YouTube</span>
            </a>
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl shadow-xl relative">
            <button className="absolute top-3 right-3 text-gray-600" onClick={closePopup}>
              ✖
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>

            <Carousel showThumbs={false} infiniteLoop autoPlay>
              {previewImages.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Project ${index}`} className=" h-40 rounded-md" />
                </div>
              ))}
            </Carousel>

            <p className="text-neutral-700 my-4 whitespace-pre-line">{popupDescription}</p>

            <h4 className="font-semibold mt-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 my-2">
              {techStack.map((tech, index) => (
                <span key={index} className="bg-gray-200 px-3 py-1 rounded-md text-sm">{tech}</span>
              ))}
            </div>

            <div className="flex gap-4 mt-6 justify-center">
              {deploymentLink && (
                <a href={deploymentLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-700">
                  <FaExternalLinkAlt /> <span>Live Demo</span>
                </a>
              )}
              {youtubeLink && (
                <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red-500 hover:text-red-700">
                  <FaYoutube /> <span>YouTube</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Lantern Quest',
      cardDescription: 'A 2D game where players navigate through darkness using lanterns to overcome challenges.',
      popupDescription: `
        -> An immersive 2D game with creative mechanics and beautiful pixel art.\n
        -> Players navigate through darkness using lanterns to explore and defeat enemies.\n
        -> Developed using Godot and C# with a focus on OOPS and game mechanics.
      `,
      techStack: ['Godot', 'C#', 'PixelArt', 'OOPS', 'Game Mechanics'],
      previewImages: [
        lanternquestImage,
        LQ1, 
        LQ2,
      ],
      deploymentLink: 'https://velociraptor10.itch.io/lantern-quest',
      youtubeLink: 'https://www.youtube.com/watch?v=WJ5RDBA62-o',
      badgeName: 'Best Performance',
      xp: 200,
    },
    {
      title: 'isPay App',
      cardDescription: 'A secure banking app with saving goals and seamless transactions.',
      popupDescription: `
        -> Built a banking app with saving goals and seamless transactions, boosting user engagement.\n
        -> Ensured robust security with JWT authentication and bcrypt hashing.\n
        -> Achieved high reliability through a monolithic architecture.\n
        -> Enhanced UX with intelligent fund management, deducting from saving goals when needed.
      `,
      techStack: ['MongoDB', 'Express', 'Node', 'React', 'Cloud Hosting'],
      previewImages: [
        isPay,
        isPay1,
        isPay2,
       
      ],
      deploymentLink: 'https://ispayapp.onrender.com/',
      badgeName: 'Top Choice',
      xp: 150,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 animate__animated animate__fadeIn">
            Featured Projects
            <span className="inline-block ml-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">Level 2 Unlocked</span>
          </h2>
        </div>

        <div className="flex justify-center gap-16 flex-wrap">
          {projects.map((project, index) => (
            <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 " key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
