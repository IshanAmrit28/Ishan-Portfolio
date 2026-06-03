import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Github, Linkedin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-2xl font-black tracking-tighter bg-gradient-primary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={() => scrollToSection('about')}
        >
          Ishan.
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)} 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <a href="https://github.com/IshanAmrit28" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/naruto404" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl shadow-lg border-b border-border py-6 flex flex-col items-center gap-6 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)} 
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="flex gap-6 mt-4 pt-6 border-t border-border/50 w-2/3 justify-center">
            <a href="https://github.com/IshanAmrit28" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/naruto404" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
