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
import { AboutUsSection } from "@/components/AboutUsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";
import { FloatingPaws } from "@/components/FloatingPaws";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black relative overflow-x-hidden w-full">
      <CustomCursor mousePosition={mousePosition} className="hidden sm:block" />
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
      
      <main className="w-full px-2 sm:px-4">
        <HeroSection />
        <AdoptPetSection />
        <AccessoriesSection />
        <SuccessStoriesSection />
        <AboutUsSection />
        <ContactSection />
      </main>

      {/* Global floating elements */}
    </div>
  );
};

export default Index;
