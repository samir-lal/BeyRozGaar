import { useEffect } from 'react';
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MeetupSection from "@/components/meetup-section";
import StoriesSection from "@/components/stories-section";
import CommunityGallery from "@/components/community-gallery";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingActionButton from "@/components/floating-action-button";

export default function Home() {
  // SEO for home page
  useEffect(() => {
    document.title = "BeyRozGaar - Community Platform for Unemployed Dreamers | Connect, Grow, Transform";
    
    const existingDesc = document.querySelector('meta[name="description"]');
    if (existingDesc) {
      existingDesc.setAttribute('content', 'Join BeyRozGaar, a supportive community platform connecting unemployed individuals through chai/coffee meetups. Discover unlimited potential, share authentic stories, and transform your career journey with like-minded dreamers worldwide.');
    }
  }, []);

  return (
    <div className="bg-warm-gray min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MeetupSection />
      <StoriesSection />
      <CommunityGallery />
      <ContactSection />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
