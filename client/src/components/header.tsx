import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-warm rounded-full flex items-center justify-center">
              <Coffee className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-inter text-2xl font-bold text-soft-charcoal">BeyRozGaar</h1>
              <p className="text-xs text-gray-500 font-medium">बे-रोज़गार <span className="text-xs">(unemployed)</span></p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-soft-charcoal hover:text-warm-orange transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-soft-charcoal hover:text-warm-orange transition-colors">About</button>
            <button onClick={() => scrollToSection('meetups')} className="text-soft-charcoal hover:text-warm-orange transition-colors">Meetups</button>
            <button onClick={() => scrollToSection('stories')} className="text-soft-charcoal hover:text-warm-orange transition-colors">Stories</button>
            <button onClick={() => scrollToSection('contact')} className="text-soft-charcoal hover:text-warm-orange transition-colors">Contact</button>
          </div>
          
          <button 
            className="md:hidden text-soft-charcoal hover:text-warm-orange"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-soft-charcoal hover:text-warm-orange transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="block text-soft-charcoal hover:text-warm-orange transition-colors">About</button>
            <button onClick={() => scrollToSection('meetups')} className="block text-soft-charcoal hover:text-warm-orange transition-colors">Meetups</button>
            <button onClick={() => scrollToSection('stories')} className="block text-soft-charcoal hover:text-warm-orange transition-colors">Stories</button>
            <button onClick={() => scrollToSection('contact')} className="block text-soft-charcoal hover:text-warm-orange transition-colors">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}
