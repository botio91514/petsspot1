import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const categoryGrid = [
  { name: "Food", discount: "20%", link: "/shop/food", images: [
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1518715308788-3005759c61d3?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=80&h=80&fit=crop"
  ] },
  { name: "Treats", discount: "20%", link: "/shop/treats", images: [
    "https://images.unsplash.com/photo-1518715308788-3005759c61d3?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=80&h=80&fit=crop"
  ] },
  { name: "Health", discount: "20%", link: "/shop/health", images: [
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=80&h=80&fit=crop"
  ] },
  { name: "Toys", discount: "30%", link: "/shop/toys", images: [
    "https://images.unsplash.com/photo-1605641781021-7c4a86d10af6?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1518715308788-3005759c61d3?w=80&h=80&fit=crop"
  ] },
  { name: "Grooming", discount: "30%", link: "/shop/grooming", images: [
    "https://images.unsplash.com/photo-1518715308788-3005759c61d3?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=80&h=80&fit=crop"
  ] },
  { name: "Clothing", discount: "50%", link: "/shop/clothing", images: [
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=80&h=80&fit=crop"
  ] },
  { name: "Walk Essentials", discount: "30%", link: "/shop/walk-essentials", images: [
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=80&h=80&fit=crop"
  ] },
  { name: "Travel Supplies", discount: "50%", link: "/shop/travel-supplies", images: [
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=80&h=80&fit=crop"
  ] },
  { name: "Bowls & Feeders", discount: "25%", link: "/shop/bowls-feeders", images: [
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=80&h=80&fit=crop"
  ] },
  { name: "Litter", discount: "20%", link: "/shop/litter", images: [
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=80&h=80&fit=crop"
  ] },
  { name: "Bowls", discount: "30%", link: "/shop/bowls", images: [
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=80&h=80&fit=crop"
  ] },
];

const Shop: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black flex flex-col">
      <CustomCursor mousePosition={mousePosition} className="hidden sm:block" />
      <Navbar />
      <div className="w-full flex justify-end items-center px-2 sm:px-4 mt-4 mb-2 sm:justify-end justify-center">
        <Link to="/about" className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base">About Us</Link>
      </div>
      <main className="flex-1 pt-24 flex flex-col items-center w-full px-2 sm:px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg uppercase tracking-wide mx-auto"
        >
          Pet Essentials Categories
        </motion.h1>
        <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-14 mx-auto justify-center">
          {categoryGrid.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 * idx }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={cat.link}
                className="flex flex-col items-center min-w-[120px] max-w-[180px] w-full group no-underline cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg py-6 px-2 sm:px-4"
                tabIndex={0}
                style={{ textDecoration: 'none' }}
              >
                <div className="relative flex items-center justify-center mb-3 w-full">
                  <div
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-white/90 dark:bg-gray-900/90 border-2 border-pink-200 dark:border-purple-400 shadow-xl flex items-center justify-center overflow-hidden relative transition-transform duration-300 group-hover:scale-105 group-hover:shadow-pink-200/60 dark:group-hover:shadow-purple-900/60"
                    style={{ boxShadow: "0 6px 32px 0 rgba(31, 38, 135, 0.10)" }}
                  >
                    {/* Discount badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-20 sm:w-24 md:w-28 h-8 flex items-center justify-center">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white dark:border-gray-900">
                        Up To <span className="text-lg md:text-xl font-extrabold">{cat.discount}</span> OFF
                      </div>
                    </div>
                    {/* Product images */}
                    <div className="flex flex-row items-center justify-center gap-1">
                      {cat.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={cat.name + " product"}
                          className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-cover rounded-full border-2 border-pink-100 dark:border-purple-900 bg-white/80 shadow"
                          style={{ zIndex: 10 - i, marginLeft: i === 0 ? 0 : -12 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center text-xs sm:text-sm md:text-base font-bold tracking-wide mt-2 uppercase text-pink-600 dark:text-pink-300 w-full">
                  {cat.name}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop; 