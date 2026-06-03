import { GraduationCap, Code2, Database, Cloud, BookOpen, Layers } from 'lucide-react';

const ExperienceSection = () => {
  // Curated, impactful skills rather than a raw dump
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["C++", "JavaScript / TypeScript", "Python"]
    },
    {
      title: "Full-Stack",
      icon: Layers,
      skills: ["React.js", "Node.js", "Express", "MongoDB", "SQL", "Tailwind CSS"]
    },
    {
      title: "Cloud & Systems",
      icon: Cloud,
      skills: ["AWS", "Docker", "CI/CD", "Microservices", "System Design"]
    }
  ];

  // Keeping core CS coursework as it's highly relevant for a new grad
  const coursework = ["Data Structures & Algorithms", "Database Management", "Operating Systems", "Computer Networks"];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Experience & <span className="text-primary">Skills</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          
          {/* Education Box */}
          <div className="lg:col-span-2 bg-gradient-to-br from-card/80 to-background border border-primary/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="relative pl-8 border-l border-primary/30 space-y-8">
              <div className="relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] top-1 shadow-[0_0_10px_rgba(0,212,255,0.8)]"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold text-white">B.Tech in Computer Science</h4>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    2022 - 2026
                  </span>
                </div>
                <h5 className="text-lg text-muted-foreground mb-4">VIT Bhopal University</h5>
                <p className="text-muted-foreground/80 leading-relaxed font-light">
                  Final-year student specializing in core computer science concepts, software engineering, and artificial intelligence. Actively participating in tech communities and building hands-on projects.
                </p>
              </div>
            </div>
          </div>

          {/* Coursework Box */}
          <div className="lg:col-span-1 bg-gradient-to-bl from-card/80 to-background border border-primary/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-primary/50 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Core CSE</h3>
            </div>
            
            <ul className="space-y-4">
              {coursework.map((course, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,212,255,0.8)]"></div>
                  <span className="text-muted-foreground leading-snug">{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills Grid Box */}
        <div className="max-w-6xl mx-auto bg-gradient-to-t from-card/80 to-background border border-primary/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
           <div className="absolute bottom-0 left-1/2 w-96 h-64 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
           
           <h3 className="text-2xl font-bold text-white mb-10 text-center">Technical Arsenal</h3>
           
           <div className="grid md:grid-cols-3 gap-10 relative z-10">
             {skillCategories.map((category, index) => (
               <div key={index} className="space-y-4">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-primary/10 rounded-lg">
                     <category.icon className="w-4 h-4 text-primary" />
                   </div>
                   <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {category.skills.map((skill, skillIndex) => (
                     <span 
                       key={skillIndex} 
                       className="text-xs font-medium text-white/90 bg-background border border-primary/30 px-3 py-2 rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default shadow-sm"
                     >
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
