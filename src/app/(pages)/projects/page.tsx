import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Prank Caller",
    description:
      "A fun web app built with React that allows users to browse and send customizable prank calls with credit-based system.",
    tech: ["React.js", "Tailwind CSS", "Redux", "JWT"],
    image: "/projects/prankcaller.png",
    demo: "https://prankcaller.io/",
  },
  {
    id: 2,
    title: "Venturecraft",
    description:
      "Business presentation platform, improved investor engagement.",
    tech: ["React.js", "Next.js", "TypeScript", "Redux Toolkit"],
    image: "/projects/venturecraft.png",
    demo: "https://venturecraft.io/",
  },
];

export default function Projects() {
  return (
    <section className="container">
      <h2 className="heading">Projects</h2>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative border border-gray-500 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-baseColor">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-baseColor hover:underline"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                {/* {
                    project.github && <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  } */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
