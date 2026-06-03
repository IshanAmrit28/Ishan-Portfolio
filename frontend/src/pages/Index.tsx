import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      
      {/* Footer Makeover */}
      <footer className="bg-card border-t border-border mt-auto">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl font-black bg-gradient-primary bg-clip-text text-transparent mb-4">Ishan.</h2>
              <p className="text-muted-foreground text-sm max-w-xs">
                A final-year CS student passionate about building scalable, user-centric web applications and AI models.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</a>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">Experience</a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">Projects</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h3 className="font-bold text-foreground mb-4">Socials</h3>
              <div className="flex gap-4">
                <a href="https://github.com/IshanAmrit28" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/naruto404" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:ishansrivastava2805@gmail.com" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ishan Amrit Srivastava. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive animate-pulse" /> in India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;