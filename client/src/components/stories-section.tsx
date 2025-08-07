import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StoriesSection() {
  const testimonials = [
    {
      name: "Priya S.",
      location: "New York",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      story: "After losing my job, I felt lost. BeyRozGaar helped me realize that this was just the beginning of something better. The chai sessions gave me hope and real friends.",
      gradient: "from-warm-orange/5 to-deep-coral/5"
    },
    {
      name: "Davon M.",
      location: "Missouri", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      story: "The community taught me that being unemployed doesn't mean being worthless. I'm now pursuing my passion for teaching, something I never thought possible.",
      gradient: "from-warm-teal/5 to-sage-green/5"
    },
    {
      name: "Anjali K.",
      location: "Portland",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      story: "The गप-शप sessions over coffee became my weekly therapy. I found my voice and confidence here. Now I'm starting my own small business!",
      gradient: "from-golden-yellow/5 to-sunshine/5"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-inter text-3xl sm:text-4xl font-bold text-soft-charcoal mb-6">
            Real Stories, Real People
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every person has a unique journey. Here are some stories from our community members 
            who found their next chapter through BeyRozGaar.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={`bg-gradient-to-br ${testimonial.gradient} p-6 rounded-2xl hover:shadow-lg transition-shadow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}, community member sharing their story`} 
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-soft-charcoal">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.story}"
              </p>
              <div className="text-golden-yellow flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="gradient-warm text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <Plus className="mr-2" size={20} />
            Share Your Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
