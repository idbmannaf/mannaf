import { motion } from "framer-motion";
import { Code2, Cpu, Database, Flame, Server, Users } from "lucide-react";
import React from "react";
const stats = [
  { icon: <Flame size={40} />, value: 100, label: "Projects completed" },
  // { icon: <Coffee size={40} />, value: 5670, label: "Cup of coffee" },
  { icon: <Users size={40} />, value: 10, label: "Satisfied clients" },
];
const About = () => {
  return (
    <section id="about" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-full h-[400px] rounded-2xl overflow-hidden clip-path-polygon">
              <img
                src="/IMG_0597.JPG"
                alt="Abd Mannaf"
                className="w-full h-full object-cover transform transition-transform hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center">
              <Code2 size={40} className="text-black" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Software Developer & IoT Specialist
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Software Developer with 3+ years of experience specializing in
              PHP, Laravel, and JavaScript, with ongoing experience in Go,
              Node.js, and TypeScript. Skilled in building scalable
              applications, solving complex problems, and collaborating with
              teams to deliver high-quality solutions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Server className="text-primary" />
                <span className="text-gray-300">Backend Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <Database className="text-primary" />
                <span className="text-gray-300">Database Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <Cpu className="text-primary" />
                <span className="text-gray-300">IoT Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code2 className="text-primary" />
                <span className="text-gray-300">API Development</span>
              </div>
            </div>

            <div className="mt-10 mx-auto grid grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-primary mb-2">{stat.icon}</div>
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
