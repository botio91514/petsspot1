import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const treatsItems = [
  {
    name: "JerHigh Chicken Sticks",
    image: "https://images.unsplash.com/photo-1518715308788-3005759c61d3?w=300&h=300&fit=crop",
    price: 9.99,
    discount: "20%",
    rating: 4.7,
    desc: "Delicious chicken treats for dogs. High in protein and easy to digest.",
  },
  {
    name: "Pedigree Dentastix",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop",
    price: 7.99,
    discount: "20%",
    rating: 4.8,
    desc: "Dental chews for dogs. Helps reduce tartar and freshen breath.",
  },
  {
    name: "Temptations Cat Treats",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop",
    price: 5.99,
    discount: "20%",
    rating: 4.6,
    desc: "Crunchy outside, soft inside. Irresistible treats for cats.",
  },
  {
    name: "PureBites Freeze Dried Treats",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=300&fit=crop",
    price: 12.99,
    discount: "20%",
    rating: 4.9,
    desc: "Single-ingredient, freeze-dried treats for dogs and cats. 100% natural.",
  },
];

const ShopTreats: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-8 sm:py-12 px-2 sm:px-4 w-full pt-44">
        <div className="w-full max-w-6xl flex flex-col items-center mb-6 sm:mb-8">
          <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl uppercase tracking-wide mb-4 sm:mb-6" style={{letterSpacing: '0.04em'}}>Treats</h1>
        </div>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {treatsItems.map((item) => (
            <div key={item.name} className="rounded-3xl bg-white/90 dark:bg-gray-900/90 border-2 border-pink-200 dark:border-purple-400 shadow-xl p-4 sm:p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-pink-200/60 dark:hover:shadow-purple-900/60 w-full">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4 flex items-center justify-center">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-2xl border-2 border-pink-100 dark:border-purple-900 bg-white/80 shadow" />
                <span className="absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-br-2xl rounded-tl-2xl shadow-lg">{item.discount} OFF</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-1 text-center">{item.name}</h2>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg sm:text-xl font-extrabold text-purple-600 dark:text-pink-400">${item.price}</span>
                <span className="text-yellow-500 font-bold">★ {item.rating}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 text-center mb-2">{item.desc}</p>
              <button className="mt-auto w-full px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow hover:from-pink-600 hover:to-purple-700 transition-all duration-300">Shop Now</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShopTreats; 