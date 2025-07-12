
import { motion } from "framer-motion";
import { Calendar, User, Heart, ArrowRight, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Preparing Your Home for a New Pet",
    excerpt: "Essential tips and checklists to ensure your home is safe and welcoming for your new furry family member.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
    author: "Dr. Sarah Mitchell",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=50&h=50&fit=crop",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Preparation",
    likes: 234,
    tags: ["Home Safety", "New Pet", "Checklist"]
  },
  {
    id: 2,
    title: "Understanding Pet Behavior: Signs of a Happy and Healthy Pet",
    excerpt: "Learn to read your pet's body language and behavior to ensure they're thriving in their new environment.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop",
    author: "Michael Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Behavior",
    likes: 189,
    tags: ["Pet Psychology", "Health", "Training"]
  },
  {
    id: 3,
    title: "Nutrition 101: Choosing the Right Food for Your Adopted Pet",
    excerpt: "A comprehensive guide to pet nutrition, including special considerations for rescue animals.",
    image: "https://images.unsplash.com/photo-1605641781021-7c4a86d10af6?w=600&h=400&fit=crop",
    author: "Emma Thompson",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Nutrition",
    likes: 156,
    tags: ["Diet", "Health", "Nutrition"]
  },
  {
    id: 4,
    title: "Creating Lasting Bonds: Activities to Strengthen Your Relationship",
    excerpt: "Fun and meaningful activities that help build trust and deepen the connection with your adopted pet.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop",
    author: "James Wilson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Bonding",
    likes: 203,
    tags: ["Activities", "Bonding", "Training"]
  }
];

export const BlogSection = () => {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const toggleLike = (postId: number) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10">
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
              Pet Care Blog
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert advice, heartwarming stories, and essential tips 
            to help you provide the best care for your beloved companion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="cursor-hover"
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-2 border-transparent hover:border-pink-300 dark:hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative group">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Category badge */}
                  <Badge className="absolute top-4 left-4 bg-pink-500 text-white">
                    {post.category}
                  </Badge>

                  {/* Like button */}
                  <motion.button
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-lg cursor-hover opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedPosts.has(post.id)
                          ? "text-pink-500 fill-pink-500"
                          : "text-gray-500"
                      }`}
                    />
                  </motion.button>

                  {/* Read overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button 
                        className="w-full cursor-hover bg-white text-gray-800 hover:bg-gray-100"
                        size="sm"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Meta information */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-pink-600 dark:text-pink-400">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-pink-200 text-pink-600 dark:border-purple-400 dark:text-purple-300 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white text-sm">
                          {post.author}
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 cursor-hover"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Pet Care Tips</h3>
              <p className="mb-6 opacity-90">
                Get the latest articles, expert advice, and heartwarming stories delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 cursor-hover"
                />
                <Button
                  className="cursor-hover bg-white text-pink-600 hover:bg-gray-100 px-6 py-3"
                >
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="cursor-hover border-2 border-pink-300 dark:border-purple-400 text-pink-600 dark:text-purple-300 hover:bg-pink-50 dark:hover:bg-purple-900/20 px-8 py-6 text-lg font-semibold rounded-full"
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
