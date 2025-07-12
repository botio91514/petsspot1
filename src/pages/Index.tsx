import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Star, Sparkles, PawPrint, Dog, Cat, ShoppingBag, Users, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { HeroSection } from "@/components/HeroSection";
import { AdoptPetSection } from "@/components/AdoptPetSection";
import { AccessoriesSection } from "@/components/AccessoriesSection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { WhyAdoptSection } from "@/components/WhyAdoptSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";
import { FloatingPaws } from "@/components/FloatingPaws";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black relative overflow-x-hidden">
      <CustomCursor mousePosition={mousePosition} />
      <FloatingPaws />
      
      {/* Background particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-300/30 dark:bg-purple-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              y: [null, -100, null],
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <Navbar />
      
      <main>
        <HeroSection />
        <AdoptPetSection />
        <AccessoriesSection />
        <SuccessStoriesSection />
        <WhyAdoptSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Global floating elements */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ThemeToggle />
      </motion.div>
    </div>
  );
};

export default Index;
