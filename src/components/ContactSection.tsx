
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Heart, Send, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      type: "general"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-PETS",
      description: "Available 24/7 for emergencies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@petsspot.com",
      description: "We'll respond within 2 hours",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Pet Love Street, SF, CA 94102",
      description: "Open daily 9AM - 8PM",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 sm:w-4 sm:h-4 bg-pink-300/20 dark:bg-purple-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
            Have questions about adoption, need pet care advice, or want to volunteer? 
            We're here to help make every pet's journey to a loving home possible.
          </p>
        </motion.div>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16 w-full">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="cursor-hover"
              >
                <Card className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-transparent hover:border-purple-300 dark:hover:border-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 sm:p-8">
                    <motion.div
                      className={`inline-flex p-4 rounded-full bg-gradient-to-r ${contact.color} mb-6`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <contact.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {contact.title}
                    </h3>
                    <div className="text-base sm:text-lg font-semibold text-purple-600 dark:text-pink-400 mb-2">
                      {contact.info}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {contact.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* Contact Form - centered */}
          <form
            className="w-full max-w-2xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-lg p-4 sm:p-8 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
                className="w-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
              <Button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-base sm:text-lg shadow hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                We'll get back to you soon!
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
