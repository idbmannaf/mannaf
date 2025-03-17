import { motion } from "framer-motion";
import { Cloud, Code2, Cpu, Database, Globe, Server } from "lucide-react";
import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Go", "PHP", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    title: "Frameworks & APIs",
    icon: <Server className="w-6 h-6" />,
    skills: ["Laravel", "Go Gin", "NestJS", "REST API"],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    skills: ["HTML", "CSS", "Bootstrap", "jQuery", "Ajax"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "PostgreSQL", "Timestream"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "Docker", "CI/CD", "Git"],
  },
  {
    title: "IoT",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["AWS IoT Core", "MQTT"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
