
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, ArrowRight, Bone, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import ShinyText from './ShinyText';
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const navigate = useNavigate();

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-2 sm:px-4"
      style={{ y, opacity }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-pink-400/20 to-purple-400/20 dark:from-pink-600/30 dark:to-purple-600/30"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-0 sm:px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center items-center w-full max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 pt-20 sm:pt-24 pb-6 sm:pb-8"
        >

          {/* Headline and subheadline */}
          <h1 className="text-2xl sm:text-4xl md:text-7xl font-extrabold leading-tight tracking-tight mb-2 md:mb-4">
            <ShinyText text="Find Your Forever Friend" speed={3} className="block drop-shadow-lg" />
          </h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-2 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Find your perfect companion or shop top-quality essentials for every pet—all in one spot!
          </motion.p>

          {/* Pet images with colorful backgrounds */}
          <div className="flex flex-col md:flex-row justify-center items-end gap-4 sm:gap-6 md:gap-10 py-4 md:py-6">
            <div className="rounded-full bg-purple-200 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 flex items-center justify-center shadow-lg relative">
              <img src="hcat.png" alt="Cat" className="w-11/12 h-11/12 object-contain" />
            </div>
            <div className="rounded-full bg-blue-200 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 flex items-center justify-center shadow-lg relative">
              <img src="hdog.png" alt="Dog" className="w-11/12 h-11/12 object-contain" />
            </div>
            <div className="rounded-full bg-yellow-200 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 flex items-center justify-center shadow-lg relative">
              <img src="hrabbit.png" alt="Rabbit" className="w-11/12 h-11/12 object-contain" />
            </div>
          </div>

          {/* Call-to-action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2 md:mt-4 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto cursor-hover bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 sm:py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate('/our-pets')}
            >
              <Heart className="mr-2 h-5 w-5" />
              Find a Pet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto cursor-hover border-2 border-pink-300 dark:border-purple-400 text-pink-600 dark:text-purple-300 hover:bg-pink-50 dark:hover:bg-purple-900/20 px-8 py-4 sm:py-6 text-lg font-semibold rounded-full transition-all duration-300"
              onClick={() => navigate('/shop')}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Shop Essentials
            </Button>
          </motion.div>

          {/* Stats section */}
          <motion.div
            className="flex justify-center space-x-8 pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">10,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Adoptions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Partner Shelters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Pet Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.section>
  );
};
