import { motion } from 'framer-motion'; // npm install framer-motion
import IMG from '../../assets/Img_2.png'
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-140px)] flex items-center bg-linear-to-br from-quad via-quad to-[#0a1f44] py-16 md:py-24 overflow-hidden">

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,193,7,0.08),transparent_40%)]" />
      </div>

      <div className="relative max-w-4xl md:max-w-6xl mx-auto w-full px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-6 md:gap-8"          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-xl md:text-2xl lg:text-3xl font-mono font-medium text-secondary/90">
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary tracking-tight">
              Amar Tuladhar
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-3xl md:text-5xl lg:text-7xl font-bold text-accent pr-3  mx-auto">
              I build things for the web.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className=" text-lg md:text-xl text-amber-50/90  pr-6 leading-relaxed tracking-tight">
              I'm a Full Stack Developer from Kathmandu, specializing in creating accessible,
              performant, and human-centered digital experiences with modern tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-6 md:mt-10 flex flex-wrap gap-4">
              <Link
               to="/projects"
                className="inline-flex items-center px-7 py-4 rounded-lg bg-accent text-white font-mono font-bold text-lg hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1">
                Explore My Work →
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-4 rounded-lg border-2 border-accent text-accent font-mono font-bold text-lg hover:bg-accent/10 hover:shadow-lg transition-all duration-300">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hidden md:flex justify-center items-center">

            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
              <img
                src={IMG}
                alt="Amar Tuladhar - Full Stack Developer"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-linear-to-tr from-accent/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;