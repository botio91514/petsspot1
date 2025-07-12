
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export const FloatingPaws = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300/20 dark:text-purple-400/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            rotate: Math.random() * 360
          }}
          animate={{
            y: -100,
            rotate: 360,
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          <PawPrint size={24 + Math.random() * 16} />
        </motion.div>
      ))}
    </div>
  );
};
