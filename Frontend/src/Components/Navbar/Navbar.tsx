import { Link } from 'react-router-dom';
import Navtitle from '../../Constant/Navtitle';
import { IoMenu } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 },
};

const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
            staggerChildren: 0.07,
        } as any,
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 },
    },
};




const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <nav className="bg-secondary sticky top-0 z-50 shadow-md overflow-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end items-center h-20">
                    {/* Desktop Menu */}
                    <motion.ul
                        className="hidden md:flex items-center gap-8 lg:gap-12"
                        variants={navVariants}
                        initial="hidden"
                        animate="visible">
                        {Navtitle.map((item) => (
                            <motion.li
                                key={item.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                                <Link
                                    to={item.link}
                                    className="text-white text-xl lg:text-2xl font-medium hover:text-accent transition-colors duration-300 font-display">
                                    {item.title}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Mobile Hamburger */}
                    <button
                        type="button"
                        className="md:hidden text-white text-4xl  p-2 relative w-14 h-14 flex items-center justify-center"
                        onClick={toggleMenu}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}>
                
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center z-10"   
                            variants={{
                                closed: { rotate: 0, opacity: 1, scale: 1 },
                                open: { rotate: -90, opacity: 0, scale: 0.85 },
                            }}
                            animate={mobileMenuOpen ? "open" : "closed"}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                            <IoMenu />
                        </motion.div>

                        
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center z-50"   
                            variants={{
                                closed: { rotate: 90, opacity: 0, scale: 0.85 },
                                open: { rotate: 0, opacity: 1, scale: 1 },
                            }}
                            animate={mobileMenuOpen ? "open" : "closed"}
                            transition={{ duration: 0.35, ease: "easeInOut" }}>
                            <RxCross1 />
                        </motion.div>
                    </button>
                </div>
            </div>

           
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 bg-secondary backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeMenu}>
                        <motion.div
                            className="flex flex-col items-center justify-center h-full gap-10 sm:gap-12 text-3xl md:text-4xl font-medium text-white"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}>
                            {Navtitle.map((item) => (
                                <motion.div key={item.id} variants={itemVariants}>
                                    <Link
                                        to={item.link}
                                        onClick={closeMenu}
                                        className="hover:text-accent transition-colors duration-300 hover:scale-105 inline-block">
                                        {item.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;