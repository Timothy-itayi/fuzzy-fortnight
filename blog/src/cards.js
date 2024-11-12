'use client'
import { AnimatedProjects } from "./components/ui/animates-cards";

const ProjectsDisplay = () => {
  const projects = [
    {
      title: "Formula1Heritage",
      description: "A Formula 1 web application utilizing web APIs to produce live drivers and constructors standings.",
      technologies: ["JavaScript", "React", "API integration"],
      src: "/photo00.png",
    },
    {
      title: "Coffee Snob",
      description: "A coffee application written in Swift, helping users find the best coffee in their area.",
      technologies: ["Swift", "iOS Development", "Core Location"],
      src: "/photo01.png",
    },
    {
      title: "Project-Midnight",
      description: "A sleek, dark-themed blog web application with customizable components for enhanced readability.",
      technologies: ["Next.js", "Tailwind CSS", "Contentful"],
      src: "/photo02.png",
    },
    {
      title: "TechConnect",
      description: "A networking platform that connects tech enthusiasts and professionals for collaboration and mentorship.",
      technologies: ["Node.js", "Express", "MongoDB"],
      src: "/photo03.png",
    },
    {
      title: "GreenThumb",
      description: "An app for plant enthusiasts to manage their indoor gardens and receive care reminders.",
      technologies: ["React Native", "Redux", "Firebase"],
      src: "/photo04.png",
    },
  ];

  return <AnimatedProjects projects={projects} />;
};

export default ProjectsDisplay;
