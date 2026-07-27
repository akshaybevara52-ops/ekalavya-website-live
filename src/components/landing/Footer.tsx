import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B1A30] text-white pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
              <img src="/logo.jpg" alt="Ekalavya Logo" className="h-12 w-12 rounded-lg object-cover bg-white p-0.5" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-tight text-white">Ekalavya</span>
                <span className="text-xs tracking-wider uppercase font-semibold text-gray-400">Coaching Center</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premier coaching institute dedicated to preparing students for Sainik School, Navodaya Vidyalaya, and achieving academic excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61591736765627" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D59F15] transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="https://x.com/EkalavyaVZM" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D59F15] transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/ekalavya_coaching_vzm/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D59F15] transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/channel/UC1wUp-xEsmK3YiCFEcMNhxQ" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D59F15] transition-colors" aria-label="Youtube"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-gray-400 hover:text-[#D59F15] transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-400 hover:text-[#D59F15] transition-colors">About Us</a></li>
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="text-gray-400 hover:text-[#D59F15] transition-colors">Our Courses</a></li>
              <li><a href="#results" onClick={(e) => handleNavClick(e, '#results')} className="text-gray-400 hover:text-[#D59F15] transition-colors">Success Stories</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="text-gray-400 hover:text-[#D59F15] transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Our Programs</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Sainik School Coaching</li>
              <li className="text-gray-400">Navodaya Coaching</li>
              <li className="text-gray-400">Foundation (Class 1–5)</li>
              <li className="text-gray-400">Tuition (Class 6–10)</li>
              <li className="text-gray-400">Summer Camp</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D59F15] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">Dasannapet, Vizianagaram,<br />Andhra Pradesh 535002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D59F15] shrink-0" />
                <a href="tel:+919110783437" className="text-gray-400 hover:text-[#D59F15] transition-colors">+91 91107 83437</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D59F15] shrink-0" />
                <a href="mailto:ekalavyavzm@gmail.com" className="text-gray-400 hover:text-[#D59F15] transition-colors">ekalavyavzm@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} Ekalavya Sainik & Navodaya Coaching Center. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}