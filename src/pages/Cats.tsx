import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingPaws } from "@/components/FloatingPaws";
import PetList, { PetInfo } from "@/components/PetList";

const cats: PetInfo[] = [
  {
    name: "Mittens",
    age: "3 years",
    breed: "Siamese",
    description: "Playful and loves to cuddle in warm spots.",
    image: "/hcat.png",
  },
  {
    name: "Shadow",
    age: "2 years",
    breed: "Maine Coon",
    description: "Gentle giant, very affectionate and fluffy.",
    image: "/hcat.png",
  },
  {
    name: "Lily",
    age: "1 year",
    breed: "Persian",
    description: "Calm and elegant, enjoys quiet environments.",
    image: "/hcat.png",
  },
];

const Cats: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black relative overflow-x-hidden">
      <Navbar />
      <FloatingPaws />
      <main className="flex flex-col items-center justify-center py-24">
        <PetList pets={cats} category="Cats" />
      </main>
      <Footer />
    </div>
  );
};

export default Cats; 