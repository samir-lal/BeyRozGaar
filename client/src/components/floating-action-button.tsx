import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingActionButton() {
  const scrollToMeetup = () => {
    const element = document.getElementById('meetups');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={scrollToMeetup}
        className="gradient-warm text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
        size="lg"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
}
