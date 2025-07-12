import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Star, Quote, PawPrint } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef } from "react";

const stories = [
  {
    id: 1,
    petName: "Buddy",
    ownerName: "Sarah Johnson",
    ownerImage: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop",
    petImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&h=150&fit=crop",
    story: "Buddy was a shy rescue who barely ate when I first brought him home. Now he's the most playful, loving companion I could ask for. Pets Spot made the perfect match!",
    adoptionDate: "6 months ago",
    rating: 5,
    location: "San Francisco, CA"
  },
  {
    id: 2,
    petName: "Whiskers",
    ownerName: "Mike Chen",
    ownerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    petImage: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=150&fit=crop",
    story: "I never thought I was a cat person until I met Whiskers through Pets Spot's AI matching. She's been my perfect work-from-home companion for over a year now!",
    adoptionDate: "1 year ago",
    rating: 5,
    location: "New York, NY"
  },
  {
    id: 3,
    petName: "Luna",
    ownerName: "Emily Davis",
    ownerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    petImage: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=200&h=150&fit=crop",
    story: "Luna has transformed our family completely. My kids have learned so much about responsibility and love. The adoption process was seamless and supportive.",
    adoptionDate: "8 months ago",
    rating: 5,
    location: "Los Angeles, CA"
  }
];

export const SuccessStoriesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="stories" ref={containerRef} className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real families, real love, real transformations. 
            See how our AI-powered matching has created thousands of perfect bonds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ y: index % 2 === 0 ? y : undefined }}
            >
              <Card className="overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 border-2 border-pink-200 dark:border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 cursor-hover">
                <CardContent className="p-0">
                  {/* Before/After Images */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="flex">
                      <div className="w-1/2 relative">
                        <img
                          src={story.beforeImage}
                          alt={`${story.petName} before`}
                          className="w-full h-48 object-cover filter grayscale"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white font-semibold bg-black/60 px-3 py-1 rounded-full text-sm">
                            Before
                          </span>
                        </div>
                      </div>
                      <div className="w-1/2 relative">
                        <img
                          src={story.petImage}
                          alt={`${story.petName} after`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                          <span className="text-white font-semibold bg-pink-500/80 px-3 py-1 rounded-full text-sm">
                            After
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating hearts animation */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Heart className="w-8 h-8 text-pink-500 fill-pink-500 drop-shadow-lg" />
                    </motion.div>
                  </div>

                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {Array.from({ length: story.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
                        {story.adoptionDate}
                      </span>
                    </div>

                    {/* Story */}
                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -left-2 w-6 h-6 text-pink-300 dark:text-purple-400" />
                      <p className="text-gray-700 dark:text-gray-300 italic pl-4">
                        "{story.story}"
                      </p>
                    </div>

                    {/* Owner info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={story.ownerImage} />
                          <AvatarFallback>{story.ownerName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-white">
                            {story.ownerName}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {story.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-pink-600 dark:text-pink-400">
                          {story.petName}
                        </div>
                        <motion.div
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                          className="text-pink-500"
                        >
                          <PawPrint className="w-4 h-4 inline" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating paw prints animation */}
        <div className="relative mt-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-300/30 dark:text-purple-400/30"
              initial={{
                x: Math.random() * 1200,
                y: 100,
                opacity: 0
              }}
              animate={{
                x: Math.random() * 1200,
                y: -50,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <PawPrint size={20} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
