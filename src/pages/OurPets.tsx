import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingPaws } from "@/components/FloatingPaws";
import { Link } from "react-router-dom";
import { CustomCursor } from "@/components/CustomCursor";
import { motion } from "framer-motion";

const petCategories = [
  { name: "DOGS", image: "/hdog.png", link: "/dogs" },
  { name: "CATS", image: "/hcat.png", link: "/cats" },
  { name: "SQUIRRELS", image: "/placeholder.svg", link: "/squirrels" },
  { name: "RABBITS", image: "/hrabbit.png", link: "/rabbits" },
  { name: "TURTLES", image: "/placeholder.svg", link: "/turtles" },
  { name: "PARROTS", image: "/placeholder.svg", link: "/parrots" },
];

const OurPets: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black relative overflow-x-hidden">
      <CustomCursor mousePosition={mousePosition} className="hidden sm:block" />
      <Navbar />
      <FloatingPaws />
      <main className="flex flex-col items-center justify-center py-16 sm:py-24 w-full px-2 sm:px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          Our Pets
        </motion.h1>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 md:gap-y-16 md:gap-x-12">
          {petCategories.map((pet, idx) => (
            <motion.div
              key={pet.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 * idx }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={pet.link}
                className="flex flex-col items-center cursor-pointer transition-transform focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg py-6 px-2 sm:px-4 w-full"
                tabIndex={0}
            >
                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-4 border-pink-200 dark:border-purple-400 flex items-center justify-center overflow-hidden mb-4 bg-white/80 dark:bg-gray-900/80 shadow-lg">
                <img
                  src={pet.image}
                  alt={pet.name}
                    className="object-contain w-32 h-32 sm:w-48 sm:h-48"
                  style={{ background: "none" }}
                />
              </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent text-center" style={{ letterSpacing: '0.03em' }}>{pet.name}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurPets; 