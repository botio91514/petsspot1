import { motion } from "framer-motion";
import { Heart, Filter, Search, MapPin, Calendar, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  },
  // Dummy pets
  {
    id: 5,
    name: "Milo",
    type: "Dog",
    breed: "Beagle",
    age: "2 years",
    size: "Medium",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop",
    personality: ["Curious", "Active", "Loyal"],
    description: "Milo is a curious beagle who loves to sniff and explore new places."
  },
  {
    id: 6,
    name: "Daisy",
    type: "Cat",
    breed: "Siamese",
    age: "3 years",
    size: "Small",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1518715308788-3005759c61d3?w=400&h=400&fit=crop",
    personality: ["Vocal", "Affectionate", "Playful"],
    description: "Daisy is a talkative Siamese who loves attention and playtime."
  },
  {
    id: 7,
    name: "Rocky",
    type: "Dog",
    breed: "Boxer",
    age: "5 years",
    size: "Large",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1605641781021-7c4a86d10af6?w=400&h=400&fit=crop",
    personality: ["Protective", "Energetic", "Friendly"],
    description: "Rocky is a strong and friendly boxer who loves to play fetch."
  },
  {
    id: 8,
    name: "Coco",
    type: "Cat",
    breed: "Bengal",
    age: "2 years",
    size: "Medium",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
    personality: ["Adventurous", "Smart", "Active"],
    description: "Coco is an adventurous Bengal cat who loves to climb and explore."
  }
];

export const AdoptPetSection = () => {
  const [hoveredPet, setHoveredPet] = useState<number | null>(null);
  const [likedPets, setLikedPets] = useState<Set<number>>(new Set());
  const navigate = useNavigate();

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
    <section id="adopt" className="py-12 sm:py-20 bg-white/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Meet Our Pets
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
            They’re not just pets — they’re family waiting to happen . 
            Every pet deserves a loving home, and every home deserves the perfect pet.
          </p>
        </motion.div>
        {/* Pet Cards Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full pb-8"
        >
          {pets.map((pet, idx) => (
            <SwiperSlide key={pet.id} className="flex justify-center h-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 * idx }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-pink-200/60 dark:hover:shadow-purple-900/60 w-full max-w-xs mx-auto"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4 flex items-center justify-center">
                  <img src={pet.image} alt={pet.name} className="w-full h-full object-cover rounded-2xl border-2 border-pink-100 dark:border-purple-900 bg-white/80 shadow" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1 text-center">{pet.name}</h3>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mb-2 text-center">{pet.breed} • {pet.age} • {pet.size}</div>
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {pet.personality.map((trait) => (
                    <span key={trait} className="px-2 py-1 rounded-full bg-pink-100 dark:bg-purple-900 text-pink-600 dark:text-pink-300 text-xs font-semibold">{trait}</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center mb-2">{pet.description}</p>
                <Button
                  className="w-full mt-auto px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-base sm:text-lg shadow hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Inquire Now
                </Button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
