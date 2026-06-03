import { Code, Database, Smartphone, Globe, Github, ExternalLink, Cpu } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "CareerByte (AI Interview Platform)",
      description: "An advanced AI-powered platform for realistic interview simulations, featuring voice, video, and performance analytics.",
      tech: [
        { name: "React", icon: Code },
        { name: "Node.js", icon: Database },
        { name: "AI / ML", icon: Cpu },
        { name: "Cloudinary", icon: Globe }
      ],
      github: "https://github.com/IshanAmrit28/CareerByte",
      demo: "https://career-byte.vercel.app/"
    },
    {
      title: "Cardiovascular Disease Detection",
      description: "A predictive healthcare application leveraging machine learning models to analyze medical data for early CVD detection.",
      tech: [
        { name: "Python", icon: Database },
        { name: "Machine Learning", icon: Cpu },
        { name: "Data Modeling", icon: Code }
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Naruto Programming Language",
      description: "A custom-built interpreted programming language with its own syntax, lexer, parser, and evaluator inspired by anime.",
      tech: [
        { name: "TypeScript", icon: Code },
        { name: "Compilers", icon: Cpu },
        { name: "AST", icon: Database }
      ],
      github: "https://github.com/IshanAmrit28/NARUTO",
      demo: "https://naruto-playground.vercel.app/"
    },
    {
      title: "Full-Stack Chat Application",
      description: "Real-time messaging platform with user authentication, online status tracking, and instant message delivery.",
      tech: [
        { name: "React", icon: Code },
        { name: "Node.js", icon: Database },
        { name: "Socket.io", icon: Globe },
        { name: "MongoDB", icon: Database }
      ],
      github: "https://github.com/IshanAmrit28/ChatApp",
      demo: "https://chat-app-five-roan-35.vercel.app/"
    },
    {
      title: "Smart Expense Tracker",
      description: "A comprehensive dashboard for tracking personal finances, visualizing spending habits, and managing budgets.",
      tech: [
        { name: "React", icon: Code },
        { name: "Tailwind CSS", icon: Globe },
        { name: "Chart.js", icon: Code }
      ],
      github: "https://github.com/IshanAmrit28/ExTracker",
      demo: "https://extracker-jade.vercel.app/"
    },
    {
      title: "4 in a Row Game",
      description: "A classic strategic multiplayer board game built for the web with an interactive UI and game state management.",
      tech: [
        { name: "JavaScript", icon: Code },
        { name: "HTML5 / CSS3", icon: Globe },
        { name: "Game Logic", icon: Cpu }
      ],
      github: "https://github.com/IshanAmrit28/FourInARow",
      demo: "https://four-in-a-row-seven.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills in full-stack development and AI/ML.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-gradient-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 rounded-md border border-primary/20"
                    >
                      <tech.icon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-semibold text-primary">{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link">
                    <Github className="w-4 h-4 group-hover/link:text-primary transition-colors" />
                    Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link">
                    <ExternalLink className="w-4 h-4 group-hover/link:text-primary transition-colors" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
