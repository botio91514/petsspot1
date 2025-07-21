import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
  // Add more image URLs here as needed
];

export const SuccessStoriesSection = () => {
  // Duplicate images for seamless looping
  const marqueeImages = [...images, ...images];
  const marqueeWidth = images.length * 320; // 300px image + 20px gap

  return (
    <section id="stories" className="py-12 sm:py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Our Happy Customers
        </h2>
        <div className="relative w-full overflow-x-hidden">
          <motion.div
            className="flex gap-3 sm:gap-5"
            style={{ width: marqueeWidth * 2 }}
            animate={{ x: [0, -marqueeWidth] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {marqueeImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Happy Pet"
                className="rounded-2xl shadow-lg border-4 border-pink-200 dark:border-purple-400 bg-white w-48 h-40 sm:w-[300px] sm:h-72 object-cover"
                draggable={false}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
