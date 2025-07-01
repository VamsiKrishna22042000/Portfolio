import React from "react";
import { motion } from "framer-motion";
import { Code, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left ">
            <motion.div
              className="flex items-center justify-center md:justify-start space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="h-8 w-8 text-teal-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Vamsi Krishna
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer passionate about creating exceptional digital
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:ml-12">
            <h3 className="text-gray-100 font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.querySelector(
                        `#${link.toLowerCase()}`
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={20} />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-400" />
              <span>using React & Framer Motion</span>
            </div>

            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vamsi Krishna. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
