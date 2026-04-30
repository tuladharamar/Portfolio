import skills from "../../Constant/skills";
import { motion } from "framer-motion"; // npm install framer-motion (optional but recommended for smooth entrances)

const Skills = () => {
  return (
    <section className="bg-quad py-16 md:py-24 min-h-screen md:h-[calc(100vh-140px)] overflow-auto">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header – more engaging like hero/about sections */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-amber-50 mb-4"
          >
            Technologies I Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl text-amber-50/80 max-w-3xl mx-auto leading-relaxed"
          >
            Here are the tools and technologies I’ve been actively using and enjoying recently.
          </motion.p>
        </div>

        {/* Skills Grid – enhanced with stagger animation */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 w-full"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group relative border-2 border-amber-50/20 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center gap-4 text-center hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 transition-all duration-400 hover:-translate-y-1"
            >
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3"
                loading="lazy"
              />
              <span className="text-lg md:text-xl font-bold text-amber-50 group-hover:text-accent transition-colors">
                {skill.name}
              </span>

              {/* Optional tiny proficiency badge (if you add levels to data) */}
              {/* {skill.level && (
                <span className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full bg-accent/20 text-accent">
                  {skill.level}
                </span>
              )} */}
            </motion.li>
          ))}
        </motion.ul>

        {/* Optional footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-12 text-amber-50/70 text-lg"
        >
          Always learning — currently diving deeper into Next.js App Router, TypeScript patterns, and performance optimization.
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;