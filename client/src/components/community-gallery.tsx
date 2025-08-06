import { motion } from "framer-motion";

export default function CommunityGallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Community members sharing stories and laughing together"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400", 
      alt: "Bright, inspiring workspace with plants and natural light"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Friends having deep conversations over hot beverages"
    },
    {
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Cozy community space with warm lighting and comfortable seating"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-gray to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-inter text-3xl sm:text-4xl font-bold text-soft-charcoal mb-6">
            Our Community in Action
          </h2>
          <p className="text-lg text-gray-600">
            See the magic happen when people come together with open hearts.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-48 object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
