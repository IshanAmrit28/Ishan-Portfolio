import { ExternalLink, Award } from 'lucide-react';
import ml from '@/assets/ML.jpeg';
import ds from '@/assets/DS.jpeg';
import aws from '@/assets/AWS.jpg';
import mern from '@/assets/MERN.jpg';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "ETHNUS",
      date: "2025",
      image: aws
    },
    {
      title: "Comprehensive Data Science for Beginners",
      issuer: "IIT Roorkee",
      date: "2024",
      image: ds
    },
    {
      title: "MERN Full Stack Certification",
      issuer: "ETHNUS",
      date: "2025",
      image: mern
    },
    {
      title: "Machine Learning with Python",
      issuer: "IIT Roorkee",
      date: "2024",
      image: ml
    }
  ];

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Licenses & <span className="text-primary">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="group bg-card/40 backdrop-blur-sm border border-primary/20 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,212,255,0.1)]"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">{cert.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Issued by {cert.issuer}
                </p>
                
                <button 
                  onClick={() => window.open(cert.image, "_blank", "noopener,noreferrer")}
                  className="w-full py-3 flex items-center justify-center gap-2 rounded-xl bg-background border border-primary/30 text-white font-medium hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                >
                  View Credential <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
