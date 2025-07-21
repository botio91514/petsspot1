import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingPaws } from "@/components/FloatingPaws";
import PetList, { PetInfo } from "@/components/PetList";

const squirrels: PetInfo[] = [
  {
    name: "Chippy",
    age: "6 months",
    breed: "Eastern Gray",
    description: "Energetic and loves to climb trees.",
    image: "/placeholder.svg",
  },
  {
    name: "Nutty",
    age: "1 year",
    breed: "Red Squirrel",
    description: "Very playful and loves to collect acorns.",
    image: "/placeholder.svg",
  },
  {
    name: "Sandy",
    age: "8 months",
    breed: "Flying Squirrel",
    description: "Glides from tree to tree, very curious.",
    image: "/placeholder.svg",
  },
];

const Squirrels: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black relative overflow-x-hidden">
      <Navbar />
      <FloatingPaws />
      <main className="flex flex-col items-center justify-center py-24">
        <PetList pets={squirrels} category="Squirrels" />
      </main>
      <Footer />
    </div>
  );
};

export default Squirrels; 