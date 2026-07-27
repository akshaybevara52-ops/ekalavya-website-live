import { useState, useEffect } from "react";
import { Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Results", href: "#results" },
    { name: "Gallery", href: "#gallery" },
    { name: "Admission", href: "#admission" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      {/* Top Bar */}
      <div className="bg-[#142D52] text-white py-2 px-4 md:px-8 text-xs md:text-sm font-medium">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 hover:text-[#D59F15] transition-colors">
              <Phone className="w-4 h-4" />
              <a href="tel:+919110783437">+91 91107 83437</a>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Dasannapet, Vizianagaram, AP 535002</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/profile.php?id=61591736765627" target="_blank" rel="noreferrer" className="hover:text-[#D59F15] transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href="https://x.com/EkalavyaVZM" target="_blank" rel="noreferrer" className="hover:text-[#D59F15] transition-colors" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/ekalavya_coaching_vzm/" target="_blank" rel="noreferrer" className="hover:text-[#D59F15] transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
            <a href="https://www.youtube.com/channel/UC1wUp-xEsmK3YiCFEcMNhxQ" target="_blank" rel="noreferrer" className="hover:text-[#D59F15] transition-colors" aria-label="Youtube"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Ekalavya Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover bg-white p-0.5" />
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg md:text-xl leading-tight ${isScrolled ? "text-[#142D52] dark:text-white" : "text-white"} `}>
                Ekalavya
              </span>
              <span className={`text-[10px] md:text-xs tracking-wider uppercase font-semibold ${isScrolled ? "text-[#1A3A6B] dark:text-gray-300" : "text-gray-200"}`}>
                Coaching Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-medium text-sm transition-colors ${isScrolled ? "text-[#142D52] hover:text-[#D59F15] dark:text-gray-200 dark:hover:text-[#D59F15]" : "text-white/90 hover:text-white"}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 rounded-full transition-colors ${isScrolled ? "bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200" : "bg-white/10 hover:bg-white/20 text-white"}`}
                aria-label="Toggle Theme"
              >
                {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
              </button>
              <a 
                href="#admission" 
                onClick={(e) => handleNavClick(e, '#admission')}
                className="bg-[#D59F15] hover:bg-[#b88812] text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-[0_4px_14px_0_rgba(213,159,21,0.39)] hover:shadow-[0_6px_20px_rgba(213,159,21,0.23)] hover:-translate-y-0.5"
              >
                Enroll Now
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full transition-colors ${isScrolled ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" : "bg-white/10 text-white"}`}
              aria-label="Toggle Theme"
            >
              {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            </button>
            <button 
              className={`p-2 ${isScrolled ? "text-[#142D52] dark:text-white" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 text-[#142D52] dark:text-white font-medium hover:text-[#D59F15] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#admission" 
            onClick={(e) => handleNavClick(e, '#admission')}
            className="bg-[#D59F15] text-white text-center px-6 py-3 rounded-full font-medium mt-2 shadow-md hover:bg-[#b88812]"
          >
            Enroll Now
          </a>
        </div>
      )}
    </header>
  );
}