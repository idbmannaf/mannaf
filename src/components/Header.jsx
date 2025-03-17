import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => ({
        id: item.toLowerCase(),
        element: document.getElementById(item.toLowerCase()),
      }));

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed  w-full bg-[#1A1A1A]/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="w-8 h-8 text-[#00D4FF]" />
            <span className="text-white text-xl font-bold">AM</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-primary font-semibold"
                    : "text-gray-300 hover:text-primary"
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className={`md:hidden overflow-hidden ${isOpen ? "block" : "hidden"}`}
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-primary font-semibold"
                    : "text-gray-300 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
