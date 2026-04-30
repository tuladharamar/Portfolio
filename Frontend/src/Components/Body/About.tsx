// import IMG from "../../assets/IMG.jpg";
import { Link } from 'react-router-dom';
import Img from '../../assets/Img_2.png'
import { motion } from "framer-motion"; // npm install framer-motion (for smooth entrances)

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-quad py-20 md:py-32 overflow-hidden">
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-quad" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-12 w-full ">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center ">

          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 md:space-y-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight">
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl md:text-2xl text-amber-50/90 leading-relaxed">
              Hello! I'm <span className="text-black text-2xl font-semibold"><b>Amar Tuladhar</b></span>,
              a passionate Full Stack Developer from Kathmandu who loves building clean,
              scalable, and user-focused web applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl md:text-2xl text-amber-50/90 leading-relaxed">
              My journey into web development began with pure curiosity and quickly turned into
              a deep passion for creating digital experiences that feel both beautiful and intuitive.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-xl md:text-2xl text-amber-50/90 leading-relaxed">
              As a junior full-stack developer, I have a solid foundation in modern JavaScript ecosystems.
              I specialize in crafting responsive, accessible interfaces with <span className="text-accent font-medium">React</span> and <span className="text-accent font-medium">Tailwind CSS</span>,
              while constantly refining my frontend architecture and best practices.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-xl md:text-2xl text-amber-50/80 leading-relaxed">
              On the backend, I build robust RESTful APIs with <span className="text-accent font-medium">Node.js</span> + <span className="text-accent font-medium">Express</span>,
              and handle data with <span className="text-accent font-medium">MongoDB</span>. I prioritize clean, maintainable code and scalable design patterns.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="text-xl md:text-2xl text-amber-50/80 leading-relaxed">
              I'm always excited to learn emerging technologies, sharpen my problem-solving skills,
              and collaborate with talented teams to grow — both as a developer and as a professional.
            </motion.p>

            {/* Optional CTA – ties back to hero feel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="pt-4">

              <Link to="/contact" className="inline-flex items-center px-5 py-4 rounded-lg border-2 border-accent text-accent font-mono font-bold text-lg hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1">
                Let's Build Something Together →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image – enhanced glow + subtle hover scale like hero polish */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group w-80 md:w-96 lg:w-105">
              {/* Glow effect – more dynamic */}
              <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-linear-to-r from-accent via-accent/50 to-transparent opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-500" />

              <div className="relative overflow-hidden rounded-2xl border border-accent/30 shadow-2xl group-hover:shadow-accent/30 transition-shadow duration-500">
                <img
                  src={Img}
                  alt="Amar Tuladhar - Full Stack Developer from Kathmandu"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Optional subtle overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;