import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // TODO: Submit to backend
    setEmail('');
  };

  return (
    <footer className="bg-[#111827] text-[#F9FAFB]">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
<Link to="/" className="flex items-center gap-3 mb-6">
  <div className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg text-[#F9FAFB] font-bold text-2xl">E</div>
  <span className="font-fraunces text-2xl font-bold text-[#F9FAFB]">EstateFlow</span>
</Link>
            <p className="font-manrope font-extralight text-[#9ca3af] text-sm leading-relaxed mb-6">
              A premium, high-performance real estate platform designed for seamless property discovery and professional showcases. Experience the future of property browsing.
            </p>
{/* Social Links */}
<div className="flex gap-3">
  <a 
    href="https://www.linkedin.com/in/muhammad-ali-ahmad-mern" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 bg-[rgba(255,255,255,0.05)] hover:bg-primary hover:scale-110 border border-[rgba(255,255,255,0.1)] rounded-lg flex items-center justify-center transition-all group"
  >
    <Linkedin className="w-5 h-5 text-[#9ca3af] group-hover:text-[#F9FAFB] transition-colors" />
  </a>
  <a 
    href="https://github.com/AAYUSH412" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 bg-[rgba(255,255,255,0.05)] hover:bg-primary hover:scale-110 border border-[rgba(255,255,255,0.1)] rounded-lg flex items-center justify-center transition-all group"
  >
    <Github className="w-5 h-5 text-[#9ca3af] group-hover:text-[#F9FAFB] transition-colors" />
  </a>
</div>
          </div>

          {/* Quick Links Column */}
<div>
  <h4 className="font-syne font-bold text-white text-lg mb-6">Quick Links</h4>
  <ul className="space-y-3">
    <li>
      <Link to="/properties" className="font-manrope font-extralight text-[#9ca3af] text-sm hover:text-[#F9FAFB] hover:pl-2 transition-all inline-block">
        Browse Properties
      </Link>
    </li>
    <li>
      <Link to="/about" className="font-manrope font-extralight text-[#9ca3af] text-sm hover:text-[#F9FAFB] hover:pl-2 transition-all inline-block">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/contact" className="font-manrope font-extralight text-[#9ca3af] text-sm hover:text-[#F9FAFB] hover:pl-2 transition-all inline-block">
        Contact
      </Link>
    </li>
    <li>
      <Link to="/blog" className="font-manrope font-extralight text-[#9ca3af] text-sm hover:text-[#F9FAFB] hover:pl-2 transition-all inline-block">
        Blog
      </Link>
    </li>
    <li>
      <Link to="/careers" className="font-manrope font-extralight text-[#9ca3af] text-sm hover:text-[#F9FAFB] hover:pl-2 transition-all inline-block">
        Careers
      </Link>
    </li>
    <li>
      <a href="#" className="font-manrope font-extralight text-[#9ca3af] text-sm hover:text-[#F9FAFB] hover:pl-2 transition-all inline-block">
        Privacy Policy
      </a>
    </li>
    <li>
      <a href="#" className="font-manrope font-extralight text-[#9ca3af] text-sm hover:text-[#F9FAFB] hover:pl-2 transition-all inline-block">
        Terms of Service
      </a>
    </li>
    <li>
      <a href="#" className="font-manrope font-extralight text-[#9ca3af] text-sm hover:text-[#F9FAFB] hover:pl-2 transition-all inline-block">
        Cookie Policy
      </a>
    </li>
    <li>
      <a href="#" className="font-manrope font-extralight text-[#9ca3af] text-sm hover:text-[#F9FAFB] hover:pl-2 transition-all inline-block">
        Sitemap
      </a>
    </li>
  </ul>
</div>

          {/* Contact Info Column */}
          <div>
            <h4 className="font-syne font-bold text-[#F9FAFB] text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
<div className="flex items-start gap-3">
  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
  <span className="leading-relaxed">
    502, Devpath Building,<br />
    Near Torrent Lab,<br />
    Ashram Road, Ahmedabad
  </span>
</div>
              </li>
<li>
<a href="tel:+923079922301" className="flex items-center gap-3 font-manrope font-extralight text-sm text-[#9ca3af] hover:text-[#F9FAFB] transition-colors group">
  <Phone className="w-5 h-5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
  <span>+92 307 9922301</span>
</a>
               </li>
               <li>
<a href="mailto:muhammad.ali.ahmad@example.com" className="flex items-center gap-3 font-manrope font-extralight text-sm text-[#9ca3af] hover:text-[#F9FAFB] transition-colors group">
  <Mail className="w-5 h-5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
  <span>muhammad.ali.ahmad@example.com</span>
</a>
               </li>
             </ul>
           </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-syne font-bold text-white text-lg mb-6">Stay Updated</h4>
            <p className="font-manrope font-extralight text-[#9ca3af] text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest listings, market insights, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 font-manrope font-extralight text-sm text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#D4755B] transition-colors"
                required
              />
              <button 
                type="submit"
                className="w-full bg-[#D4755B] hover:bg-[#C05621] text-white font-manrope font-bold text-sm px-4 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
            <p className="font-manrope font-extralight text-[#6b7280] text-xs mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-manrope font-extralight text-[#374151] text-sm text-center md:text-left">
  © 2026 EstateFlow. All rights reserved. Professional Portfolio Project.
</p>
            <div className="flex flex-wrap justify-center gap-6">
<a href="#" className="font-manrope font-extralight text-[#374151] text-sm hover:text-[#D4755B] transition-colors">
  Privacy Policy
</a>
<a href="#" className="font-manrope font-extralight text-[#374151] text-sm hover:text-[#D4755B] transition-colors">
  Terms of Service
</a>
<a href="#" className="font-manrope font-extralight text-[#374151] text-sm hover:text-[#D4755B] transition-colors">
  Cookie Policy
</a>
<a href="#" className="font-manrope font-extralight text-[#374151] text-sm hover:text-[#D4755B] transition-colors">
  Sitemap
</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;