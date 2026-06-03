import profilePhoto from '@/assets/profile-photo.jpeg';
import resume from '@/assets/Resume.pdf'; 
import { Download, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-32 pb-20 bg-gradient-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* About Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
              <span className="block text-foreground mb-2">Hello, I'm</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Ishan Amrit Srivastava
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I am a final-year Computer Science student at VIT Bhopal, deeply passionate about technology and its potential to transform ideas into impactful solutions. I constantly explore emerging tools across software development, cloud computing, and artificial intelligence. 
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-glow transition-all duration-300">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 rounded-full border-primary/20 hover:bg-primary/5 transition-all duration-300" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative shapes */}
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6 opacity-30 group-hover:rotate-12 transition-transform duration-500 hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform -rotate-3 opacity-30 group-hover:-rotate-6 transition-transform duration-500 hidden md:block"></div>
              
              <div className="relative bg-card rounded-2xl p-2 shadow-xl border border-border/50 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 z-10 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={profilePhoto}
                  alt="Ishan Amrit Srivastava"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
