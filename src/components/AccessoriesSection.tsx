
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Star, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";

const accessories = [
  {
    id: 1,
    name: "Smart Pet Bowl",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
    category: "Feeding",
    features: ["AI Portion Control", "Health Monitoring", "App Connected"],
    colors: ["Pink", "Blue", "White"]
  },
  {
    id: 2,
    name: "Cozy Pet Bed",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
    category: "Comfort",
    features: ["Memory Foam", "Washable Cover", "Temperature Control"],
    colors: ["Gray", "Beige", "Navy"]
  },
  {
    id: 3,
    name: "Interactive Toy Set",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1605641781021-7c4a86d10af6?w=400&h=400&fit=crop",
    category: "Play",
    features: ["Motion Sensor", "Sound Effects", "Rechargeable"],
    colors: ["Rainbow", "Blue", "Red"]
  },
  {
    id: 4,
    name: "GPS Collar",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop",
    category: "Safety",
    features: ["Real-time Tracking", "Health Monitoring", "Waterproof"],
    colors: ["Black", "Pink", "Blue"]
  }
];

export const AccessoriesSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  // Removed cartItems and quantities state

  // Removed addToCart and updateQuantity functions

  return (
    <section id="shop" className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Pet Accessories
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
            Premium accessories designed with love and technology. 
            Smart solutions for modern pet parents who want the best for their companions.
          </p>
        </motion.div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {accessories.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="cursor-hover"
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-2 border-transparent hover:border-purple-300 dark:hover:border-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative group">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Discount badge */}
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                  {/* Wishlist button */}
                  <motion.button
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-lg cursor-hover opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
                  </motion.button>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-pink-900 dark:text-pink-300 text-xs sm:text-sm">
                      {product.category}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg sm:text-2xl font-bold text-purple-600 dark:text-pink-400">
                      ${product.price}
                    </span>
                    <span className="text-sm sm:text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Colors:</span>
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className={`w-4 h-4 rounded-full border-2 border-gray-300 cursor-hover ${
                          color === 'Pink' ? 'bg-pink-400' :
                          color === 'Blue' ? 'bg-blue-400' :
                          color === 'White' ? 'bg-white' :
                          color === 'Gray' ? 'bg-gray-400' :
                          color === 'Beige' ? 'bg-yellow-200' :
                          color === 'Navy' ? 'bg-blue-800' :
                          color === 'Rainbow' ? 'bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400' :
                          color === 'Black' ? 'bg-black' :
                          color === 'Red' ? 'bg-red-400' : 'bg-gray-400'
                        }`}
                        title={color}
                      />
                    ))}
                  </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                      className="w-full cursor-hover bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-base sm:text-lg font-semibold rounded-full py-3 sm:py-4"
                      >
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Shop Now
                      </Button>
                    </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button
            size="lg"
            variant="outline"
            className="cursor-hover border-2 border-purple-300 dark:border-pink-400 text-purple-600 dark:text-pink-300 hover:bg-purple-50 dark:hover:bg-pink-900/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
