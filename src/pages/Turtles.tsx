import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingPaws } from "@/components/FloatingPaws";
import PetList, { PetInfo } from "@/components/PetList";

const turtles: PetInfo[] = [
  {
    name: "Shelly",
    age: "5 years",
    breed: "Red-Eared Slider",
    description: "Loves basking in the sun and swimming.",
    image: "/placeholder.svg",
  },
  {
    name: "Turbo",
    age: "3 years",
    breed: "Box Turtle",
    description: "Very curious and enjoys exploring.",
    image: "/placeholder.svg",
  },
  {
    name: "Pebbles",
    age: "7 years",
    breed: "Painted Turtle",
    description: "Calm and easygoing, loves leafy greens.",
    image: "/placeholder.svg",
  },
];

const Turtles: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black relative overflow-x-hidden">
      <Navbar />
      <FloatingPaws />
      <main className="flex flex-col items-center justify-center py-24">
        <PetList pets={turtles} category="Turtles" />
      </main>
      <Footer />
    </div>
  );
};

export default Turtles; 