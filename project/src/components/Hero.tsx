import { useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Create cursor trail effect
  useEffect(() => {
    const createTrail = (e: MouseEvent) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = e.clientX + "px";
      trail.style.top = e.clientY + "px";
      document.body.appendChild(trail);

      setTimeout(() => {
        document.body.removeChild(trail);
      }, 800);
    };

    const throttledTrail = (e: MouseEvent) => {
      if (Math.random() > 0.7) {
        createTrail(e);
      }
    };

    document.addEventListener("mousemove", throttledTrail);
    return () => document.removeEventListener("mousemove", throttledTrail);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-teal-900 opacity-50"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-teal-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Vamsi Krishna
              </span>
            </motion.h1>

            <motion.p
              className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto px-4 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack Developer crafting beautiful, scalable web applications
              with modern technologies and innovative solutions.
            </motion.p>

            <motion.div
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection("#projects")}
                className="w-full xs:w-auto bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-hover-target text-sm sm:text-base"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="w-full xs:w-auto border-2 border-teal-400 text-teal-400 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 cursor-hover-target text-sm sm:text-base"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#14b8a6",
                  color: "#0f172a",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Hire Me
              </motion.button>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-4 sm:space-x-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/VamsiKrishna22042000",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/vamsi-krishna-killada/",
                  label: "LinkedIn",
                },
                {
                  icon: Download,
                  href: "./VamsiKrishna.pdf",
                  label: "Vamsi Krishna",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200 cursor-hover-target p-2"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  download={label === "Vamsi Krishna" ? "VamsiKrishna.pdf" : ""}
                >
                  <Icon size={24} className="sm:w-7 sm:h-7" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute -mb-2 -ml-3 bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-hover-target"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
