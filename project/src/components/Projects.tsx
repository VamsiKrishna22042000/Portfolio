import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Groove Beats",
      description:
        "A live music streaming application leveraging JioSaavn APIs for real-time music streaming. Built a custom backend with Node.js, Express.js, and MongoDB to support user creation, favorite tracks, and playlist management. Features include user authentication, dynamic music catalog, and seamless playlist functionality.",
      image: "./groovebeats.png",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JioSaavn API"],
      github: "https://github.com/VamsiKrishna22042000/GrooveBeats",
      live: "https://groovebeats.vercel.app/",
      featured: true,
    },
    {
      title: "Rush Munch",
      description:
        "A food ordering application similar to Swiggy and Zomato, featuring Google Maps integration with Redux Toolkit for dynamic location selection via drag-and-drop marker, and user-friendly restaurant browsing, where I used Redux ToolKit for statemanagement, Tailwind Css for the user interface.",
      image: "rushmunch.png",
      tech: [
        "React",
        "Java Script",
        "Redux Tookit",
        "Google Maps",
        "TailwindCss",
      ],
      github: "https://github.com/VamsiKrishna22042000/RushMunch",
      live: "https://rushmunch.vercel.app/",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and data visualization using Chart.js.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Chart.js", "OpenWeather API"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
    },
    {
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics dashboard for social media metrics with real-time data processing and interactive charts.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "D3.js", "Python", "Redis"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/10">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800/80 p-2 rounded-full text-gray-300 hover:text-teal-400 transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800/80 p-2 rounded-full text-gray-300 hover:text-teal-400 transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2 sm:mb-3 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-300 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col xs:flex-row xs:space-x-4 space-y-2 xs:space-y-0">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center xs:justify-start text-gray-300 hover:text-teal-400 transition-colors font-medium text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={14} className="mr-2 sm:w-4 sm:h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center xs:justify-start text-gray-300 hover:text-teal-400 transition-colors font-medium text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      <Play size={14} className="mr-2 sm:w-4 sm:h-4" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-6 sm:mb-8 text-center">More Projects</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-100 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                  </div>
                </div>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;
