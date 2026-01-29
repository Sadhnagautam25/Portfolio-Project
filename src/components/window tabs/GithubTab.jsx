import React from "react";
import MacWindow from "../../window/MacWindow";
import { motion } from "framer-motion"; // Must be here

import pixelForgeImg from "../../assets/project images/pixelFoge.png";
import figmaImg from "../../assets/project images/figma.png";
import searchImg from "../../assets/project images/media.png";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const projects = [
  {
    name: "PixelForge",
    description:
      "A visually engaging frontend portfolio built with React, Tailwind CSS, and GSAP animations.",
    link: "https://pixelforge-portfolio.vercel.app/",
    image: pixelForgeImg,
  },
  {
    name: "Figma Clone",
    description:
      "A Figma-like design tool clone showcasing real-time collaboration and interactive UI.",
    link: "https://figma-clone-delta-lemon.vercel.app/",
    image: figmaImg,
  },
  {
    name: "Search Project",
    description:
      "A search-focused project built with React demonstrating dynamic search functionality.",
    link: "https://search-project-sable.vercel.app/",
    image: searchImg,
  },
];
motion;

const skillIcons = [
  { name: "React", icon: <SiReact size={18} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={18} /> },
  { name: "JavaScript", icon: <SiJavascript size={18} /> },
  { name: "GSAP" },
  { name: "HTML", icon: <SiHtml5 size={18} /> },
  { name: "CSS", icon: <SiCss3 size={18} /> },
];

const GithubTab = () => { 
  return (
    <MacWindow windowId="github">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-6 flex flex-col gap-12 max-w-4xl mx-auto "
      >
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-start gap-8 rounded-2xl p-6 shadow-lg">
          <img
            src="https://avatars.githubusercontent.com/u/208770246?v=4"
            alt="Sadhna Gautam"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Hi, I’m Sadhna Gautam
            </h1>
            <p className="text-gray-50 text-sm md:text-base">
              Frontend Developer passionate about building interactive web
              experiences. Explore my projects and see my growth through code.
            </p>
            <a
              href="https://github.com/Sadhnagautam25"
              target="_blank"
              className="mt-3 inline-block px-5 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Visit GitHub
            </a>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded shadow-lg overflow-hidden w-full max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-35 object-cover object-top"
                />

                {/* Content */}
                <div className="p-2 flex flex-col justify-between grow">
                  <h3 className="text-[18px] font-bold text-gray-800">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mt-1 text-[12px] grow">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-md text-center hover:bg-blue-600 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6 text-center">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skillIcons.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-400 to-blue-600 text-white rounded-full text-sm md:text-base font-semibold shadow-md cursor-default"
              >
                {skill.icon}
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </MacWindow>
  );
};

export default GithubTab;
