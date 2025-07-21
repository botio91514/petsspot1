import React from "react";

export interface PetInfo {
  name: string;
  age: string;
  breed: string;
  description: string;
  image: string;
}

interface PetListProps {
  pets: PetInfo[];
  category: string;
}

const PetList: React.FC<PetListProps> = ({ pets, category }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
        {category} Available for Adoption
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {pets.map((pet) => (
          <div key={pet.name} className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-6 flex flex-col items-center border-2 border-pink-100 dark:border-purple-400">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-pink-200 dark:border-purple-400 mb-4 bg-white"
            />
            <div className="text-xl font-bold mb-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">{pet.name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">{pet.breed} • {pet.age}</div>
            <div className="text-gray-700 dark:text-gray-200 text-center mb-2">{pet.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList; 