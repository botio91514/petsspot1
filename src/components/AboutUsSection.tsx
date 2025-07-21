import { motion } from "framer-motion";
import { PawPrint, Heart, Users, Star, Home, Instagram } from "lucide-react";

const petImages = [
  "/hcat.png",
  "/hdog.png",
  "/hrabbit.png",
];

export const AboutUsSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 overflow-hidden pb-20">
      {/* Hero Banner */}
      <div className="relative flex flex-col items-center justify-center min-h-[350px] pt-16 pb-12">
        {/* Big Paw Print Watermark */}
        <PawPrint className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-100 dark:text-purple-900 opacity-30 w-[300px] h-[300px] pointer-events-none z-0" />
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg mb-4"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative z-10 text-xl md:text-2xl text-gray-700 dark:text-gray-200 text-center max-w-2xl mx-auto font-medium"
        >
          Connecting loving families with perfect companions and making pet parenting a beautiful experience—one paw at a time.
        </motion.p>
      </div>

      {/* Animated Pet Collage */}
      <div className="flex justify-center gap-8 mb-12 relative z-10">
        {petImages.map((src, idx) => (
          <motion.img
            key={src}
            src={src}
            alt="Pet"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow-xl border-4 border-pink-200 dark:border-purple-400 object-cover bg-white/80 dark:bg-gray-900/80 -mt-8"
            initial={{ y: -30, opacity: 0, rotate: idx === 1 ? 0 : idx === 0 ? -10 : 10 }}
            animate={{ y: 0, opacity: 1, rotate: [idx === 1 ? 0 : idx === 0 ? -10 : 10, 0, idx === 1 ? 0 : idx === 0 ? 10 : -10, 0] }}
            transition={{ delay: 0.3 + idx * 0.2, duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            whileHover={{ scale: 1.08, rotate: 0 }}
            style={{ zIndex: 10 - idx }}
          />
        ))}
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center"
        >
          <Heart className="w-12 h-12 text-pink-500 mb-3 animate-pulse" />
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            To create a safe, joyful space where pets are celebrated and pet parenting becomes a beautiful experience.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center"
        >
          <Users className="w-12 h-12 text-purple-500 mb-3 animate-bounce" />
          <h3 className="text-2xl font-bold mb-2">Who We Are</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            A passionate, pet-loving team in Vadodara, Gujarat, dedicated to connecting responsible pet lovers with healthy, ethically raised pets.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center"
        >
          <Star className="w-12 h-12 text-yellow-400 mb-3 animate-pulse" />
          <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Trusted by hundreds of pet parents. 100% transparency. Home delivery & setup. Ethical, cruelty-free practices.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center"
        >
          <Home className="w-12 h-12 text-purple-400 mb-3 animate-bounce" />
          <h3 className="text-2xl font-bold mb-2">What We Offer</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Healthy, certified pets. Personalized guidance. Premium essentials. After-adoption support—everything under one roof.
          </p>
        </motion.div>
      </div>

      {/* Call to Action Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="max-w-2xl mx-auto px-4"
      >
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 flex items-center gap-2">
            <PawPrint className="w-8 h-8 text-white animate-bounce" /> Join Our Family
          </h3>
          <p className="text-lg text-white/90 mb-6">
            Follow us on Instagram for heartwarming moments, new arrivals, and helpful pet care tips.
          </p>
          <a
            href="https://instagram.com/pets_spot_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-pink-600 font-bold text-lg shadow hover:bg-gray-100 transition-all"
          >
            <Instagram className="w-6 h-6" /> @pets_spot_official
          </a>
        </div>
      </motion.div>
    </section>
  );
}; 