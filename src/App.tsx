import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PetLoader from "./components/PetLoader";
import OurPets from "./pages/OurPets";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Rabbits from "./pages/Rabbits";
import Squirrels from "./pages/Squirrels";
import Turtles from "./pages/Turtles";
import Parrots from "./pages/Parrots";
import Shop from "./pages/Shop";
import ShopFood from "./pages/ShopFood";
import ShopTreats from "./pages/ShopTreats";
import ShopHealth from "./pages/ShopHealth";
import ShopToys from "./pages/ShopToys";
import ShopGrooming from "./pages/ShopGrooming";
import ShopClothing from "./pages/ShopClothing";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PetLoader />;
  }

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-pets" element={<OurPets />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/rabbits" element={<Rabbits />} />
          <Route path="/squirrels" element={<Squirrels />} />
          <Route path="/turtles" element={<Turtles />} />
          <Route path="/parrots" element={<Parrots />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/food" element={<ShopFood />} />
          <Route path="/shop/treats" element={<ShopTreats />} />
          <Route path="/shop/health" element={<ShopHealth />} />
          <Route path="/shop/toys" element={<ShopToys />} />
          <Route path="/shop/grooming" element={<ShopGrooming />} />
          <Route path="/shop/clothing" element={<ShopClothing />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
};

export default App;
