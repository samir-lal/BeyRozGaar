import { motion } from 'framer-motion';
import { ArrowLeft, Users, Award, BookOpen, Globe, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { useEffect } from 'react';

export default function AboutFounder() {
  const [, setLocation] = useLocation();

  // SEO for About Founder page
  useEffect(() => {
    document.title = "About Sanjay Sahni - Product Expert & BeyRozGaar Founder";
    
    const existingDesc = document.querySelector('meta[name="description"]');
    if (existingDesc) {
      existingDesc.setAttribute('content', 'Learn about Sanjay Sahni, product expert with 15+ years experience launching $100M+ products. Founder of BeyRozGaar community platform helping unemployed individuals transform their careers.');
    }
  }, []);

  const serviceAreas = [
    {
      title: "Idea to MVP Development",
      description: "Transform your concept into a market-ready minimum viable product",
      highlights: [
        "Rapid prototyping and validation in 4-6 weeks",
        "Customer feedback integration and iterative improvements",
        "Technical roadmap creation for scalable growth"
      ],
      icon: Globe,
      gradient: "from-warm-teal to-sage-green"
    },
    {
      title: "Product Launch Strategy",
      description: "End-to-end product launch from conception to market success",
      highlights: [
        "Go-to-market strategies that generate immediate traction",
        "Revenue optimization and monetization models", 
        "Market positioning and competitive analysis"
      ],
      icon: Users,
      gradient: "from-warm-orange to-deep-coral"
    },
    {
      title: "Startup Mentoring & Consulting",
      description: "One-on-one guidance for entrepreneurs and product teams",
      highlights: [
        "Product strategy sessions and roadmap development",
        "Investor pitch preparation and fundraising support",
        "Team building and product culture development"
      ],
      icon: BookOpen,
      gradient: "from-golden-yellow to-sunshine"
    }
  ];

  const results = [
    "20+ successful product launches from idea to market",
    "$100M+ in total revenue generated across all products",
    "15+ years of product experience across finance, healthcare, and tech",
    "100+ entrepreneurs mentored in product development",
    "Published author and speaker on MVP strategies",
    "4-6 week average time from concept to MVP launch"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-warm-orange/5">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-warm-orange/10 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-soft-charcoal hover:text-warm-orange"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full bg-gradient-to-br from-warm-orange via-deep-coral to-warm-teal rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-soft-charcoal">SS</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-golden-yellow to-sunshine rounded-full flex items-center justify-center shadow-lg">
                <Star className="text-white" size={20} />
              </div>
            </div>
            
            <h1 className="font-inter text-4xl sm:text-5xl font-bold text-soft-charcoal mb-4">
              Sanjay Sahni
            </h1>
            <p className="text-xl text-warm-orange font-semibold mb-6">
              Product Expert & Idea-to-MVP Specialist
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                A seasoned Product Expert who transforms ideas into reality. Specializes in launching MVPs, 
                building products from concept to market, and empowering individuals to bring their visions to life. 
                Passionate about turning dreams into tangible products that create real impact.
              </p>
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-warm-orange/10 via-golden-yellow/8 to-warm-teal/10 p-8 rounded-3xl border-2 border-warm-orange/20 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-warm-orange to-deep-coral rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="text-white" size={24} />
                </div>
              </div>
              <blockquote className="text-center">
                <p className="text-2xl font-inter font-semibold text-soft-charcoal mb-4">
                  "Every great product starts with a simple idea and the courage to build it"
                </p>
                <p className="text-lg text-gray-600 italic">
                  My mission is to help dreamers turn their ideas into successful products. From concept to MVP to market launch, 
                  I believe every individual has the potential to create something extraordinary that changes lives.
                </p>
              </blockquote>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-inter text-3xl font-bold text-soft-charcoal text-center mb-6">
              How I Can Help Bring Your Ideas to Life
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              With over 15 years of product experience across Wall Street, healthcare, and startups, 
              I've helped launch products that generated over $100M in revenue. Here's how we can work together:
            </p>
            <div className="grid gap-8">
              {serviceAreas.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-warm-orange/20 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <service.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="font-inter text-xl font-bold text-soft-charcoal mb-2">{service.title}</h3>
                        <p className="text-warm-orange font-medium mb-4">{service.description}</p>
                      </div>
                      <ul className="space-y-2">
                        {service.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-warm-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-inter text-3xl font-bold text-soft-charcoal text-center mb-6">
              Proven Results
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Numbers don't lie. Here's the impact I've made for clients and partners across industries:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/80 to-warm-orange/5 p-6 rounded-xl border border-warm-orange/20 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-warm-orange to-deep-coral rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="text-white" size={14} />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">{result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connection to BeyRozGaar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-warm-teal/10 via-sage-green/8 to-golden-yellow/10 p-8 rounded-3xl border-2 border-warm-teal/30 shadow-xl">
              <h2 className="font-inter text-3xl font-bold text-soft-charcoal mb-6">
                Why BeyRozGaar बे-रोज़गार <span className="text-xl">(unemployed)</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                After launching countless products and seeing amazing ideas come to life, I realized the biggest barrier isn't 
                technical skills—it's belief and connection. BeyRozGaar creates a space where dreamers meet over 
                चाय <span className="text-sm">(chai)</span> and coffee, sharing ideas and supporting each other to build 
                the next breakthrough product. Every great innovation starts with a simple conversation.
              </p>
              <Button
                onClick={() => setLocation('/')}
                className="gradient-warm text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Users className="mr-2" size={20} />
                Join Our Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}