import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6bf5lq4",
        "template_krdirtc",
        form.current,
        "5t7iWllDMWd1mGlzd"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section className="w-full bg-transparent text-white px-4 py-20" id="contact">
      <ToastContainer />

      {/* Animated Heading */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h2
          className="text-4xl font-extrabold"
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          Get In <span className="text-purple-500">Touch</span>
        </motion.h2>

        <motion.div
          className="w-56 h-1 bg-purple-500 mx-auto mt-2 rounded-full"
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
        ></motion.div>

        <motion.p
          className="text-gray-400 mt-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out. I’m always open to new opportunities.
        </motion.p>
      </motion.div>

      {/* Contact Form Card with Fade-in */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <form ref={form} onSubmit={sendEmail} className="bg-[#181824] p-8 rounded-xl shadow-xl w-full space-y-6">
          <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="from_name"
              className="w-full px-4 py-2 rounded-md bg-[#1e1e2e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              name="reply_to"
              className="w-full px-4 py-2 rounded-md bg-[#1e1e2e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-2 rounded-md bg-[#1e1e2e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Subject"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-md bg-[#1e1e2e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Hello, I'd like to talk about..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-2 rounded-md text-white font-medium"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;