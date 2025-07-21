import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingPaws } from "@/components/FloatingPaws";
import PetList, { PetInfo } from "@/components/PetList";

const parrots: PetInfo[] = [
  {
    name: "Polly",
    age: "2 years",
    breed: "African Grey",
    description: "Very intelligent and loves to mimic sounds.",
    image: "/placeholder.svg",
  },
  {
    name: "Kiwi",
    age: "1 year",
    breed: "Budgerigar",
    description: "Small, colorful, and very social.",
    image: "/placeholder.svg",
  },
  {
    name: "Sunny",
    age: "4 years",
    breed: "Sun Conure",
    description: "Bright and cheerful, loves attention.",
    image: "/placeholder.svg",
  },
];

const Parrots: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black relative overflow-x-hidden">
      <Navbar />
      <FloatingPaws />
      <main className="flex flex-col items-center justify-center py-24">
        <PetList pets={parrots} category="Parrots" />
      </main>
      <Footer />
    </div>
  );
};

export default Parrots; 