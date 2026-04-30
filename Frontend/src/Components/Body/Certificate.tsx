import certifi from "../../Constant/certif";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Certificate = () => {
    return (
        <section className="bg-accent py-20 md:py-28 lg:py-32 overflow-auto">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50 mb-4 md:mb-6">
                        My Certificates
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-lg md:text-xl text-amber-50/80 max-w-3xl mx-auto leading-relaxed">
                        A collection of certificates from courses and workshops I have completed.
                    </motion.p>
                </div>

                {certifi.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center py-20">
                        <p className="text-2xl text-amber-50/70 mb-6">
                            No certificates added yet — coming soon!
                        </p>
                        <p className="text-amber-50/60">
                            Stay tuned for updates as I continue learning and earning new certificates.
                        </p>
                    </motion.div>
                ) : (
                    <motion.ul
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {certifi.map((certItem) => (
                            <motion.li
                                key={certItem.id}
                                variants={item}
                                className="group bg-[#0a1f44]/70 backdrop-blur-md border border-amber-50/15 rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl hover:border-accent/40 transition-all duration-400 flex flex-col h-full">
                                {/* Image */}
                                {certItem.cert ? (
                                    <a href={certItem.cert} className="relative aspect-video overflow-hidden bg-black/40">
                                        <img
                                            src={certItem.image}
                                            alt={`${certItem.title} – certificate`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                            decoding="async"/>
                                    </a>
                                ) : (
                                    <div className="relative aspect-video overflow-hidden bg-black/40">
                                        <a
                                            href={certItem.image}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full h-full" >
                                            <img
                                                src={certItem.image}
                                                alt={`${certItem.title} – certificate`}
                                                className="w-full h-full object-cover hover:brightness-90 transition-all duration-200"/>
                                        </a>
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-6 md:p-7 lg:p-8 flex flex-col grow text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-amber-50 mb-3 md:mb-4">
                                        {certItem.title}
                                    </h3>
                                    <p className="text-amber-50/85 leading-relaxed mb-5 md:mb-6 text-base md:text-lg">
                                        Teacher: {certItem.teacher || "N/A"}
                                    </p>

                                    {/* Certificate & Ref */}
                                    {certItem.cert && (
                                        <>
                                            <a
                                                href={certItem.link}
                                                target="_blank"
                                                className="text-blue-400 hover:underline font-semibold"
                                            >
                                                {certItem.cert}
                                            </a>
                                        </>
                                    )}
                                    {certItem.refNo && (
                                        <p className="text-amber-50/70 mt-1 text-sm">Ref: {certItem.refNo}</p>
                                    )}
                                    <button className="text-white pt-10">
                                        <a href={certItem.link} target="_blank">View</a></button>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </section>
    );
};

export default Certificate;