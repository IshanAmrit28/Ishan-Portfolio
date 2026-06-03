import profilePhoto from '@/assets/profile-photo.jpeg';
import resume from '@/assets/Resume.pdf'; 
import { Download, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-32 pb-20 relative">
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* About Content */}
          <div className="text-left mt-12 lg:mt-0 order-2 lg:order-1">
            <div className="inline-block border border-primary/30 rounded-full px-4 py-1 mb-6 bg-primary/5">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
              Hi, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Ishan Amrit Srivastava
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-light">
              I am a final-year Computer Science student at VIT Bhopal, passionate about crafting innovative software, exploring artificial intelligence, and building full-stack applications that make an impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 bg-primary text-background font-semibold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-background text-white border border-primary/30 font-semibold py-4 px-8 rounded-full hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="w-5 h-5 text-primary" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 border border-primary/20 bg-background/50 backdrop-blur-sm shadow-[0_0_50px_rgba(0,212,255,0.15)]">
              {/* Outer rotating dashed ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/50 animate-[spin_20s_linear_infinite]"></div>
              
              <img
                src={profilePhoto}
                alt="Ishan Amrit Srivastava"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
