import { motion } from "framer-motion";
import { Heart, Infinity, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Be Authentic",
      description: "No masks, no pretense. Just be yourself. Your authenticity is your superpower.",
      gradient: "from-warm-orange/5 to-deep-coral/5",
      iconBg: "gradient-warm"
    },
    {
      icon: Infinity,
      title: "Unlimited Dreams", 
      description: "Your dreams have no limits. Together, we'll explore all possibilities and find your path.",
      gradient: "from-warm-teal/5 to-sage-green/5",
      iconBg: "gradient-teal"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our गप-शप sessions over chai and coffee. Real connections, real support.",
      gradient: "from-golden-yellow/5 to-sunshine/5", 
      iconBg: "gradient-sunshine"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-inter text-3xl sm:text-4xl font-bold text-soft-charcoal mb-6">
            Keep Life <span className="text-warm-orange">Simple</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BeyRozGaar is more than just a community—it's a movement. We believe that being unemployed 
            doesn't define you. Your potential is unlimited, and your next chapter is waiting to be written.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`text-center p-8 bg-gradient-to-br ${feature.gradient} rounded-2xl hover:shadow-lg transition-shadow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="font-inter text-xl font-semibold text-soft-charcoal mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
