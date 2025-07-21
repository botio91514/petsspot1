
import { motion } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Our Pets", to: "/our-pets" },
    { name: "Shop", to: "/shop" },
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-pink-200 dark:border-purple-400"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-1 justify-center items-center gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="flex items-center space-x-2 cursor-pointer cursor-hover focus:outline-none">
              <img
                src="/logo.jpg"
                alt="Pets Spot Logo"
                className="w-10 h-10 object-contain rounded-full shadow-md border-2 border-pink-200 bg-white"
                style={{ minWidth: 40, minHeight: 40 }}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Pets Spot
              </span>
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.to.startsWith("/") ? (
                <motion.div key={item.name} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -2 }}>
                  <Link
                    to={item.to}
                    className={`text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-hover ${location.pathname === item.to ? 'font-bold underline underline-offset-4 text-pink-500 dark:text-pink-400' : ''}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.to}
                  className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-hover"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              )
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden cursor-hover"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-pink-200 dark:border-purple-400"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              item.to.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`block text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-hover ${location.pathname === item.to ? 'font-bold underline underline-offset-4 text-pink-500 dark:text-pink-400' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.to}
                  className="block text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
