import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 100 },
        { name: "TypeScript", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Python", level: 45 },
        { name: "PostgreSQL", level: 40 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git Lab", level: 95 },
        { name: "Git Hub", level: 85 },
        { name: "Docker", level: 50 },
        { name: "GraphQL", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-teal-400/50 transition-colors duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-teal-400 text-xs sm:text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <motion.div
                        className="bg-gradient-to-r from-teal-400 to-blue-500 h-1.5 sm:h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6 sm:mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind Css",
              "Material UI",
              "Boot strap",
              "ShadCn UI",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "GraphQL",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 text-gray-300 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-gray-700 hover:border-teal-400 hover:text-teal-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
