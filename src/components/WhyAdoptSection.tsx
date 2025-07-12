
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Home, Shield, Users, Sparkles, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

const reasons = [
  {
    icon: Heart,
    title: "Save a Life",
    description: "Every adoption saves a life and makes room for another pet in need. You become a hero in their story.",
    color: "from-pink-500 to-red-500",
    delay: 0
  },
  {
    icon: Home,
    title: "Find True Companionship",
    description: "Adopted pets form incredibly strong bonds with their families. They know they've been saved and show endless gratitude.",
    color: "from-purple-500 to-blue-500",
    delay: 0.2
  },
  {
    icon: Shield,
    title: "Health & Wellness Support",
    description: "Our partner shelters provide complete health records, vaccinations, and ongoing support for your new family member.",
    color: "from-blue-500 to-cyan-500",
    delay: 0.4
  },
  {
    icon: Users,
    title: "Join a Community",
    description: "Connect with thousands of adoptive families, share experiences, and get support from our amazing community.",
    color: "from-green-500 to-teal-500",
    delay: 0.6
  }
];

export const WhyAdoptSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      id="why-adopt" 
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-pink-400/20 to-purple-400/20 dark:from-pink-600/30 dark:to-purple-600/30"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Why Adopt?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the incredible journey from rescue to forever home. 
            Every adoption story is a miracle waiting to happen.
          </p>
        </motion.div>

        {/* Journey visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative">
            {/* Journey line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full transform -translate-y-1/2" />
            
            {/* Journey steps */}
            <div className="flex justify-between items-center relative">
              {[
                { icon: "😢", label: "Lost & Alone", color: "bg-gray-400" },
                { icon: "🏠", label: "Safe at Shelter", color: "bg-yellow-400" },
                { icon: "❤️", label: "Matched with You", color: "bg-pink-500" },
                { icon: "🎉", label: "Forever Home", color: "bg-green-500" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="mt-3 text-center">
                    <div className="font-semibold text-gray-800 dark:text-white text-sm">
                      {step.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reason.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cursor-hover"
            >
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-transparent hover:border-purple-300 dark:hover:border-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-8">
                  <motion.div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${reason.color} mb-6`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Animated accent line */}
                  <motion.div
                    className={`mt-6 h-1 bg-gradient-to-r ${reason.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: reason.delay + 0.5 }}
                    viewport={{ once: true }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "3.2M", label: "Pets in Shelters", icon: Home },
            { number: "6.3M", label: "Pets Adopted Yearly", icon: Heart },
            { number: "90%", label: "Happy Families", icon: Star }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="inline-flex p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-4"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
