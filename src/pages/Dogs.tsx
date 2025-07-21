import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingPaws } from "@/components/FloatingPaws";
import PetList, { PetInfo } from "@/components/PetList";

const dogs: PetInfo[] = [
  {
    name: "Buddy",
    age: "2 years",
    breed: "Golden Retriever",
    description: "Friendly, energetic, and loves to play fetch!",
    image: "/hdog.png",
  },
  {
    name: "Luna",
    age: "1 year",
    breed: "Labrador",
    description: "Gentle and affectionate, great with kids.",
    image: "/hdog.png",
  },
  {
    name: "Max",
    age: "3 years",
    breed: "Beagle",
    description: "Curious and loves to explore the outdoors.",
    image: "/hdog.png",
  },
];

const Dogs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black relative overflow-x-hidden">
      <Navbar />
      <FloatingPaws />
      <main className="flex flex-col items-center justify-center py-24">
        <PetList pets={dogs} category="Dogs" />
      </main>
      <Footer />
    </div>
  );
};

export default Dogs; 