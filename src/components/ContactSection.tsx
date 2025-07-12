
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
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-pink-300/20 dark:bg-purple-400/20 rounded-full"
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about adoption, need pet care advice, or want to volunteer? 
            We're here to help make every pet's journey to a loving home possible.
          </p>
        </motion.div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                <CardContent className="p-8">
                  <motion.div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${contact.color} mb-6`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {contact.title}
                  </h3>
                  
                  <div className="text-lg font-semibold text-purple-600 dark:text-pink-400 mb-2">
                    {contact.info}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-purple-500" />
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                        Your Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="pl-10 cursor-hover"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                        Email Address *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="pl-10 cursor-hover"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10 cursor-hover"
                          placeholder="Enter your phone"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="type" className="text-gray-700 dark:text-gray-300">
                        Inquiry Type
                      </Label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md cursor-hover"
                      >
                        <option value="general">General Question</option>
                        <option value="adoption">Pet Adoption</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="donation">Donations</option>
                        <option value="support">Pet Care Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="cursor-hover"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="cursor-hover resize-none"
                      placeholder="Tell us how we can help you and your furry friend..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-hover bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-6 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Heart className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Volunteer & Donate Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Volunteer Card */}
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-xl">
              <CardContent className="p-8">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="inline-flex p-3 bg-white/20 rounded-full mb-4"
                >
                  <Heart className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Become a Volunteer</h3>
                <p className="mb-6 opacity-90">
                  Join our amazing community of volunteers and help us save more lives. 
                  From dog walking to event organization, there's a perfect role for everyone.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    <span>Flexible scheduling</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    <span>Full training provided</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    <span>Make a real difference</span>
                  </div>
                </div>
                <Button
                  className="cursor-hover bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  Start Volunteering
                </Button>
              </CardContent>
            </Card>

            {/* Donate Card */}
            <Card className="bg-gradient-to-br from-pink-500 to-red-500 text-white border-0 shadow-xl">
              <CardContent className="p-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex p-3 bg-white/20 rounded-full mb-4"
                >
                  <Heart className="w-8 h-8 fill-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
                <p className="mb-6 opacity-90">
                  Your generosity directly impacts the lives of pets in need. 
                  Every donation helps provide food, medical care, and shelter.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {["$25", "$50", "$100"].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="cursor-hover bg-white/20 border-white/30 hover:bg-white/30 text-white"
                    >
                      {amount}
                    </Button>
                  ))}
                </div>
                <Button
                  className="cursor-hover bg-white text-pink-600 hover:bg-gray-100 font-semibold w-full"
                >
                  Donate Now
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-flex p-3 bg-white/20 rounded-full mb-4"
                >
                  <Phone className="w-6 h-6" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2">Pet Emergency?</h3>
                <p className="text-sm opacity-90 mb-4">
                  24/7 emergency hotline for urgent pet situations
                </p>
                <div className="text-xl font-bold">
                  (555) 911-PETS
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
