// import { useState, useEffect } from 'react';
// import ThemeToggle from './ThemeToggle';

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState('about');

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['about', 'projects', 'certificates', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const height = element.offsetHeight;
          
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { id: 'about', label: 'About' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'certificates', label: 'Certificates' },
//     { id: 'contact', label: 'Contact' }
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
//             Portfolio
//           </div>
          
//           <div className="flex items-center gap-4">
//             <div className="hidden md:flex space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`relative py-2 px-4 text-sm font-medium transition-all duration-300 rounded-lg ${
//                     activeSection === item.id
//                       ? 'text-primary bg-primary/10'
//                       : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
//                   }`}
//                 >
//                   {item.label}
//                   {activeSection === item.id && (
//                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             <ThemeToggle />
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button className="p-2 text-muted-foreground hover:text-primary">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import ThemeToggle from "./ThemeToggle";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navLinks = [
//     { label: "About", href: "#about" },
//     { label: "Projects", href: "#projects" },
//     { label: "Certificates", href: "#certificates" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 shadow-md">
//       <div className="container mx-auto px-6 flex justify-between items-center h-16">
//         <div className="text-2xl font-bold text-primary"></div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-6 items-center">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-muted-foreground hover:text-primary transition-colors"
//             >
//               {link.label}
//             </a>
//           ))}
//           <ThemeToggle />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <ThemeToggle />
//           <button
//             onClick={toggleMenu}
//             className="ml-2 p-2 text-muted-foreground hover:text-primary focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-background/90 backdrop-blur-md shadow-md">
//           <div className="flex flex-col gap-4 px-6 py-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-muted-foreground hover:text-primary transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle"; // Assuming you have this component

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-foreground cursor-pointer" onClick={() => scrollToSection('about')}>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection("certificates")} className="hover:text-primary transition-colors">
            Certificates
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
            Contact
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg py-4 flex flex-col items-center gap-4">
          <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection("certificates")} className="hover:text-primary transition-colors">
            Certificates
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

