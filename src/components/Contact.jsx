import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_1l9fww6",
        "template_sx7ldef",
        formRef.current,
        "4bhWxm5VNhqIFdB-R"
      );
      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <Toaster position="top-right" />

      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Get in Touch
            </h3>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <a
                  href="mailto:idbmannaf@gmail.com"
                  className="text-white hover:text-primary"
                >
                  idbmannaf@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-gray-400">Phone/WhatsApp</p>
                <a
                  href="tel:+8801744508287"
                  className="text-white hover:text-primary"
                >
                  (+880) 1744508287
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/idbmannaf/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/idbmannaf/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="w-full bg-[#1A1A1A] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="w-full bg-[#1A1A1A] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-[#1A1A1A] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-black font-semibold py-3 rounded-lg hover:bg-[#00b8e6] transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>Send Message</span>
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
