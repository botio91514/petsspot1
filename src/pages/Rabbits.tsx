import React from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingPaws } from "@/components/FloatingPaws";
import PetList, { PetInfo } from "@/components/PetList";

const rabbits: PetInfo[] = [
  {
    name: "Thumper",
    age: "1 year",
    breed: "Mini Lop",
    description: "Loves to hop around and enjoys fresh veggies.",
    image: "/hrabbit.png",
  },
  {
    name: "Snowball",
    age: "2 years",
    breed: "Dutch",
    description: "Very gentle and enjoys being petted.",
    image: "/hrabbit.png",
  },
  {
    name: "Cocoa",
    age: "3 years",
    breed: "Lionhead",
    description: "Fluffy and playful, loves to dig.",
    image: "/hrabbit.png",
  },
];

const Rabbits: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-900 dark:via-blue-900 dark:to-black relative overflow-x-hidden">
      <Navbar />
      <FloatingPaws />
      <main className="flex flex-col items-center justify-center py-24">
        <PetList pets={rabbits} category="Rabbits" />
      </main>
      <Footer />
    </div>
  );
};

export default Rabbits; 