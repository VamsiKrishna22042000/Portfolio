import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful user experiences",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative flex justify-center items-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./professionaldp.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-80 blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-80 blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 text-center lg:text-left ml-3 lg:ml-0">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed ml-3 lg:ml-0 text-left">
              With over 2 years of experience in full-stack development, I
              specialize in creating robust, scalable web applications using
              modern technologies. My journey began with a fascination for how
              things work, leading me to explore the endless possibilities of
              code.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed ml-3 lg:ml-0 md:text-left">
              I'm passionate about clean code, user experience, and staying
              up-to-date with the latest industry trends. When I'm not coding,
              you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer
              community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-6 order-1 lg:order-3 lg:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 mx-3 md:mx-4 lg:mx-0">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-700/50 p-3 sm:p-4 rounded-lg border border-gray-600 hover:border-teal-400 transition-colors duration-300"
                >
                  <skill.icon className="text-teal-400 mb-2" size={20} />
                  <h4 className="font-semibold text-gray-100 mb-1 text-sm sm:text-base">
                    {skill.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {skill.description}
                  </p>
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
