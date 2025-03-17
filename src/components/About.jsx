import { motion } from "framer-motion";
import { Code2, Cpu, Database, Flame, Server, Users } from "lucide-react";
import React, { useEffect, useRef } from "react";

const stats = [
  { icon: <Flame size={40} />, value: 100, label: "Projects completed" },
  { icon: <Users size={40} />, value: 10, label: "Satisfied clients" },
];

const About = () => {
  const canvasRef = useRef(null);

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Particles array
    const particlesArray = [];
    const numberOfParticles = 50;

    // Create particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(0, 212, 255, ${Math.random() * 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create connections between particles
      const connectParticles = () => {
        for (let a = 0; a < particlesArray.length; a++) {
          for (let b = a; b < particlesArray.length; b++) {
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const opacity = 1 - distance / 100;
              ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.2})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      };

      connectParticles();

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#1A1A1A] z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
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
            <div className="w-full h-[400px] rounded-2xl overflow-hidden relative group">
              <img
                src={`${import.meta.env.BASE_URL}/IMG_0597.JPG`}
                alt="Abd Mannaf"
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
              />

              {/* Photo overlay glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-[#00D4FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Animated circle badge */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Code2 size={40} className="text-black" />
              </motion.div>
            </motion.div>
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
              {[
                {
                  icon: <Server className="text-primary" />,
                  text: "Backend Development",
                },
                {
                  icon: <Database className="text-primary" />,
                  text: "Database Design",
                },
                {
                  icon: <Cpu className="text-primary" />,
                  text: "IoT Solutions",
                },
                {
                  icon: <Code2 className="text-primary" />,
                  text: "API Development",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-center space-x-3 bg-black/20 p-3 rounded-lg hover:bg-black/30 transition-colors"
                >
                  {item.icon}
                  <span className="text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-6xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center bg-black/20 p-6 rounded-lg hover:bg-black/30 transition-all hover:shadow-lg hover:shadow-primary/10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-primary mb-2"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h3
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                  >
                    <CountUp end={stat.value} duration={2} />
                  </motion.h3>
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

// Simple CountUp component for animating numbers
const CountUp = ({ end, duration }) => {
  const [count, setCount] = React.useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    const startTime = Date.now();
    const endValue = end;

    const updateCount = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);

      if (progress < 1) {
        const currentCount = Math.floor(progress * endValue);
        setCount(currentCount);
        countRef.current = currentCount;
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCount);

    return () => {
      // Cleanup if needed
    };
  }, [end, duration]);

  return <>{count}</>;
};

export default About;
