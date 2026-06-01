import { ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      issuer: "IIT Roorkee & RBPL",
      date: "2024",
      image: ds
    },
    {
      title: "MERN Full Stack Certification Program",
      issuer: "ETHNUS",
      date: "2025",
      image: mern
    },
    {
      title: "Machine Learning with Python",
      issuer: "IIT Roorkee & RBPL",
      date: "2024",
      image: ml
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise in various technologies.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group flex-none w-80 bg-gradient-card rounded-2xl overflow-hidden shadow-md hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 snap-start"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">{cert.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    Issued by <span className="font-medium text-foreground">{cert.issuer}</span>
                  </p>

                  {/* Button opens certificate image in new tab */}
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(cert.image, "_blank", "noopener,noreferrer")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open Certificate
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {certificates.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-border hover:bg-primary transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
