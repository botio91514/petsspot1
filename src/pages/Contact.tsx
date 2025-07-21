import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingPaws } from "@/components/FloatingPaws";
import { CustomCursor } from "@/components/CustomCursor";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, MessageCircle, Clock, CalendarX } from "lucide-react";

const Contact: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black relative overflow-x-hidden">
      <CustomCursor mousePosition={mousePosition} className="hidden sm:block" />
      <Navbar />
      <FloatingPaws />
      <main className="flex flex-col items-center justify-center py-16 sm:py-24 w-full px-2 sm:px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-4 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 text-center font-medium"
        >
          We're here to help you and your future furry friend! Reach out to us anytime — we love hearing from you.
        </motion.p>
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-7 justify-center">
            <div className="flex items-center gap-4">
              <Phone className="text-pink-500 dark:text-purple-400" />
              <span className="text-lg font-semibold">+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-4">
              <MessageCircle className="text-green-500" />
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">WhatsApp</a>
            </div>
            <div className="flex items-center gap-4">
              <Instagram className="text-pink-500 dark:text-purple-400" />
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">Instagram</a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-pink-500 dark:text-purple-400" />
              <a href="mailto:petspot@email.com" className="text-lg font-semibold hover:underline">petspot@email.com</a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-pink-500 dark:text-purple-400" />
              <span className="text-lg font-semibold">123 Pet Lane, Animal City, Country</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-yellow-500" />
              <span className="text-lg font-semibold">Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex items-center gap-4">
              <CalendarX className="text-red-500" />
              <span className="text-lg font-semibold">Closed on Sundays</span>
            </div>
          </div>
          {/* Embedded Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg w-full h-64 md:h-full">
            <iframe
              title="Pet Spot Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2s123%20Pet%20Lane%2C%20Animal%20City%2C%20Country!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 