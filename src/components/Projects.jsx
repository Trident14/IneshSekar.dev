import React from 'react';
import lanternquestImage from '../assets/lanternquest.png'; // Import the image

const ProjectCard = ({ title, description, techStack, previewImage }) => {
  return (
    <div className="project-card group">
      <div className="relative bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2">
        
        <div className="mockup-window bg-neutral-100 rounded-lg p-4 mb-4">
          <div className="mockup-window-inner">
            <img src={previewImage} alt="Project Preview" className="object-contain h-40 w-full rounded-md" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Lantern Quest',
      description: 'An immersive 2D game where players navigate through darkness using lanterns.',
      techStack: ['Godot', 'C#', 'PixelArt', 'OOPS','Game Mechanics'],
      previewImage: lanternquestImage, // Pass the imported image here
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
