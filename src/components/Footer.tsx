import React from "react";
import { Heart, PawPrint } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-purple-900 dark:via-blue-900 dark:to-black border-t border-pink-200 dark:border-purple-400 py-6 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <PawPrint className="w-6 h-6 text-pink-500" />
          <span className="font-bold text-lg bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Pets Spot</span>
        </div>
        <div className="text-gray-600 dark:text-gray-300 text-sm text-center md:text-right">
          <span className="inline-flex items-center gap-1">Made with <Heart className="inline w-4 h-4 text-pink-400" /> by Pet Lovers</span>
          <span className="mx-2">|</span>
          <span>&copy; {new Date().getFullYear()} Pets Spot. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 