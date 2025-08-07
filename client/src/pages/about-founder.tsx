import { motion } from 'framer-motion';
import { ArrowLeft, Users, Award, BookOpen, Globe, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function AboutFounder() {
  const [, setLocation] = useLocation();

  const experiences = [
    {
      company: "Karl Storz (Medical Devices)",
      role: "Product Leader",
      period: "May 2021 - Present",
      highlights: [
        "Launched multiple medical device products from concept to market",
        "Built product roadmaps that delivered $50M+ in revenue growth",
        "Created MVPs that transformed customer feedback into successful products"
      ],
      icon: Globe,
      gradient: "from-warm-teal to-sage-green"
    },
    {
      company: "Amgen (Biotechnology)",
      role: "Sr. Product Leader", 
      period: "May 2021 - Present",
      highlights: [
        "Launched 5+ product lines from ideation to market success",
        "Built customer-centric products that solved real healthcare problems",
        "Created proof-of-concepts that secured millions in funding"
      ],
      icon: Users,
      gradient: "from-warm-orange to-deep-coral"
    },
    {
      company: "Product Academy",
      role: "Co-Founder",
      period: "June 2020 - Present", 
      highlights: [
        "Helps entrepreneurs turn ideas into successful MVP launches",
        "Mentored 100+ founders in product development strategies",
        "Created frameworks for rapid idea-to-market execution"
      ],
      icon: BookOpen,
      gradient: "from-golden-yellow to-sunshine"
    }
  ];

  const achievements = [
    "Launched 20+ successful products from idea to market in 5 years",
    "Built MVPs that generated $100M+ in total revenue across industries",
    "Wall Street product experience: HSBC, Morgan Stanley, Deutsche Bank",
    "Published author and speaker on Product Development and MVP strategies",
    "Mentored 100+ entrepreneurs in turning ideas into profitable products",
    "Expert in rapid prototyping and customer-validated product launches"
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

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-inter text-3xl font-bold text-soft-charcoal text-center mb-12">
              Professional Journey
            </h2>
            <div className="grid gap-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-warm-orange/20 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <exp.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="font-inter text-xl font-bold text-soft-charcoal">{exp.company}</h3>
                          <p className="text-warm-orange font-semibold">{exp.role}</p>
                        </div>
                        <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
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

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-inter text-3xl font-bold text-soft-charcoal text-center mb-12">
              Key Achievements
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
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
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
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