import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Send, Clock, Mail, Coffee, Video, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertMeetupSignupSchema } from "@shared/schema";
import { z } from "zod";

export default function MeetupSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: ""
  });
  const [quickEmail, setQuickEmail] = useState("");

  const signupMutation = useMutation({
    mutationFn: async (data: z.infer<typeof insertMeetupSignupSchema>) => {
      const response = await apiRequest("POST", "/api/meetup-signup", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Welcome to BeyRozGaar! 🎉",
        description: "Thank you for joining our community. We'll send you meetup details soon.",
      });
      setFormData({ name: "", email: "", phone: "", experience: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Failed to process your signup. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = insertMeetupSignupSchema.parse(formData);
      signupMutation.mutate(validatedData);
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

  const quickSignupMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/meetup-signup", {
        name: "Quick Signup",
        email: email,
        phone: "",
        experience: "Quick signup for meetup"
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "You're registered! 🎉",
        description: "We'll send you the Zoom link at the provided email address.",
      });
      setQuickEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Registration failed",
        description: error.message || "Please try again or use the full form below.",
        variant: "destructive",
      });
    }
  });

  const handleQuickSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail) {
      toast({
        title: "Email required",
        description: "Please enter your email address to receive the Zoom link.",
        variant: "destructive",
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(quickEmail)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    quickSignupMutation.mutate(quickEmail);
  };

  return (
    <section id="meetups" className="py-20 bg-gradient-to-br from-warm-gray to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-inter text-3xl sm:text-4xl font-bold text-soft-charcoal mb-6">
              Join Our चाय Coffee Meetups
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every week, we gather for meaningful conversations over warm beverages. 
              No agenda, no pressure—just authentic connections and mutual support.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Traditional chai tea cups steaming with warmth" 
                className="rounded-xl shadow-md w-full h-32 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Coffee meetup with friends sharing stories" 
                className="rounded-xl shadow-md w-full h-32 object-cover" 
              />
            </div>
            
            <div className="bg-gradient-to-br from-white to-warm-orange/5 p-8 rounded-3xl shadow-xl border border-warm-orange/20 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-warm rounded-full flex items-center justify-center shadow-lg">
                    <Coffee className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-inter text-xl font-bold text-soft-charcoal">Next Meetup</h4>
                    <p className="text-sm text-warm-orange font-medium">Join our community गप-शप</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-sage-green to-warm-teal text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  <Star className="inline mr-1" size={14} />
                  This Thursday
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center bg-warm-orange/5 p-3 rounded-xl">
                  <div className="w-8 h-8 bg-warm-orange/20 rounded-full flex items-center justify-center mr-3">
                    <Calendar className="text-warm-orange" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-soft-charcoal">Thursday, August 21st</p>
                    <p className="text-sm text-gray-600">3:00 PM - 4:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-warm-teal/5 p-3 rounded-xl">
                  <div className="w-8 h-8 bg-warm-teal/20 rounded-full flex items-center justify-center mr-3">
                    <Video className="text-warm-teal" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-soft-charcoal">Online via Zoom</p>
                    <p className="text-sm text-gray-600">Link shared after registration</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-golden-yellow/5 p-3 rounded-xl">
                  <div className="w-8 h-8 bg-golden-yellow/20 rounded-full flex items-center justify-center mr-3">
                    <Coffee className="text-golden-yellow" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-soft-charcoal">Bring Your Favorite Beverage</p>
                    <p className="text-sm text-gray-600">Coffee, Tea, or anything that makes you comfortable</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-warm-orange/20">
                <h5 className="font-semibold text-soft-charcoal mb-3 flex items-center">
                  <Mail className="mr-2 text-warm-orange" size={18} />
                  Quick Registration
                </h5>
                <form onSubmit={handleQuickSignup} className="flex gap-3">
                  <Input
                    type="email"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="Enter your email for Zoom invite"
                    className="flex-1 px-4 py-3 border-2 border-warm-orange/20 rounded-xl focus:ring-2 focus:ring-warm-orange focus:border-warm-orange transition-all duration-200 bg-white/90"
                  />
                  <Button
                    type="submit"
                    disabled={quickSignupMutation.isPending}
                    className="gradient-warm text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50"
                  >
                    {quickSignupMutation.isPending ? (
                      <Clock className="animate-spin" size={18} />
                    ) : (
                      <>
                        <Mail className="mr-2" size={18} />
                        Join Now
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-inter text-2xl font-bold text-soft-charcoal mb-6 text-center">
              Join Our Community
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">Your Name</Label>
                <Input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-warm-orange focus:border-warm-orange transition-colors" 
                  placeholder="What should we call you?" 
                  required
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">Email Address (for Zoom invite)</Label>
                <Input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-warm-orange focus:border-warm-orange transition-colors" 
                  placeholder="your@email.com" 
                  required
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</Label>
                <Input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-warm-orange focus:border-warm-orange transition-colors" 
                  placeholder="+1 (XXX) XXX-XXXX" 
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">Tell us about yourself</Label>
                <Textarea 
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-warm-orange focus:border-warm-orange transition-colors" 
                  placeholder="What brings you here? What are you looking for?" 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={signupMutation.isPending}
                className="w-full gradient-warm text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {signupMutation.isPending ? (
                  <>
                    <Clock className="mr-2 animate-spin" size={20} />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Join Our Community
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              We respect your privacy. Your information is safe with us.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
