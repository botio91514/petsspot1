import { motion } from "framer-motion";

export default function PetLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:to-blue-900/80 w-full">
      <motion.h1
        className="text-3xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Petsspot
      </motion.h1>
      <motion.div
        className="rounded-full bg-white/90 shadow-lg flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 mb-6"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        {/* Replace with your logo or SVG */}
        <img src="/logo.jpg" alt="Petsspot Logo" className="w-20 h-20 sm:w-28 sm:h-28 object-contain" />
      </motion.div>
      <motion.p
        className="text-lg sm:text-2xl text-gray-700 dark:text-gray-200 font-semibold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Fetching your furry soulmate...
      </motion.p>
    </div>
  );
} 