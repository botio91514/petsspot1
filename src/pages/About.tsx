import { motion } from "framer-motion";
import { PawPrint, Heart, Dog, Home, Star, Camera, Truck, Leaf, Instagram } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const iconClass = "inline-block align-middle text-pink-500 dark:text-purple-400 mr-2";

const petImages = [
  "/public/hdog.png",
  "/public/hcat.png",
  "/public/hrabbit.png",
  "/public/logo.jpg"
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 flex flex-col">
      <CustomCursor mousePosition={mousePosition} className="hidden sm:block" />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-8 sm:py-12 pt-28 w-full px-2 sm:px-4 mt-0">
        <section className="w-full max-w-3xl mx-auto px-0 sm:px-4">
          {/* Animated pet images at the top */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-8 flex-wrap mt-8">
            {petImages.map((src, idx) => (
              <motion.img
                key={src}
                src={src.replace('/public', '')}
                alt="Pet"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full shadow-lg border-4 border-pink-200 dark:border-purple-400 object-cover bg-white/80 dark:bg-gray-900/80"
                initial={{ y: -30, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.7, type: "spring" }}
                whileHover={{ scale: 1.08, rotate: [0, 8, -8, 0] }}
                transition={{ type: 'tween', duration: 0.5 }}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-2">
              <PawPrint className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 animate-bounce" />
              About Pets Spot
            </h1>
            <p className="text-base sm:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mt-4">
              Welcome to Pets Spot — Vadodara's most trusted and lovable destination for pets and their essentials.<br/>
              We’re not just a pet store; we’re a space where love for animals turns into lifelong companionship.
            </p>
          </motion.div>

          {/* Who We Are section with image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-10"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-lg p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
              <motion.img
                src="/hdog.png"
                alt="Happy Dog"
                className="w-28 h-28 rounded-full border-4 border-purple-200 dark:border-pink-400 object-cover shadow-md mb-4 md:mb-0"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
                whileHover={{ scale: 1.07, rotate: [0, 6, -6, 0] }}
              />
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <Dog className="w-8 h-8 text-purple-500 animate-pulse" /> Who We Are
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
                  We’re a passionate, pet-loving team based in Vadodara, Gujarat, dedicated to connecting responsible pet lovers with healthy, ethically raised pets. Our journey began with a simple mission:
                </p>
                <p className="italic text-purple-600 dark:text-pink-300 text-lg mb-2">
                  To create a safe, joyful space where pets are celebrated and pet parenting becomes a beautiful experience.
                </p>
              </div>
            </div>

            {/* What We Offer section with image */}
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-lg p-8 mb-8 flex flex-col md:flex-row-reverse items-center gap-8">
              <motion.img
                src="/hcat.png"
                alt="Happy Cat"
                className="w-28 h-28 rounded-full border-4 border-pink-200 dark:border-purple-400 object-cover shadow-md mb-4 md:mb-0"
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
                whileHover={{ scale: 1.07, rotate: [0, -6, 6, 0] }}
              />
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <PawPrint className="w-8 h-8 text-pink-500 animate-bounce" /> What We Offer
                </h2>
                <ul className="text-lg text-gray-700 dark:text-gray-200 space-y-3">
                  <li><Star className={iconClass} /> <b>Healthy & Certified Pets:</b> Only the finest breeds, raised with care, love, and expert supervision.</li>
                  <li><Heart className={iconClass} /> <b>Personalized Guidance:</b> Not sure which pet suits you best? We help you make the right choice based on your lifestyle and preferences.</li>
                  <li><Home className={iconClass} /> <b>Premium Pet Essentials:</b> From food and grooming to toys and accessories — everything your pet needs under one roof.</li>
                  <li><Truck className={iconClass} /> <b>After-Adoption Support:</b> Because we care beyond the sale. We’re here to support your journey of pet parenting.</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us section with image */}
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-lg p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
              <motion.img
                src="/hrabbit.png"
                alt="Happy Rabbit"
                className="w-28 h-28 rounded-full border-4 border-purple-200 dark:border-pink-400 object-cover shadow-md mb-4 md:mb-0"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
                whileHover={{ scale: 1.07, rotate: [0, 6, -6, 0] }}
              />
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="w-8 h-8 text-pink-500 animate-pulse" /> Why Choose Us?
                </h2>
                <ul className="text-lg text-gray-700 dark:text-gray-200 space-y-3">
                  <li><Star className={iconClass} /> <b>Trusted by hundreds</b> of pet parents across Vadodara and Gujarat.</li>
                  <li><Camera className={iconClass} /> <b>100% transparency</b> — What you see on our Instagram is exactly what you get.</li>
                  <li><Home className={iconClass} /> <b>Home-delivery & setup</b> for pet comfort and convenience.</li>
                  <li><Leaf className={iconClass} /> <b>Ethical, cruelty-free practices</b> — No compromises on animal care.</li>
                </ul>
              </div>
            </div>

            {/* Connect With Us section with image */}
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-lg p-8 mb-8 flex flex-col md:flex-row-reverse items-center gap-8">
              <motion.img
                src="/logo.jpg"
                alt="Pets Spot Logo"
                className="w-28 h-28 rounded-full border-4 border-pink-200 dark:border-purple-400 object-cover shadow-md mb-4 md:mb-0"
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
                whileHover={{ scale: 1.07, rotate: [0, -6, 6, 0] }}
              />
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <Instagram className="w-8 h-8 text-purple-500 animate-bounce" /> Connect With Us
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
                  Join our ever-growing family on Instagram <a href="https://instagram.com/pets_spot_official" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-300 underline hover:text-purple-600">@pets_spot_official</a> to explore heartwarming moments, new arrivals, and helpful pet care tips.<br/>
                  We’re here to make pet adoption simple, joyful, and deeply fulfilling.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mt-8"
            >
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-2">
                At Pets Spot, we don’t just sell pets — we build bonds.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                Let us help you find your perfect companion today. <PawPrint className="inline w-7 h-7 text-pink-500 animate-bounce align-middle ml-2" />
              </p>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About; 