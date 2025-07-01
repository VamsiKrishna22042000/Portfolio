import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Software Developer",
      company: "Piazza Consulting Group",
      location: "Hyderabad, TE",
      period: "2024 Feb - Present",
      description: [
        "Developed scalable in-house applications for financial and AI-driven solutions with React.js, Next.js, and TypeScript, enhancing development efficiency by 30%",
        "Mentored junior developers and established code review best practices",
        "Refactored code structure to improve maintainability and performance, decreasing technical debt by 35%.",
        "Designed responsive UIs utilizing Prime React, Prime Flex, Material UI, and Tailwind CSS, reducing page load times by 25%.",
        "Developed AI-powered automation tools for document processing and multilingual content extraction, cutting manual processing efforts by 50%.",
      ],
      tech: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Java Script",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "React.js Developer",
      company: "IONINKS",
      location: "Visakhapatnam, AP",
      period: "2023 June - 2024 Feb",
      description: [
        "Built and maintained multiple client-facing web applications",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Integrated third-party APIs and payment processing systems",
        "Participated in agile development cycles and sprint planning",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    // {
    //   title: "Synthesis R&D Chemist",
    //   company: "Aragen Life Sciences https://www.aragen.com/",
    //   location: "Hyderabad, TE, https://maps.app.goo.gl/y8QRqm5ecSuaEX5y9",
    //   period: "2022 Aug - 2023 June",
    //   description: [
    //     "Designed and synthesized novel chemical compounds for pharmaceutical applications",
    //     "Conducted experiments to optimize reaction conditions and improve yield",
    //     "Analyzed chemical structures using NMR, HPLC, and mass spectrometry",
    //     "Documented experimental procedures and results for regulatory compliance",
    //   ],
    //   tech: [
    //     "Organic Synthesis",
    //     "NMR Spectroscopy",
    //     "HPLC",
    //     "Mass Spectrometry",
    //     "Lab Safety Protocols",
    //   ],
    // },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development and engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1 lg:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div
                  className={`w-full lg:w-6/12 ${
                    index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                  } ml-5 lg:ml-0`}
                >
                  <motion.div
                    className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="bg-teal-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {experience.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-teal-400 transition-colors">
                      {experience.title}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-gray-300">
                      <div className="flex items-start">
                        <Building
                          size={16}
                          className="mr-2 text-teal-400 mt-1"
                        />
                        <span
                          onClick={() => {
                            experience.company === "IONINKS"
                              ? (window.location.href = "https://ioninks.co/")
                              : (window.location.href =
                                  "https://www.pcongrp.com/");
                          }}
                          className="font-medium hover:text-blue-600"
                        >
                          {experience.company}
                        </span>
                      </div>
                      <div className="flex items-start">
                        <MapPin size={16} className="mr-2 text-teal-400 mt-1" />
                        <span
                          className="hover:text-blue-6  00"
                          onClick={() => {
                            experience.company === "IONINKS"
                              ? (window.location.href =
                                  "https://maps.app.goo.gl/iDH61LWW2rCwhszF8")
                              : (window.location.href =
                                  "https://maps.app.goo.gl/x9brDZfbzPKZpS6BA");
                          }}
                        >
                          {experience.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-teal-400 mr-2 mt-2 w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600 hover:border-teal-400 hover:text-teal-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional certifications or achievements */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-8">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "AWS Certified Solutions Architect",
              "React Developer Certification",
              "Google Cloud Professional"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-teal-400/50 transition-colors"
              >
                <h4 className="font-semibold text-gray-100">{cert}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Experience;
