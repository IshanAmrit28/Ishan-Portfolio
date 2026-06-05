import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CodingProfilesSection from '@/components/CodingProfilesSection';
import ContactSection from '@/components/ContactSection';
import BackgroundEffects from '@/components/BackgroundEffects';
import { Github, Linkedin, Mail } from 'lucide-react';

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground relative">
      <BackgroundEffects />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <CodingProfilesSection />
          <ContactSection />
        </main>
        
        <footer className="border-t border-primary/20 bg-background/50 backdrop-blur-md mt-auto py-8">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Ishan Amrit Srivastava.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/IshanAmrit28" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/naruto404" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ishansrivastava2805@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;