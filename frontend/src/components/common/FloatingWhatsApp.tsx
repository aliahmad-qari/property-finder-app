import React from 'react';
import { WhatsApp } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = '+923079922301';
  const message = "Hi, I'm interested in a property";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
<button
  onClick={() => window.open(whatsappUrl, '_blank')}
  className="fixed bottom-8 right-8 z-[100] bg-primary text-[#F9FAFB] p-4 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
  aria-label="Contact on WhatsApp"
>
  <WhatsApp className="w-7 h-7 hover:rotate-12 transition-transform" />
</button>
  );
};

export default FloatingWhatsApp;
