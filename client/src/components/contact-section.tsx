import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Instagram, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: z.infer<typeof insertContactMessageSchema>) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent! 📬",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = insertContactMessageSchema.parse(formData);
      contactMutation.mutate(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Please check your form",
          description: firstError.message,
          variant: "destructive",
        });
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@beyrozgaar.com",
      gradient: "gradient-warm"
    },
    {
      icon: Phone,
      title: "Call Us", 
      detail: "+1-310-869-5391",
      gradient: "gradient-teal"
    },
    {
      icon: MapPin,
      title: "Find Us",
      detail: "Community Centers Across Globe",
      gradient: "gradient-sunshine"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageSquare, href: "#", label: "WhatsApp" }
  ];

  return (
    <section id="contact" className="py-20 bg-soft-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-inter text-3xl sm:text-4xl font-bold mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Have questions? Want to know more about our community? 
              Or simply want to share your story? We're here to listen.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 ${info.gradient} rounded-full flex items-center justify-center mr-4`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-gray-300">{info.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center hover:bg-deep-coral transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-white" size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-inter text-2xl font-bold mb-6 text-center">
              Share Your Story
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-warm-orange focus:border-warm-orange transition-colors" 
                  placeholder="Your Name" 
                  required
                />
              </div>
              
              <div>
                <Input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-warm-orange focus:border-warm-orange transition-colors" 
                  placeholder="Your Email" 
                  required
                />
              </div>
              
              <div>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4} 
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-warm-orange focus:border-warm-orange transition-colors" 
                  placeholder="Your Message" 
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full gradient-warm text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {contactMutation.isPending ? (
                  <>
                    <Clock className="mr-2 animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
