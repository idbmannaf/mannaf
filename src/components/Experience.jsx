import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import React from "react";

const experiences = [
  {
    company: "Sarbs Communication Ltd",
    position: "Software Developer",
    period: "01/02/2023 - Present",
    description: [
      "Developed backend systems with PHP/Laravel and Go",
      "Implemented RESTful APIs and AWS IoT Core solutions",
      "Optimized database performance and system architecture",
      "Led team of 3 developers in project delivery",
    ],
    tech: ["PHP", "Laravel", "Go", "AWS"],
  },
  {
    company: "A2sys",
    position: "Web Developer",
    period: "01/02/2021 - 31/12/2022",
    description: [
      "Built responsive web applications using PHP/Laravel",
      "Integrated third-party APIs and payment gateways",
      "Implemented real-time features using WebSockets",
      "Maintained and optimized existing applications",
    ],
    tech: ["PHP", "Laravel", "JavaScript", "MySQL"],
  },
  {
    company: "Urgent Care At Lake Lucille",
    position: "SEO Manager",
    period: "01/01/2013 - 31/10/2017",
    description: [
      "Developed and implemented SEO strategies to improve search engine rankings",
      "Conducted keyword research and optimized website content for better visibility",
      "Managed on-page and off-page SEO, including link-building campaigns",
      "Monitored website traffic and performance using Google Analytics & Search Console",
      "Collaborated with developers to ensure SEO best practices were followed",
      "Created content marketing strategies to increase organic reach",
      "Performed technical SEO audits and implemented necessary improvements",
    ],
    tech: [
      "Google Analytics",
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
      "Yoast SEO",
      "WordPress",
      "HTML & CSS",
      "Content Marketing",
      "Schema Markup",
      "Backlink Analysis",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:pr-8"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 md:-translate-x-[1.65rem]" />

              <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-xl hover:transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {exp.company}
                  </h3>
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <h4 className="text-lg text-white mb-4 flex items-center">
                  <Briefcase size={18} className="mr-2 text-primary" />
                  {exp.position}
                </h4>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
