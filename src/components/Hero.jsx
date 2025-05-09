import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import {
  SiAwsamplify,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiGin,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMqtt,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  // Array of programming languages and frameworks with icons
  const techIcons = [
    { icon: <SiGo />, class: "text-blue-300" },
    { icon: <SiPhp />, class: "text-purple-400" },
    { icon: <SiJavascript />, class: "text-yellow-400" },
    { icon: <SiTypescript />, class: "text-blue-500" },
    { icon: <SiNodedotjs />, class: "text-green-500" },
    { icon: <SiLaravel />, class: "text-red-500" },
    { icon: <SiGin />, class: "text-blue-300" },
    { icon: <SiNestjs />, class: "text-red-600" },
    { icon: <SiHtml5 />, class: "text-orange-500" },
    { icon: <SiCss3 />, class: "text-blue-400" },
    { icon: <SiBootstrap />, class: "text-purple-500" },
    { icon: <SiJquery />, class: "text-blue-400" },
    { icon: <SiMysql />, class: "text-blue-600" },
    { icon: <SiPostgresql />, class: "text-blue-400" },
    { icon: <SiAwsamplify />, class: "text-orange-400" },
    { icon: <SiDocker />, class: "text-blue-500" },
    { icon: <SiGit />, class: "text-orange-600" },
    { icon: <SiAwsamplify />, class: "text-green-500" },
    { icon: <SiMqtt />, class: "text-purple-300" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-black relative overflow-hidden"
    >
      {/* Animated Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={`absolute text-3xl md:text-4xl ${tech.class} font-mono opacity-20 select-none`}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 mb-8 relative"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#00D4FF]">
              <img
                src={`${import.meta.env.BASE_URL}me.png`}
                alt="Abd Mannaf"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Animated border */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(0, 212, 255, 0.7)",
                  "0 0 0 10px rgba(0, 212, 255, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute inset-0 rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <TypeAnimation
              sequence={["Hi, I'm Abd Mannaf", 1000]}
              wrapper="h1"
              className="text-4xl md:text-5xl font-bold text-white mb-2 select-text"
              cursor={true}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-xl text-gray-400"
            >
              Software Developer | IoT Specialist
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex space-x-4 mb-8"
          >
            <motion.a
              href="https://github.com/idbmannaf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/idbmannaf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            className="bg-[#00D4FF] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#00b8e6] transition-colors"
          >
            Explore My Work
          </motion.button>

          <motion.div
            animate={{
              y: [0, 10, 0],
              transition: { duration: 2, repeat: Infinity },
            }}
            className="absolute bottom-8 text-gray-400"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
