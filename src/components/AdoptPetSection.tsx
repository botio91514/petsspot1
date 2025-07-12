import { motion } from "framer-motion";
import { Heart, Filter, Search, MapPin, Calendar, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const pets = [
  {
    id: 1,
    name: "Luna",
    type: "Cat",
    breed: "Persian",
    age: "2 years",
    size: "Medium",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
    personality: ["Playful", "Gentle", "Social"],
    description: "Luna is a beautiful Persian cat who loves cuddles and playing with feather toys."
  },
  {
    id: 2,
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    age: "3 years",
    size: "Large",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    personality: ["Friendly", "Energetic", "Loyal"],
    description: "Max is an energetic Golden Retriever who loves long walks and playing fetch."
  },
  {
    id: 3,
    name: "Bella",
    type: "Cat",
    breed: "Maine Coon",
    age: "1 year",
    size: "Large",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    personality: ["Calm", "Affectionate", "Independent"],
    description: "Bella is a majestic Maine Coon with a gentle personality and stunning fur."
  },
  {
    id: 4,
    name: "Charlie",
    type: "Dog",
    breed: "Labrador",
    age: "4 years",
    size: "Large",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop",
    personality: ["Smart", "Gentle", "Family-friendly"],
    description: "Charlie is a wonderful family dog who's great with kids and very well-trained."
  }
];

export const AdoptPetSection = () => {
  const [hoveredPet, setHoveredPet] = useState<number | null>(null);
  const [likedPets, setLikedPets] = useState<Set<number>>(new Set());

  const toggleLike = (petId: number) => {
    const newLikedPets = new Set(likedPets);
    if (newLikedPets.has(petId)) {
      newLikedPets.delete(petId);
    } else {
      newLikedPets.add(petId);
    }
    setLikedPets(newLikedPets);
  };

  return (
    <section id="adopt" className="py-20 bg-white/50 dark:bg-gray-900/50">
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
              Adopt a Pet
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find your perfect companion with our AI-powered matching system. 
            Every pet deserves a loving home, and every home deserves the perfect pet.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-12 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name or breed..."
                className="pl-10 cursor-hover"
              />
            </div>
            <Select>
              <SelectTrigger className="cursor-hover">
                <SelectValue placeholder="Pet Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="dog">Dogs</SelectItem>
                <SelectItem value="cat">Cats</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="cursor-hover">
                <SelectValue placeholder="Age" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="puppy">Puppy/Kitten</SelectItem>
                <SelectItem value="young">Young</SelectItem>
                <SelectItem value="adult">Adult</SelectItem>
                <SelectItem value="senior">Senior</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="cursor-hover">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sizes</SelectItem>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Pet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pets.map((pet, index) => (
            <motion.div
              key={pet.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredPet(pet.id)}
              onHoverEnd={() => setHoveredPet(null)}
              className="cursor-hover"
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-2 border-transparent hover:border-pink-300 dark:hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative">
                  <motion.img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating paws on hover */}
                  {hoveredPet === pet.id && (
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-white/70"
                          initial={{ 
                            x: Math.random() * 200,
                            y: Math.random() * 200,
                            opacity: 0,
                            scale: 0
                          }}
                          animate={{
                            y: -50,
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity
                          }}
                        >
                          <PawPrint size={16} />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Like button */}
                  <motion.button
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-lg cursor-hover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleLike(pet.id)}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedPets.has(pet.id)
                          ? "text-pink-500 fill-pink-500"
                          : "text-gray-500"
                      }`}
                    />
                  </motion.button>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {pet.name}
                    </h3>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700 dark:bg-purple-900 dark:text-purple-300">
                      {pet.type}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{pet.age}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{pet.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pet.personality.map((trait) => (
                      <Badge
                        key={trait}
                        variant="outline"
                        className="border-pink-300 text-pink-600 dark:border-purple-400 dark:text-purple-300"
                      >
                        {trait}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {pet.description}
                  </p>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full cursor-hover bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                      <Heart className="w-4 h-4 mr-2" />
                      Meet {pet.name}
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
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="cursor-hover border-2 border-pink-300 dark:border-purple-400 text-pink-600 dark:text-purple-300 hover:bg-pink-50 dark:hover:bg-purple-900/20 px-8 py-6 text-lg font-semibold rounded-full"
          >
            View All Pets
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
