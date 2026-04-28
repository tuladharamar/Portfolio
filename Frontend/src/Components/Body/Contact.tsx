import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const messageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await axios({
        method: 'POST',
        url: `${import.meta.env.VITE_API_URL}/api/contact`,
        headers: { 'Content-Type': 'application/json' },
        data: formData,
      });

      const data = res.data;

      if (res.status < 200 || res.status >= 300) {
        throw new Error(data?.error || 'Failed to send message');
      }

      // Success
      setStatus(data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Optional: auto-hide message after 4s
      setTimeout(() => setStatus(null), 4000);

    } catch (err: any) {
      console.error('Contact form error:', err);
      setStatus(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-quad py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-amber-50/80">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 max-w-lg mx-auto">
          {/* NAME */}
          <motion.div variants={childVariants}>
            <label className="block text-amber-50/90 mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your name"
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-[#0a1f44]/70 border border-amber-50/30 text-amber-50 shadow-2xl" />
          </motion.div>

          {/* EMAIL */}
          <motion.div variants={childVariants}>
            <label className="block text-amber-50/90 mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your email"
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-[#0a1f44]/70 border border-amber-50/30 text-amber-50 shadow-2xl" />
          </motion.div>
          {/*Phone */}
          <motion.div variants={childVariants}>
            <label className="block text-amber-50/90 mb-2 text-sm font-medium">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-[#0a1f44]/70 border border-amber-50/30 text-amber-50 placeholder-amber-50/50 focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all shadow-2xl" />
          </motion.div>

          {/* MESSAGE */}
          <motion.div variants={childVariants}>
            <label className="block text-amber-50/90 mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              placeholder="Your message"
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-[#0a1f44]/70 border border-amber-50/30 text-amber-50 shadow-2xl" />
          </motion.div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full py-4 rounded-lg font-medium text-lg text-white shadow-2xl
              ${loading
                ? 'bg-accent/50 cursor-not-allowed'
                : 'bg-accent hover:bg-accent/90'}`}>
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* STATUS MESSAGE */}
        <AnimatePresence>
          {status && (
            <motion.div
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
              <p
                className={`text-lg font-medium px-6 py-4 rounded-lg shadow-lg
        ${status.toLowerCase().includes('success')
                    ? 'bg-green-600 text-white'
                    : 'bg-red-600 text-white'
                  }`}>
                {status}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Contact;