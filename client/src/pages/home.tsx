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
