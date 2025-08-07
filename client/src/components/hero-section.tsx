import { motion } from "framer-motion";
import { Users, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToMeetup = () => {
    const element = document.getElementById('meetups');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/10 via-golden-yellow/10 to-warm-teal/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl font-bold text-soft-charcoal mb-6 leading-tight">
              Your Dreams Are{" "}
              <span className="text-warm-orange font-extrabold">Unlimited</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              You don't need to be intelligent or stupid, just simply be <strong>YOU</strong>. 
              Let's explore new possibilities together over चाय <span className="text-sm">(chai)</span> और coffee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToMeetup}
                className="gradient-warm text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Users className="mr-2" size={20} />
                Join Our गप-शप <span className="text-sm">(chitchat)</span>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-warm-orange text-warm-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-warm-orange hover:text-white transition-colors"
              >
                <Play className="mr-2" size={20} />
                Our Story
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Diverse group of people having coffee and meaningful conversations" 
              className="rounded-3xl shadow-2xl w-full h-auto" 
            />
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-sage-green rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-soft-charcoal">500+ Community Members</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-4 -right-4 gradient-sunshine p-4 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="font-bold text-white text-xl">50+</div>
                <div className="text-xs text-white">Weekly Meetups</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-warm-orange" size={32} />
      </motion.div>
    </section>
  );
}
