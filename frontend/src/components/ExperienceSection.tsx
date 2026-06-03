import { GraduationCap, Briefcase, Code2, Cpu, Database } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: "education",
      icon: GraduationCap,
      title: "B.Tech in Computer Science",
      organization: "VIT Bhopal University",
      date: "2021 - 2025",
      description: "Final-year student specializing in core computer science concepts, software engineering, and artificial intelligence. Actively participating in tech communities and building hands-on projects."
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Flutter"]
    },
    {
      title: "Backend & Cloud",
      icon: Database,
      skills: ["Node.js", "Express", "MongoDB", "Python", "AWS Cloud"]
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      skills: ["Machine Learning", "Data Modeling", "Statistical Analysis", "Computer Vision"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and the technical arsenal I use to build scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Education / Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-primary w-6 h-6" /> 
              Journey
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 z-10 ml-0 md:ml-auto">
                    <exp.icon className="w-4 h-4" />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl shadow-sm border border-border/50 group-hover:border-primary/30 group-hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h4 className="font-bold text-lg text-foreground">{exp.title}</h4>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-foreground/80 font-medium mb-3">{exp.organization}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Code2 className="text-primary w-6 h-6" /> 
              Technical Arsenal
            </h3>
            
            <div className="grid gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{category.title}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default border border-border/50"
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
      </div>
    </section>
  );
};

export default ExperienceSection;
