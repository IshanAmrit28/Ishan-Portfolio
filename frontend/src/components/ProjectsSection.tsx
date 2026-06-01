import { Code, Database, Smartphone, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Breast Cancer Detection App",
      description: "A predictive healthcare app using machine learning for early breast cancer detection.",
      tech: [
        { name: "Flutter", icon: Smartphone },
        { name: "Python", icon: Database },
        { name: "Machine Learning", icon: Code }
      ]
    },
    {
      title: "Cardiovascular Disease Prediction Web App",
      description: "Web application analyzing retinal images to predict cardiovascular disease using statistical modeling.",
      tech: [
        { name: "Web", icon: Globe },
        { name: "Python", icon: Database },
        { name: "Data Modeling", icon: Code }
      ]
    },
    {
      title: "AI-powered Interview Coaching Platform",
      description: "Platform integrating voice, video, and AI-driven performance analytics for realistic interview simulations.",
      tech: [
        { name: "React", icon: Code },
        { name: "Node.js", icon: Database },
        { name: "AI / ML", icon: Code },
        { name: "Cloudinary", icon: Globe }
      ]
    },
    {
      title: "Password Generator Web Application",
      description: "A secure and customizable password generator with options for length, character types, and strength validation.",
      tech: [
        { name: "React", icon: Code },
        { name: "JavaScript", icon: Code },
        { name: "CSS", icon: Globe }
      ]
    },
    {
      title: "Job Board Web Application",
      description: "A full-stack job board platform with cloud integration, user authentication, and real-time job listings.",
      tech: [
        { name: "React", icon: Code },
        { name: "Node.js", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "Cloud Services", icon: Globe }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills in full-stack development and AI/ML.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-card rounded-2xl p-6 shadow-md hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg border border-primary/20"
                  >
                    <tech.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
