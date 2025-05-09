import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ChevronRight,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Server,
  Wifi,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

const experiences = [
  {
    company: "DigiDumpling Limited",
    position: "Software Developer",
    isRemote: true,
    period: "01/04/2025 - Present",
    description: [
      "Developed scalable backend systems using PHP and Laravel, integrating legacy codebases and modern frameworks.",
      "Designed and maintained RESTful APIs to support web and mobile platforms",
      "Improved system performance through query optimization and efficient database structuring.",
      "Contributed to architecture design, ensuring scalability, maintainability, and code quality",
      "Collaborated with cross-functional teams to deliver feature-rich web applications",
    ],
    tech: ["PHP", "Laravel", "JavaScript", "MySQL", "PostgreSQL"],
  },
  {
    company: "Sarbs Communication Ltd",
    isRemote: false,
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
    isRemote: false,
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
    isRemote: true,
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

// Enhanced background with prominent clipping paths
const EnhancedBackground = () => {
  // Tech icon components
  const icons = [
    { Component: Code, size: 24, delay: 0 },
    { Component: Server, size: 28, delay: 2 },
    { Component: Database, size: 26, delay: 4 },
    { Component: Globe, size: 30, delay: 1 },
    { Component: Cpu, size: 22, delay: 3 },
    { Component: Cloud, size: 32, delay: 5 },
    { Component: Wifi, size: 24, delay: 2.5 },
    { Component: Zap, size: 20, delay: 1.5 },
  ];

  return (
    <>
      {/* Large geometric clipping paths */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        {/* Main diagonal clipping path with gradient */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="diagonalGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.03" />
              <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.03" />
            </linearGradient>
            <clipPath id="diagonalClip">
              <polygon points="0,1000 0,300 700,1000" />
            </clipPath>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#diagonalGradient)"
            clipPath="url(#diagonalClip)"
          />

          {/* Animated scan line */}
          <motion.line
            x1="-100"
            y1="300"
            x2="700"
            y2="1100"
            stroke="#00D4FF"
            strokeWidth="2"
            strokeDasharray="5,15"
            animate={{
              x1: ["0", "1000"],
              x2: ["800", "1800"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            opacity="0.2"
          />
        </svg>

        {/* Top right triangular clipping path */}
        <svg
          className="absolute top-0 right-0 w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="gridPattern"
              patternUnits="userSpaceOnUse"
              width="30"
              height="30"
            >
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="#00D4FF"
                strokeWidth="0.5"
              />
            </pattern>
            <clipPath id="topRightClip">
              <polygon points="1000,0 1000,400 600,0" />
            </clipPath>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#gridPattern)"
            clipPath="url(#topRightClip)"
            opacity="0.07"
          />
        </svg>

        {/* Bottom circles clipping */}
        <svg
          className="absolute bottom-0 left-0 w-full h-80"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="dotPattern"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
            >
              <circle cx="10" cy="10" r="1.5" fill="#00D4FF" />
            </pattern>
            <clipPath id="wavyBottomClip">
              <path d="M0,200 C250,120 350,170 500,100 C650,30 750,80 1000,0 L1000,200 L0,200 Z" />
            </clipPath>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#dotPattern)"
            clipPath="url(#wavyBottomClip)"
            opacity="0.07"
          />
        </svg>
      </div>

      {/* Animated tech icons with precise positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {icons.map((icon, index) => {
          // Calculate semi-fixed positions that still allow animation
          const basePositionX = (index % 4) * 25 + 10;
          const basePositionY = Math.floor(index / 4) * 33 + 15;

          return (
            <motion.div
              key={index}
              className="absolute text-primary"
              initial={{
                x: `${basePositionX}%`,
                y: `${basePositionY}%`,
                opacity: 0,
              }}
              animate={{
                x: [
                  `${basePositionX}%`,
                  `${basePositionX + (Math.random() * 10 - 5)}%`,
                  `${basePositionX}%`,
                ],
                y: [
                  `${basePositionY}%`,
                  `${basePositionY + (Math.random() * 10 - 5)}%`,
                  `${basePositionY}%`,
                ],
                opacity: [0.1, 0.25, 0.1],
                rotate: [0, Math.random() < 0.5 ? 10 : -10, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: icon.delay,
                ease: "easeInOut",
              }}
            >
              <icon.Component size={icon.size} opacity={0.2} />

              {/* Glowing pulse effect around some icons */}
              {index % 3 === 0 && (
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.1, 0, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: icon.delay,
                  }}
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Gradient orbs from previous version */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
    </>
  );
};

const Experience = () => {
  // State to track the expanded experience
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const timelineDotVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Enhanced Background with Clipping Paths and Icons */}
      <EnhancedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Work Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line with animation */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary/10 via-primary to-primary/10"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:pr-8"
              }`}
            >
              {/* Timeline dot with pulse effect */}
              <motion.div
                variants={timelineDotVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="absolute left-0 md:left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 md:-translate-x-[1.65rem] z-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 bg-primary rounded-full"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -10px rgba(0, 212, 255, 0.2)",
                }}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="bg-[#1A1A1A] p-6 rounded-lg shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.h3
                    className="text-xl font-semibold text-primary"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {exp.company}
                    {exp.isRemote && (
                      <sup className="text-xs text-gray-400 ml-2">Remote</sup>
                    )}
                  </motion.h3>
                  <div className="flex items-center text-gray-400 bg-black/30 px-3 py-1 rounded-full">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <h4 className="text-lg text-white mb-4 flex items-center">
                  <Briefcase size={18} className="mr-2 text-primary" />
                  {exp.position}
                </h4>

                <motion.ul
                  className="space-y-2 mb-4"
                  animate={{
                    height:
                      expandedIndex === index || expandedIndex === null
                        ? "auto"
                        : "80px",
                    opacity: 1,
                  }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-300 flex items-start group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <ChevronRight
                        size={16}
                        className="text-primary mt-1 mr-2 flex-shrink-0 transition-transform group-hover:translate-x-1"
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {expandedIndex !== index &&
                  exp.description.length > 4 &&
                  expandedIndex !== null && (
                    <motion.div
                      className="text-primary text-sm cursor-pointer hover:underline text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      Show more...
                    </motion.div>
                  )}

                <motion.div
                  className="flex flex-wrap gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {exp.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, type: "spring" }}
                      whileHover={{
                        y: -2,
                        backgroundColor: "rgba(0, 212, 255, 0.3)",
                      }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm inline-block"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
