import { Coffee, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
    { label: "Meetups", sectionId: "meetups" },
    { label: "Stories", sectionId: "stories" },
    { label: "Contact", sectionId: "contact" }
  ];

  const communityLinks = [
    { label: "Join Meetups", href: "#meetups" },
    { label: "Share Story", href: "#stories" },
    { label: "Guidelines", href: "#" },
    { label: "Support", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gradient-warm rounded-full flex items-center justify-center">
                <Coffee className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-inter text-xl font-bold">BeyRozGaar</h3>
                <p className="text-sm text-gray-400">बे-रोज़गार</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering individuals to discover their unlimited potential and write their next chapter. 
              Join our community of dreamers, believers, and achievers.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="text-warm-orange hover:text-deep-coral transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-300 hover:text-warm-orange transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Community</h4>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-warm-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 BeyRozGaar. Made with ❤️ for dreamers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
