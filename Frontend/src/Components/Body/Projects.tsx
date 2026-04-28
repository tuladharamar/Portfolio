import projects from '../../Constant/projects';
import { motion } from 'framer-motion'; // npm i framer-motion


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section className="bg-accent py-20 md:py-28 lg:py-32 ">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50 mb-4 md:mb-6"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl text-amber-50/80 max-w-3xl mx-auto leading-relaxed"
          >
            A selection of my recent work — from full-stack applications to interactive UIs.
            Hover cards to see more.
          </motion.p>
        </div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-amber-50/70 mb-6">
              No projects added yet — coming soon!
            </p>
            <p className="text-amber-50/60">
              I'm currently working on some exciting ones. Check back soon or reach out!
            </p>
          </motion.div>
        ) : (
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10  ">
            {projects.map((project) => (
              <motion.li
                key={project.id}
                variants={item}
                className="group bg-[#0a1f44]/70 backdrop-blur-md border border-amber-50/15 rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl hover:border-accent/40 transition-all duration-400 flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-black/40 ">
                  <img
                    src={project.image }
                    alt={`${project.title} – screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 lg:p-8 flex flex-col grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-50 mb-3 md:mb-4 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-amber-50/85 leading-relaxed mb-5 md:mb-6 grow text-base md:text-lg tracking-tight ">
                    {project.content}
                  </p>

                  {/* Tags */}
                  {project.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-accent/15 text-accent/90 border border-accent/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 md:gap-4 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-accent text-white font-medium py-3 px-5 rounded-lg text-center hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                        aria-label={`Live demo of ${project.title}`}>
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-amber-50/60 text-amber-50 font-medium py-3 px-5 rounded-lg text-center hover:bg-amber-50/10 hover:border-amber-50 transition-all duration-300"
                        aria-label={`GitHub repository for ${project.title}`}>
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
};

export default Projects;