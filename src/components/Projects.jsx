import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import React, { useState } from "react";

const projects = [
  {
    order: 1,
    title: "Remote Monitoring System (RMS)",
    description:
      "Real-time telecom tower monitoring system using AWS IoT Core and GoLang",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tech: ["Go", "AWS IoT", "React", "MQTT"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    order: 2,
    title: "Grid Controller (GC)",
    description: "Solar-powered grid optimization with MQTT dashboard",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    tech: ["Laravel", "MQTT", "Vue.js"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    order: 3,
    title: "Visually Impaired People's Society",
    description: "Accessible website with screen reader optimization",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
    tech: ["PHP", "Laravel", "Accessibility"],
    links: {
      live: "https://vipsbd.org",
      github: "#",
    },
  },
  {
    order: 4,
    title: "Steady Formation",
    description: "Custom software solutions platform",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tech: ["PHP", "Laravel", "React"],
    links: {
      live: "https://steadyformation.com",
      github: "#",
    },
  },
].sort((a, b) => a.order - b.order);

const PROJECTS_PER_PAGE = 2;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  return (
    <section
      id="projects"
      className="py-20 bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {paginatedProjects.map((project, index) => (
            <motion.div
              key={project.order}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-black"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 flex items-end z-20">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-primary transition-colors"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${
              currentPage === 1
                ? "text-gray-500 cursor-not-allowed"
                : "text-primary hover:bg-primary/10"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <span className="text-white">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed"
                : "text-primary hover:bg-primary/10"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
