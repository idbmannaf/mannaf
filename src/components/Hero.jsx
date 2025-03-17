import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-black relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Floating tech icons background */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              transition: { duration: 4, repeat: Infinity },
            }}
            className="absolute top-1/4 left-1/4 text-gray-700 opacity-20"
          >
            Go
          </motion.div>
          <motion.div
            animate={{
              y: [0, 10, 0],
              transition: { duration: 3, repeat: Infinity },
            }}
            className="absolute top-1/3 right-1/3 text-gray-700 opacity-20"
          >
            PHP
          </motion.div>
          {/* Add more floating tech icons as needed */}
        </div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16">
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
              className="text-4xl md:text-5xl font-bold text-white mb-2"
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
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
